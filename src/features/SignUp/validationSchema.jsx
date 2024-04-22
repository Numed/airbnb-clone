import { z } from "zod";

export const SignupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().regex(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Invalid phone number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
});