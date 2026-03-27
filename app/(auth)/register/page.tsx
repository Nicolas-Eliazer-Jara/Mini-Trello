"use client";
import Link from "next/link";
import { AuthForm } from "@/components/AuthForm";

export default function page() {
  return (
    <>
      <div className=" text-black h-screen w-full ">
        <div className="my-20 mx-110">
          <h1 className="text-center pb-5 font-black text-[25px]">Organiza tu trabajo en equipo </h1>
          <AuthForm type="register"></AuthForm>
          <div className="text-center">
            <Link href={"login"}>
            <button className="font-black text-[14px] mt-5 cursor-pointer">Registrarse</button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
