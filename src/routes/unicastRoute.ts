import { Request, Response, Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { prisma } from "../prismaSingletonClient";

export const unicastRouter = Router();

unicastRouter.get(
  "/fetch-broadcast",
  authMiddleware,
  async function (req: Request, res: Response) {
    const fromUserId = "" + res.locals.fromUserId;
    const toUserId = "" + res.locals.toUserId;
    if (!fromUserId || !toUserId) {
      res.status(400).json({ error: "Invalid sender or receiver id!" });
      return;
    }
    try {
      const messages = await prisma.personalMessage.findMany({
        where: {
          fromUserId: fromUserId,
          toUserId: toUserId,
        },
      });
      res.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);
