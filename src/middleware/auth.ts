import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const accessToken = req.get("Authorization");
  try {
    jwt.verify("" + accessToken, "" + process.env.JWT_SECRET);
    const decoded = jwt.verify(
          ""+accessToken,
          "" + process.env.JWT_SECRET
        ) as JwtPayload;
        res.locals.userId = decoded.sub
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "" + error });
  }
}
