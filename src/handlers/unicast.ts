import http from "http";
import WebSocket from "ws";
import { prisma } from "../prismaSingletonClient";

type objIdType = {
  map: Map<string, WebSocket>;
};

export async function unicastHandler(
  wss: WebSocket.Server<typeof WebSocket, typeof http.IncomingMessage>,
  received: any,
  socket: WebSocket,
  objId: objIdType
) {
  try {
    if (
      !received.text ||
      !received.fromUserId ||
      !received.toUserId ||
      !objId.map.has(received.fromUserId) ||
      objId.map.get(received.fromUserId) != socket
    ) {
      socket.close();
      return;
    }
    const message: {
      text: string;
      fromUserId: string;
      toUserId: string;
    } = {
      text: received.text,
      fromUserId: received.fromUserId,
      toUserId: received.toUserId,
    };
    const personalMessage = await prisma.personalMessage.create({
      data: message,
    });
    const sendObj = {
      id: personalMessage.id,
      serialNo: personalMessage.serialNo,
      text: personalMessage.text,
      createdAt: personalMessage.createdAt,
      success: true,
      isSent: true,
    };
    objId.map.get(received.fromUserId)?.send(JSON.stringify(sendObj));
    sendObj.isSent = false;
    objId.map.get(received.toUserId)?.send(JSON.stringify(sendObj));
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
