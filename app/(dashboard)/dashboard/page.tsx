import { Button } from "@/components/Button";

export default function Boards() {
  return (
    <>
      <div className="w-full">
        <div className="flex border-b border-[#e4e4e4] pb-5">
          <Button type="submit" className="bg-blue-500">+ add New</Button>
        </div>

        <div className="flex justify-around mt-5 border-b border-[#e4e4e4] pb-5">
          <div className="flex">
            <h1>New Task</h1>
            <h1 className="ml-2 h-6 w-6 rounded-[60%] bg-[#dfe7e8] text-[#8f959c] flex justify-center">1</h1>
          </div>
          <div className="flex"><h1>Scheduled</h1>
          <h1 className="ml-2 h-6 w-6 rounded-[60%] bg-[#dfe7e8] text-[#8f959c] flex justify-center">1</h1></div>
          <div className="flex"><h1>In progress</h1>
          <h1 className="ml-2 h-6 w-6 rounded-[60%] bg-[#dfe7e8] text-[#8f959c] flex justify-center">1</h1></div>
          <div className="flex"><h1>Completed</h1>
          <h1 className="ml-2 h-6 w-6 rounded-[60%] bg-[#dfe7e8] text-[#8f959c] flex justify-center">1</h1></div>
        </div>


        <div className="mt-5 flex space-x-5">
          {/**new task */}
          
    
            <div className="flex flex-col">

            <div className="bg-[#b8e2ff] rounded-2xl  p-4">
            <h1>Hacer la compra del mes en Coto</h1>
          </div>
            </div>
          {/**scheduled */}
          <div className="flex flex-col space-y-4">
          <div className="bg-[#b8e2ff] rounded-2xl p-4">
            <h1>Hacer la compra del mes en Coto</h1>
          </div>
           <div className="bg-[#b8e2ff] rounded-2xl p-4">
            <h1>Hacer la compra del mes en Coto</h1>
          </div>
           <div className="bg-[#b8e2ff] rounded-2xl p-4">
            <h1>Hacer la compra del mes en Coto</h1>
          </div>
          </div>
          {/**in progress */}
          <div className="bg-[#b8e2ff] rounded-2xl p-4">
            <h1>Hacer la compra del mes en Coto</h1>
          </div>
          {/**ncompleted */}
          <div className="bg-[#b8e2ff] rounded-2xl p-4">
            <h1>Hacer la compra del mes en Coto</h1>
          </div>
        </div>
      </div>
    </>
  );
}
