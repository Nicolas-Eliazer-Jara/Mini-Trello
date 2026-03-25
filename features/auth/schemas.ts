import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

export const registerSchema = z.object({
    name: z.string() .min(6, "Mínimo 6 caracteres") .max(20, "Maximo 20 caracteres"),
    email: z.string() .email("Email inválido"),
    password: z.string() .min(6, "Mínimo 6 caracteres"),
})

export type loginFormData = z.infer<typeof loginSchema>