import { UseFormRegister, FieldValues, Path } from "react-hook-form"

type Porps<T extends FieldValues> = {
label:string;
name:Path<T>;
type?:string;
placeholder?:string;
register:UseFormRegister<T>;
error?:string;
}

export const Input = <T extends FieldValues>({label,
  name,
  type = "text",
  placeholder,
  register,error,}:Porps<T>)=> {
    
return(
    <>
    <div className=" bg-blue-300 py-5 px-10 ">
        <label className="m-2 ">{label}</label>
        <input className={`py-2 m-2 w-full placeholder:pl-2 ${
    error ? "border border-red-500 bg-red-50" : "bg-gray-300"
  }`} type={type} placeholder={placeholder} {...register(name)}></input>
{error && <p className="text-red-600 text-sm m-2">{error}</p>}    </div>
    </>
)
}