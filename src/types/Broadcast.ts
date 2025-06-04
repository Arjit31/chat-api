import { z } from "zod";

export const broadcastMessageSchema = z.object({
  type: z.enum(["Anonymous", "Reveal"], {
    required_error: "type is required",
    invalid_type_error: "type must be either 'Anonymous' or 'Reveal'",
  }),
  text: z.string().max(65000, "Text must be at most 65000 characters").nonempty("Text is required"),
  userId: z.string().max(100, "userId must be at most 100 characters").nonempty("userId is required"),
});
