import { Request, Response } from "express";
import { authRouter } from "./authRoute";
import { messageRouter } from "./messageRoute";

const express = require("express");

export const rootRouter = express.Router();

rootRouter.use("/auth", authRouter)
rootRouter.use("/message", messageRouter)

rootRouter.get("/", function (req : Request, res: Response) {
  res.send("Root home page");
});
