import Sidebar from "@/components/Sidebar";
import Boards from "./dashboard/page"

export default function Layout() {
  return (
    <div className="flex">
      
     
      <div className="w-1/5">
        <Sidebar />
      </div>

      
      <div className="w-4/5 h-screen p-5">
        <Boards />
      </div>

    </div>
  );
}