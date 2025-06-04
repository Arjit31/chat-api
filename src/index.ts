import express, { Request } from "express";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import cors from "cors";
import { rootRouter } from "./routes/root";
import { rootHandler } from "./handlers/root";

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(cors());

const wss = new WebSocketServer({ server });

app.use("/api/v1", rootRouter);

const mapId = new Map<string, WebSocket>();
const objId = { map: mapId };

interface ExtendedWebSocket extends WebSocket {
  isAlive?: boolean;
  heartbeatTimer?: NodeJS.Timeout;
}

wss.on("connection", function connection(socket: ExtendedWebSocket) {
  console.log("New WebSocket connection established");
  
  socket.isAlive = true;
  

  const startHeartbeat = () => {
    socket.heartbeatTimer = setInterval(() => {
      if (socket.isAlive === false) {
        console.log("Client didn't respond to ping, terminating connection");
        clearInterval(socket.heartbeatTimer);
        return socket.terminate();
      }
      
      socket.isAlive = false;
      socket.ping();
      console.log("Ping sent to client");
    }, 30000);
  };

  socket.on("pong", function() {
    console.log("Pong received from client");
    socket.isAlive = true;
  });

  socket.on("ping", function() {
    console.log("Ping received from client");
    socket.pong();
  });

  socket.on("error", console.error);
  
  socket.on("message", async function message(data) {
    socket.isAlive = true;
    await rootHandler(wss, socket, objId, data);
  });

  socket.on("close", function() {
    console.log("WebSocket connection closed");
    if (socket.heartbeatTimer) {
      clearInterval(socket.heartbeatTimer);
    }
  });

  startHeartbeat();
  
  socket.send(`{"text": "connection established"}`);
});

server.listen(3000, () => {
  console.log("Your app is running on port 3000!");
});
