import { UseFormRegister, FieldValues, Path } from "react-hook-form"

type Porps<T extends FieldValues> = {
label:string
name:Path<T>
type?:string
placeholder?:string
register:UseFormRegister<T>
}

export const Input = <T extends FieldValues>({label,
  name,
  type = "text",
  placeholder,
  register,}:Porps<T>)=> {
    
return(
    <>
    <div className=" bg-blue-300 py-5 px-10 ">
        <label className="m-2 ">{label}</label>
        <input className=" bg-gray-300 py-2 m-2 w-full placeholder:pl-2" type={type} placeholder={placeholder} {...register(name)}></input>
    </div>
    </>
)
}