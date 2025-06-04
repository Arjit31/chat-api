import { Request, Response } from "express";
import { prisma } from "../prismaSingletonClient";
import {
  UserSignupSchema,
  UserSignupType,
  UserSigninSchema,
  UserSigninType,
} from "../types/User";
import {
  createAllToken,
  refreshAccessToken,
  refreshAllToken,
} from "../lib/tokens";
import { Router } from "express";

export const authRouter = Router();

authRouter.get("/", async function (req: Request, res: Response) {
  res.send("Auth home page");
});

authRouter.post(
  "/check-username",
  async function (req: Request, res: Response) {
    const { username }: { username: string } = req.body;

    try {
      if (!username || typeof username !== "string" || !username.trim()) {
        res.status(400).json({
          success: false,
          message: "Username is required",
        });
        return;
      }

      const trimmedUsername = username.trim();

      const existingUser = await prisma.user.findFirst({
        where: {
          username: trimmedUsername,
        },
      });

      if (existingUser) {
        res.json({
          success: true,
          available: false,
          message: "Username is already taken",
        });
      } else {
        res.json({
          success: true,
          available: true,
          message: "Username is available",
        });
      }
    } catch (error) {
      console.error("Error checking username availability:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
);

authRouter.post("/signup", async function (req: Request, res: Response) {
  const data: UserSignupType = req.body;
  try {
    const result = UserSignupSchema.safeParse(data);
    if (!result.success) {
      res.status(400).json({ success: false, message: "Invalid Credentials" });
    }
    const user = await prisma.user.create({
      data: data,
    });
    const tokens = await createAllToken(user.id);
    if (!tokens.success) {
      throw new Error("" + tokens.error);
    }
    res.json({
      success: true,
      message: "user created",
      refreshToken: tokens.refreshToken,
      connectionToken: tokens.connectionToken,
      accessToken: tokens.accessToken,
      name: user.name,
      id: user.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "internal server error" });
  }
});

authRouter.post("/signin", async function (req: Request, res: Response) {
  const data: UserSigninType = req.body;
  try {
    const result = UserSigninSchema.safeParse(data);
    if (!result.success) {
      res.json({ success: false, message: "Invalid Credentials" }).status(400);
    }
    const user = await prisma.user.findFirst({
      where: {
        username: data.username,
        password: data.password,
      },
    });
    if (!user) {
      throw new Error("No user found!");
    }
    const tokens = await createAllToken(user.id);
    if (!tokens.success) {
      throw new Error("" + tokens.error);
    }
    res.json({
      success: true,
      message: "user signed in",
      refreshToken: tokens.refreshToken,
      connectionToken: tokens.connectionToken,
      accessToken: tokens.accessToken,
      name: user.name,
      id: user.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "internal server error" });
  }
});

authRouter.put("/refreshTokens", async function (req: Request, res: Response) {
  const { refreshToken }: { refreshToken: string } = req.body;
  const newTokens = await refreshAllToken(refreshToken);
  if (newTokens.success) {
    res.json({
      success: true,
      refreshToken: newTokens.refreshToken,
      connectionToken: newTokens.connectionToken,
      accessToken: newTokens.accessToken,
    });
  } else {
    res.status(400).json({ success: false, message: "" + newTokens.error });
  }
});

authRouter.put(
  "/refreshAccessToken",
  async function (req: Request, res: Response) {
    const { refreshToken }: { refreshToken: string } = req.body;
    const newTokens = await refreshAccessToken(refreshToken);
    if (newTokens.success) {
      res.json({
        success: true,
        accessToken: newTokens.accessToken,
      });
    } else {
      res.status(400).json({ success: false, message: "" + newTokens.error });
    }
  }
);
