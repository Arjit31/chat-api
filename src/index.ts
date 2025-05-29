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

wss.on("connection", function connection(socket) {
  // authenticate user on connection
  socket.on("error", console.error);
  socket.on("message", async function message(data) {
    await rootHandler(wss, socket, objId, data);
  });

  socket.send(`{"text": "something"}`);
});

server.listen(3000, () => {
  console.log("Your app is running on port 3000!");
});
