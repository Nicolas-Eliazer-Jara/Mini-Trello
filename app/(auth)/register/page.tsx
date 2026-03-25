"use client";
import Link from "next/link";
import { AuthForm } from "@/components/AuthForm";

export default function page() {
  return (
    <>
      <div className="bg-gray-200 text-black h-screen w-full ">
        <div className="my-20 mx-110">
          <h1 className="text-center pb-5">Organiza tu trabajo en equipo </h1>
          <AuthForm type="register"></AuthForm>
          <Link href={"login"}>
            <button className="text-center mt-10">Registrarse</button>
          </Link>
        </div>
      </div>
    </>
  );
}
