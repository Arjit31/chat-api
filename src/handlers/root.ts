import http from "http";
import WebSocket from "ws";
import { broadcastHandler } from "./broadcast";
import { connectionHandler } from "./connection";
import { unicastHandler } from "./unicast";

type objIdType = {
  map: Map<string, WebSocket>;
};

type Category = "broadcast" | "connection" | "unicast";

type MessageType = {
  category: Category;
  [key: string]: any;
};

const router: Record<
  Category,
  (
    wss: WebSocket.Server<typeof WebSocket, typeof http.IncomingMessage>,
    received: MessageType,
    socket: WebSocket,
    objId: objIdType
  ) => Promise<void>
> = {
  broadcast: broadcastHandler,
  connection: connectionHandler,
  unicast: unicastHandler,
};

const handlerSet = new Set<Category>(["broadcast", "connection", "unicast"]);

export async function rootHandler(
  wss: WebSocket.Server<typeof WebSocket, typeof http.IncomingMessage>,
  socket: WebSocket,
  objId: objIdType,
  data: WebSocket.RawData
) {
  try {
    const received: MessageType = JSON.parse(data.toString());
    console.log(received, received.category);
    if (!handlerSet.has(received.category)) {
      const obj = {
        success: false,
        message: "Invalid Request",
      };
      const sendMessage = JSON.stringify(obj);
      socket.send(sendMessage);
      socket.close();
      return;
    }
    const handler = router[received.category];
    await handler(wss, received, socket, objId);
  } catch (error) {
    console.log(error);
    const obj = {
      success: false,
      message: error,
    };
    const sendMessage = JSON.stringify(obj);
    socket.send(sendMessage);
    socket.close();
  }
}
