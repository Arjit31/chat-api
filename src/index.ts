import express from "express";
import WebSocket, { WebSocketServer } from "ws";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get("/", function (req, res) {
  res.json("hii");
});

app.post("/signup", async function (req, res) {
  const data = req.body;
  try {
    const user = await prisma.user.create({
      data: data,
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});
const server = app.listen(3000, () => {
  console.log("Your app is running on port 3000!");
});

const wss = new WebSocketServer({ server });

wss.on("connection", function connection(socket) {
  // authenticate user on connection
  socket.on("error", console.error);
  socket.on("message", async function message(data) {
    // make sure to send data in json format not as a js object i.e. key should also be in double quotes
    const received = JSON.parse(data.toString());
    const num = Math.floor(Math.random() * 5) + 1;
    console.log(num);
    const broadcast: {
      randomNo: number;
      type: "Reveal" | "Anonymous";
      text: string;
      userId: string;
    } = {
      randomNo: num,
      type: received.type === 1 ? "Reveal" : "Anonymous",
      text: received.text,
      userId: received.userId,
    };
    try {
      const message = await prisma.broadcastMessage.create({
        data: broadcast,
      });
      console.log("received: ", message);
      const sentMessage = {...message, success: true};
      const sentData = JSON.stringify(sentMessage);
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(sentData);
        }
      });
    } catch (error) {
      wss.clients.forEach(function(client){
        if(client === socket){
          client.send(`{ "success": false, "Error": "` + error + `"}`)
        }
      })
    }
  });

  socket.send("something");
});
