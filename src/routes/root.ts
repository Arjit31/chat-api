import { Request, Response } from "express";
import { authRouter } from "./authRoute";
import { broadcastRouter } from "./broadcastRoute";
import { unicastRouter } from "./unicastRoute";

const express = require("express");

export const rootRouter = express.Router();

rootRouter.use("/auth", authRouter)
rootRouter.use("/broadcast", broadcastRouter)
rootRouter.use("/unicast", unicastRouter)

rootRouter.get("/", function (req : Request, res: Response) {
  res.send("Root home page");
});
