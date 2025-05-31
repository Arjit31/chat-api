import { Request, Response } from "express";
import { prisma } from "../prismaSingletonClient";
import { authMiddleware } from "../middleware/auth";
import { Router } from "express";

// const express = require("express");

export const broadcastRouter = Router();

broadcastRouter.get("/", function (req: Request, res: Response) {
  res.send("Message home page");
});

broadcastRouter.get("/fetch-broadcast", authMiddleware,
  async function (req: Request, res: Response) {
    const type = "" + req.query.type;
    const id = "" + res.locals.userId;
    const lastNo = Number(req.query.lastNo);
    console.log(type, id, lastNo);
    if (!type || (type != "Anonymous" && type != "Reveal") || isNaN(lastNo) || !id) {
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
            username: msg.user.name,
            userId: msg.user.id
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
