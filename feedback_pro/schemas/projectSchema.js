import { z } from "zod";

export const projectSchema = z.object({
  name: z.string()
          .min(3, "Name must be at least 3 characters")
          .max(50, "Name too long"),
  description: z.string()
          .min(10, "Description must be at least 10 characters")
          .max(300, "Description too long"),
});
