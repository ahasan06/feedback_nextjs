import { z } from "zod";

export const feedbackSchema = z.object({
  projectId: z.number().positive(),
  userName: z.string().min(1, "Name is required"),
  userEmail: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long"),
  rating: z.number().min(1).max(5, "Rating must be between 1 and 5"),
});
