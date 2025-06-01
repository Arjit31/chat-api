import { Request, Response, Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { prisma } from "../prismaSingletonClient";

export const unicastRouter = Router();

unicastRouter.get(
  "/fetch-unicast",
  authMiddleware,
  async function (req: Request, res: Response) {
    const fromUserId = "" + res.locals.userId;
    const toUserId = "" + req.query.toUserId;
    const lastNo = Number(req.query.lastNo);
    console.log("unicast", fromUserId, toUserId, lastNo);
    if (!fromUserId || !toUserId || isNaN(lastNo)) {
      res
        .status(400)
        .json({ error: "Invalid sender, lastNo, or receiver id!" });
      return;
    }
    try {
      const messages = await prisma.personalMessage.findMany({
        where: {
          OR: [
            {
              serialNo: {
                gt: lastNo,
              },
              fromUserId: fromUserId,
              toUserId: toUserId,
            },
            {
              serialNo: {
                gt: lastNo,
              },
              fromUserId: toUserId,
              toUserId: fromUserId,
            },
          ],
        },
      });
      const response = messages.map((msg) => {
        const base = {
          id: msg.id,
          serialNo: msg.serialNo,
          orderNo: msg.serialNo,
          text: msg.text,
          type: "Personal",
          createdAt: msg.createdAt,
          isSent: msg.fromUserId === fromUserId,
        };
        return base;
      });
      res.json(response);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);
