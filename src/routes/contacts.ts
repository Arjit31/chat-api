import { Request, Response, Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { prisma } from "../prismaSingletonClient";

export const contactRouter = Router();

contactRouter.get(
  "/fetch-contacts",
  authMiddleware,
  async function (req: Request, res: Response) {
    const fromUserId = "" + res.locals.userId;
    try {
      const contacts = await prisma.userContact.findMany({
        where: {
          OR: [{ userId1: fromUserId }, { userId2: fromUserId }],
        },
        include: {
          user1: {
            select: {
              name: true,
            },
          },
          user2: {
            select: {
              name: true,
            },
          },
        },
      });
      console.log(contacts);
      const resObj = {
        success: true,
        contacts: contacts,
      };
      res.json(resObj);
    } catch (error) {
      res.status(500).json({ success: false, error: "internal server error" });
    }
  }
);
