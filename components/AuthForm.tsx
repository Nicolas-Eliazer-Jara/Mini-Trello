"use client"
import { useForm } from "react-hook-form"
import {Input} from "./Input"
import { Button } from "./Button"
import {loginSchema , registerSchema} from "../features/auth/schemas"
import { zodResolver } from "@hookform/resolvers/zod"

type FormValues = {
  email: string
  password: string
}

type Props = {
  type: "login" | "register"
}

export const AuthForm = ({ type }: Props) => {
    const schema = type === "login" ? loginSchema : registerSchema;
    const {register , handleSubmit , formState:{errors}} = useForm<FormValues>({resolver: zodResolver(schema)})

    const onSubmit = (data : FormValues) => {
     console.log(data);
    }

    return(
        <>
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
             <Input<FormValues>
              label="Email"
              name="email"
              placeholder="Ingrese su Email"
              register={register}
              error={errors.email?.message}
              ></Input>

              <Input<FormValues>
                label="Contraseña"
                name="password"
                placeholder="Ingrese su Contraseña"
                register={register}
                error={errors.password?.message}
                ></Input>

             <Button>Enviar</Button>
           </form>

        </div>
        </>
    )
}