import { AuthForm } from "@/app/components/AuthForm"

export default function Page() {
  return(
    <div className="bg-gray-200 text-black h-screen w-full ">
    <div className="my-20 mx-110">
      <h1 className="text-center pb-5">Organiza tu trabajo en equipo </h1>
       <div className="">
        <AuthForm></AuthForm>
       </div>
    </div>
  </div>
  )
}
