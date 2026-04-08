import { Button } from "@/components/Button";
import TaskCard from "@/components/TaskCard";

export default function Boards() {
  const columns = [
    { id: "todo", title: "New Task" },
    { id: "scheduled", title: "Scheduled" },
    { id: "progress", title: "In progress" },
    { id: "done", title: "Completed" },
  ];

  const tasks = {
    todo: [{ id: 1, title: "Comprar comida" }],
    scheduled: [{ id: 2, title: "Ir al gym" }],
    progress: [
      { id: 3, title: "Estudiar React" },
      { id: 5, title: "Estudiar React" },
    ],
    done: [{ id: 4, title: "Leer libro" }],
  };

  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="flex border-b border-[#e4e4e4] pb-5">
        <Button className="bg-blue-500">+ Add New</Button>
      </div>

      {/* COLUMN TITLES */}
      <div className="grid grid-cols-4 mt-5 border-b border-[#e4e4e4] pb-5">
        {columns.map((col) => (
          <div key={col.id} className="flex items-center gap-2">
            <h1>{col.title}</h1>
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#dfe7e8] text-[#8f959c]">
              {tasks[col.id].length}
            </span>
          </div>
        ))}
      </div>

      {/* TASKS */}
      <div className="grid grid-cols-4 gap-5 mt-5">
        {columns.map((col) => (
          <div key={col.id} className="space-y-4">
            {tasks[col.id].map((task) => (
              <TaskCard key={task.id} title={task.title} />
            ))}
          </div>
        ))}
      </div>

    </div>
  );
}