import { z } from "zod";

export const unicastMessageSchema = z.object({
  text: z.string().max(65000, "Text must be at most 65000 characters").nonempty("Text is required"),
  fromUserId: z.string().max(100, "fromUserId must be at most 100 characters").nonempty("fromUserId is required"),
  toUserId: z.string().max(100, "toUserId must be at most 100 characters").nonempty("toUserId is required"),
});