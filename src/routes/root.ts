import { Request, Response } from "express";
import { authRouter } from "./authRoute";
import { broadcastRouter } from "./broadcastRoute";
import { unicastRouter } from "./unicastRoute";
import { contactRouter } from "./contacts";

const express = require("express");

export const rootRouter = express.Router();

rootRouter.use("/auth", authRouter)
rootRouter.use("/broadcast", broadcastRouter)
rootRouter.use("/unicast", unicastRouter)
rootRouter.use("/contact", contactRouter)

rootRouter.get("/", function (req : Request, res: Response) {
  res.send("Root home page");
});
