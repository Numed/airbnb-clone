import { z } from "zod";

export const validationSchemas = {
  email: z.string().email("Invalid email").min(1, "Email is required"),
  text: z.string().min(1, "Text is required"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Invalid phone number")
    .min(1, "Phone is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .min(1, "Password is required"),
};

export const validationSchemsCard = z.object({
  number: z
    .string()
    .min(1, "Required")
    .regex(/^(\d{4} ){3}\d{4}$/, "Card number must be 16 digits"),
  valid: z
    .string()
    .min(1, "Required")
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid date format")
    .refine(
      (value) => {
        const [month, year] = value.split("/");
        const inputYear = 2000 + Number(year);
        const inputMonth = Number(month);
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        return (
          inputYear > currentYear ||
          (inputYear === currentYear && inputMonth >= currentMonth)
        );
      },
      {
        message: "Date must be in the future",
        path: ["valid"],
      }
    ),
  cvc: z
    .string()
    .min(1, "Required")
    .regex(/^\d{3}$/, "CVC must be 3 digits"),
  name: z
    .string()
    .min(1, "Required")
    .regex(/^[a-zA-Z\s]*$/, "Name must only contain letters"),
});

export const generateValidationSchema = (type) =>
  z.object({
    [type]: validationSchemas[type] || z.string().optional(),
  });
