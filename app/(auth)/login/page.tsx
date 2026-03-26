import { AuthForm } from "@/components/AuthForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-gray-200 text-black h-screen w-full ">
      <div className="my-20 mx-110">
        <h1 className="text-center pb-5">Organiza tu trabajo en equipo </h1>
        <div>
          <AuthForm type="login"></AuthForm>
        </div>

        <div className="text-center mt-10">
          <h1>¿No tenés cuenta?</h1>
        <Link href={"/register"}>
          <button className="text-center mt-5">Registrate</button>
        </Link>
        </div>
      </div>
    </div>
  );
}
