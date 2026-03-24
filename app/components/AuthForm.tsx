"use client"
import { useForm } from "react-hook-form"
import {Input} from "./Input"
import { Button } from "./Button"

type FormValues = {
  name?: string
  email: string
  password: string
}

type Props = {
  type: "login" | "register"
}

export const AuthForm = ({ type }: Props) => {

    const {register , handleSubmit} = useForm<FormValues>()

    const onSubmit = (data : FormValues) => {
     console.log(data);
    }

    return(
        <>
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
             <Input<FormValues>
                label="Name"
                name="name"
                type="text"
                placeholder="Ingrese su Nombre"
                register={register}
             ></Input>

             <Input<FormValues>
              label="Email"
              name="email"
              placeholder="Ingrese su Email"
              register={register}
              ></Input>

              <Input<FormValues>
                label="Contraseña"
                name="password"
                placeholder="Ingrese su Contraseña"
                register={register}
                ></Input>

             <Button>Enviar</Button>
           </form>

        </div>
        </>
    )
}