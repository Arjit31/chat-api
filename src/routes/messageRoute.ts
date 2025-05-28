import { Request, Response } from "express";
import {prisma} from "../prismaSingletonClient"

const express = require("express");

export const messageRouter = express.Router();

type Params = {
  lastNo: number;
  type: "Anonymous" | "Reveal";
  userId: string;
};


messageRouter.get("/", function (req : Request, res: Response) {
  res.send("Message home page");
});

messageRouter.get(
  "/fetch-broadcast",
  async function (req: Request<{}, {}, {}, Params>, res: Response) {
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