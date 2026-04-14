"use client";
import { Button } from "@/components/Button";
import TaskCard from "@/components/TaskCard";
import { useState } from "react";

export default function Boards() {
  const [tasks, setTasks] = useState({
    todo: [],
    scheduled: [],
    progress: [],
    done: [],
  });

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

  // 🔥 mover task
  const selecCol = (fromColumn, taskId, toColumn) => {
    setTasks((prev) => {
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
      {/* HEADER */}
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
        <Button className="bg-blue-700 hover:bg-blue-600 text-blue-200">
          + Add New
        </Button>
      </form>

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
              <TaskCard
                key={task.id}
                title={task.title}
                id={task.id}
                onDelete={(id) => deleteTask(col.id, id)}
                selecCol={(id, to) => selecCol(col.id, id, to)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}