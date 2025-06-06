import http from "http";
import WebSocket from "ws";
import { prisma } from "../prismaSingletonClient";
import { unicastMessageSchema } from "../types/Unicast";

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
    const result = unicastMessageSchema.safeParse(received);
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
      !objId.map.has(received.fromUserId) ||
      objId.map.get(received.fromUserId) != socket
    ) {
      const obj = {
        success: false,
        message: "Invalid Request, user not authenticated for connection",
      };
      const sendMessage = JSON.stringify(obj);
      console.log(sendMessage, received);
      console.log(objId.map.get(received.fromUserId) === socket);
      console.log(objId.map.has(received.fromUserId));
      console.log(objId.map.get(received.toUserId) === socket);
      console.log(objId.map.has(received.toUserId));
      socket.send(sendMessage);
      socket.close();
      return;
    }
    let contact = await prisma.userContact.findFirst({
      where: {
        OR: [
          { userId1: received.fromUserId, userId2: received.toUserId },
          { userId1: received.toUserId, userId2: received.fromUserId },
        ],
      },
    });

    if (!contact) {
      contact = await prisma.userContact.create({
        data: {
          userId1: received.fromUserId,
          userId2: received.toUserId,
        },
      });
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
      orderNo: personalMessage.serialNo,
      type: "Personal",
      text: personalMessage.text,
      createdAt: personalMessage.createdAt,
      success: true,
      isSent: true,
      username: "",
      userId: personalMessage.fromUserId,
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
