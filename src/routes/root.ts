import { Request, Response } from "express";
import { authRouter } from "./authRoute";
import { broadcastRouter } from "./broadcastRoute";

const express = require("express");

export const rootRouter = express.Router();

rootRouter.use("/auth", authRouter)
rootRouter.use("/broadcast", broadcastRouter)

rootRouter.get("/", function (req : Request, res: Response) {
  res.send("Root home page");
});
