"use client";
import { Button } from "@/components/Button";
import TaskCard from "@/components/TaskCard";
import { useState } from "react";

export default function Boards() {
  const statusColors = {
    todo: "bg-gray-200 text-gray-700",
    scheduled: "bg-blue-200 text-blue-700",
    progress: "bg-yellow-200 text-yellow-700",
    done: "bg-green-200 text-green-700",
  };


  const [tasks, setTasks] = useState({
    todo: [],
    scheduled: [],
    progress: [],
    done: [],
  });

  const totalTasks =
  tasks.todo.length +
  tasks.scheduled.length +
  tasks.progress.length +
  tasks.done.length;

  const [inputValue, setInputValue] = useState("");

  const addTask = (title) => {
    if (!title.trim()) return;


    const newTask = {
      id: Date.now(),
      title,
    };

    setTasks((prev) => ({
      ...prev,
      todo: [...prev.todo, newTask],
    }));

    setInputValue("");
  };

  const columns = [
    { id: "todo", title: "New Task" },
    { id: "scheduled", title: "Scheduled" },
    { id: "progress", title: "In progress" },
    { id: "done", title: "Completed" },
  ];

  const deleteTask = (columnId, taskId) => {

    setTasks((prev) => ({
      ...prev,
      [columnId]: prev[columnId].filter((t) => t.id !== taskId),
    }));
  };

  const selecCol = (fromColumn, taskId, toColumn) => {
    setTasks((prev) => {
      if (fromColumn === toColumn) return prev; // 🔥 FIX

      const task = prev[fromColumn].find((t) => t.id === taskId);
      if (!task) return prev;

      return {
        ...prev,
        [fromColumn]: prev[fromColumn].filter((t) => t.id !== taskId),
        [toColumn]: [...prev[toColumn], task],
      };
    });
  };

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(inputValue);
        }}
        className="flex pb-5"
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="ingrese task"
          className="w-full pl-2"
        />
        <Button
          type="submit"
          className="bg-blue-700 hover:bg-blue-600 text-blue-200"
        >
          + Add New
        </Button>
      </form>

      <div className="grid grid-cols-4 mt-5 border-b border-[#e4e4e4] pb-5">
        {columns.map((col) => (
          <div key={col.id} className="flex items-center gap-2">
            <h1>{col.title}</h1> 
            <span className={`h-6 w-6 flex items-center justify-center rounded-full ${statusColors[col.id]}`}>
              {tasks[col.id].length}
            </span>
          </div>
        ))}
      </div>

      {totalTasks === 0 ? <div className="text-center pt-10">
        <h1 className="text-gray-700 bg-gray-200">No hay tareas</h1>
      </div>
      :
      <div className="grid grid-cols-4 gap-5 mt-5">
        {columns.map((col) => (
          <div key={col.id} className="space-y-4">
            {tasks[col.id].map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                id={task.id}
                status={col.id}
                onDelete={(id) => deleteTask(col.id, id)}
                selecCol={(id, to) => selecCol(col.id, id, to)}
              />
            ))}
          </div>
        ))}
      </div>}
    </div>
  );
}
