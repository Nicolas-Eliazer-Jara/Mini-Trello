import { UseFormRegister, FieldValues, Path } from "react-hook-form";

type Porps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: string;
};

export const Input = <T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}: Porps<T>) => {
  return (
    <>
      <div className="  py-2 px-10 ">
        <label className="m-2 text-[13px]  font-black">{label}</label>
        <input
          className={`py-2 m-2 w-full placeholder:pl-2 rounded-xs border border-black ${
            error ? "border border-red-500 " : "bg-white"
          }`}
          type={type}
          placeholder={placeholder}
          {...register(name)}
        ></input>
        {error && <p className="text-red-600 text-sm absolute m-2">{error}</p>}{" "}
      </div>
    </>
  );
};
