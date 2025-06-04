import { prisma } from "../prismaSingletonClient";
import http from "http";
import WebSocket from "ws";
import { broadcastMessageSchema } from "../types/Broadcast";

type objIdType = {
  map: Map<string, WebSocket>;
};

export async function broadcastHandler(
  wss: WebSocket.Server<typeof WebSocket, typeof http.IncomingMessage>,
  received: any,
  socket: WebSocket,
  objId: objIdType
) {
  try {
    const result = broadcastMessageSchema.safeParse(received);
    if (!result.success) {
      const obj = {
        success: false,
        message: "Invalid Request, arguments missing or too long",
      };
      const sendMessage = JSON.stringify(obj);
      console.log(sendMessage, received);
      socket.send(sendMessage);
    }
    if (
      !objId.map.has(received.userId) ||
      objId.map.get(received.userId) !== socket
    ) {
      const obj = {
        success: false,
        message: "Invalid Request",
      };
      const sendMessage = JSON.stringify(obj);
      console.log(sendMessage, received);
      console.log(objId.map.get(received.userId) === socket);
      console.log(objId.map.has(received.userId));
      socket.send(sendMessage);
      socket.close();
      return;
    }
    const num =
      received.type === "Anonymous" ? Math.floor(Math.random() * 5) + 1 : 0;
    const broadcast: {
      randomNo: number;
      type: "Reveal" | "Anonymous";
      text: string;
      userId: string;
    } = {
      randomNo: num,
      type: received.type,
      text: received.text,
      userId: received.userId,
    };

    const message = await prisma.broadcastMessage.create({
      data: broadcast,
      include: {
        user: true,
      },
    });
    // console.log("received: ", message);
    const commonMessage = {
      id: message.id,
      serialNo: message.serialNo,
      orderNo: message.serialNo - message.randomNo,
      text: message.text,
      type: message.type,
      createdAt: message.createdAt,
      isSent: false,
      success: true,
      username: message.user.name,
      userId: message.user.id,
    };
    wss.clients.forEach(function each(client: WebSocket) {
      if (client.readyState === WebSocket.OPEN) {
        if (client === socket) {
          const userMessage = commonMessage;
          userMessage.isSent = true;
          userMessage.username = "";
          userMessage.userId = "";
          userMessage.orderNo += message.randomNo;
          const sentData = JSON.stringify(userMessage);
          client.send(sentData);
        } else {
          const sentData = JSON.stringify(commonMessage);
          client.send(sentData);
        }
      }
    });
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
