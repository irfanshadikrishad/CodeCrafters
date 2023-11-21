import { z } from "zod";

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters." })
    .max(255, {
      message: "Name must not be more than  255 characters.",
    }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email adress" })
    .min(3, { message: "Email must be atleast 3 characters." })
    .max(255, {
      message: "Email must not be more than  255 characters.",
    }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, { message: "phone must be atleast 10 characters." })
    .max(20, {
      message: "phone must not be more than  20 characters.",
    }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be atleast 6 characters." })
    .max(1024, {
      message: "Password can't be greater than 1024 characters.",
    }),
});

export default signupSchema;
