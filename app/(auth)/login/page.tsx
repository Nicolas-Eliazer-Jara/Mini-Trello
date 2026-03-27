import { AuthForm } from "@/components/AuthForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className=" text-black h-screen w-full ">
      <div className="my-20 mx-110">
        <h1 className="text-center pb-5 font-black text-[25px]">Organiza tu trabajo en equipo </h1>
        <div>
          <AuthForm type="login"></AuthForm>
        </div>

        <div className="text-center mt-10">
          <h1>¿No tenés cuenta?</h1>
        <Link href={"/register"}>
          <button className="text-center font-black text-[14px] mt-5 cursor-pointer">Registrate</button>
        </Link>
        </div>
      </div>
    </div>
  );
}
