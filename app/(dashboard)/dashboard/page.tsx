"use client"
import { Button } from "@/components/Button";
import TaskCard from "@/components/TaskCard";
import { useState } from "react";

export default function Boards() {
  const [task, setTask] = useState({
    todo: [],
    scheduled: [],
    progress: [],
    done: [],
  });
  const [inputValue , setInputValue] = useState("");

  const addTask = (data) => {
    const newTask = {
      id: Date.now(),
      title: data,
    };

    setTask((prev) => ({
      ...prev,
      todo: [...prev.todo, newTask],
    }));
  };

  const columns = [
    { id: "todo", title: "New Task" },
    { id: "scheduled", title: "Scheduled" },
    { id: "progress", title: "In progress" },
    { id: "done", title: "Completed" },
  ];


  return (
    <div className="w-full">
      {/* HEADER */}
      <form onSubmit={(e) => {
    e.preventDefault();
    addTask(inputValue);
  }} className="flex pb-5 ">
        <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder="ingrese task" className="w-89/100 placeholcer: pl-2 "></input>
        <div className="flex border-b border-[#e4e4e4]">
          <Button className="bg-blue-500">+ Add New</Button>
        </div>
      </form>

      {/* COLUMN TITLES */}
      <div className="grid grid-cols-4 mt-5 border-b border-[#e4e4e4] pb-5">
        {columns.map((col) => (
          <div key={col.id} className="flex items-center gap-2">
            <h1>{col.title}</h1>
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#dfe7e8] text-[#8f959c]">
              {task[col.id].length}
            </span>
          </div>
        ))}
      </div>

      {/* TASKS */}
      <div className="grid grid-cols-4 gap-5 mt-5">
        {columns.map((col) => (
          <div key={col.id} className="space-y-4">
            {task[col.id].map((task) => (
              <TaskCard key={task.id} title={task.title} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
