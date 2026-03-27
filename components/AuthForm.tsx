"use client";

import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { Button } from "./Button";
import { loginSchema, registerSchema } from "../features/auth/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  type: "login" | "register";
};

type LoginValues = z.infer<typeof loginSchema>;
type RegisterValues = z.infer<typeof registerSchema>;

type FormValues = Partial<RegisterValues> & LoginValues;

export const AuthForm = ({ type }: Props) => {
  const schema = type === "login" ? loginSchema : registerSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(type, data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {/* SOLO REGISTER */}
      {type === "register" && (
        <>
          <Input<FormValues>
            label="Name"
            name="name"
            placeholder="Ingrese su nombre"
            register={register}
            error={errors.name?.message}
          />
        </>
      )}

      {/* SIEMPRE */}
      <Input<FormValues>
        label="Email address"
        name="email"
        placeholder="Ingrese su Email"
        register={register}
        error={errors.email?.message}
      />

      <Input<FormValues>
        label="Password"
        name="password"
        placeholder="Ingrese su Contraseña"
        register={register}
        error={errors.password?.message}
      />
      {type === "register" && (
        <Input<FormValues>
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Repita su contraseña"
          register={register}
          error={errors.confirmPassword?.message}
        />
      )}

      <Button>{type === "login" ? "Iniciar sesión" : "Registrarse"}</Button>
    </form>
  );
};
