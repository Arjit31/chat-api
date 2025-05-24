import express, { Request } from "express";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get("/", function (req, res) {
  res.json("hii");
});

type Params = {
  lastNo: number;
  type: "Anonymous" | "Reveal";
  userId: string;
};

app.get(
  "/fetch-broadcast",
  async function (req: Request<{}, {}, {}, Params>, res) {
    const type = req.query.type;
    const id = req.query.userId;
    const lastNo = Number(req.query.lastNo);
    if (!type || isNaN(lastNo) || !id) {
      res.status(400).json({ error: "Invalid type, lastNo, or userId" });
      return;
    }

    try {
      const messages = await prisma.broadcastMessage.findMany({
        where: {
          serialNo: {
            gt: lastNo,
          },
          type: type,
        },
        include: {
          user: true,
        },
      });

      const response = messages.map((msg) => {
        const base = {
          id: msg.id,
          serialNo: msg.serialNo,
          orderNo:
            msg.userId !== id ? msg.serialNo - msg.randomNo : msg.serialNo,
          text: msg.text,
          type: msg.type,
          createdAt: msg.createdAt,
          isSent: msg.userId === id,
        };

        if (msg.type === "Reveal") {
          return {
            ...base,
            username: msg.user.name || "Unknown",
          };
        } else {
          return base;
        }
      });

      res.json(response);
    } catch (err) {
      console.error("Error fetching messages:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

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
      type: received.type,
      text: received.text,
      userId: received.userId,
    };

    try {
      const message = await prisma.broadcastMessage.create({
        data: broadcast,
        include: {
          user: true,
        },
      });
      console.log("received: ", message);
      const commonMessage = {
        id: message.id,
        serialNo: message.serialNo,
        orderNo: message.serialNo-message.randomNo,
        text: message.text,
        type: message.type,
        createdAt: message.createdAt,
        isSent: false,
        success: true,
        username: message.user.name
      };
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          if (client === socket) {
            const userMessage = commonMessage;
            userMessage.isSent = true;
            userMessage.username = null;
            userMessage.orderNo += message.randomNo;
            const sentData = JSON.stringify(commonMessage);
            client.send(sentData);
          }
          else{
            const sentData = JSON.stringify(commonMessage);
            client.send(sentData);
          }
        }
      });
    } catch (error) {
      wss.clients.forEach(function (client) {
        if (client === socket) {
          client.send(`{ "success": false, "Error": "` + error + `"}`);
        }
      });
    }
  });

  socket.send(`{"text": "something"}`);
});

// server.on('upgrade', function upgrade(request, socket, head) {
//   socket.on('error', console.error);

//   // This function is not defined on purpose. Implement it with your own logic.
//   authenticate(request, function next(err, client) {
//     if (err || !client) {
//       socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
//       socket.destroy();
//       return;
//     }

//     socket.removeListener('error', onSocketError);

//     wss.handleUpgrade(request, socket, head, function done(ws) {
//       wss.emit('connection', ws, request, client);
//     });
//   });
// });

server.listen(3000, () => {
  console.log("Your app is running on port 3000!");
});
