import http from "http";
import WebSocket from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "../prismaSingletonClient";

type objIdType = {
  map: Map<string, WebSocket>;
};
export async function connectionHandler(
  wss: WebSocket.Server<typeof WebSocket, typeof http.IncomingMessage>,
  received: any,
  socket: WebSocket,
  objId: objIdType
) {
  try {
    if (!received.connectionToken) {
      const obj = {
        success: false,
        message: "Invalid Request",
      };
      const sendMessage = JSON.stringify(obj);
      socket.send(sendMessage);
      socket.close();
      return;
    }
    jwt.verify(received.connectionToken, process.env.JWT_SECRET || "");
    const decoded = jwt.decode(received.connectionToken) as JwtPayload;
    await prisma.token.update({
      where: {
        userId: decoded?.sub,
        connectionTokenId: decoded?.id,
        isUsedConnectionToken: false
      },
      data:{
        isUsedConnectionToken: true
      }
    })
    objId.map.set("" + decoded?.sub, socket);
    const obj = {
      success: true,
      message: "connection established!",
    };
    const sendMessage = JSON.stringify(obj);
    socket.send(sendMessage);
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
