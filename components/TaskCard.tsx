import { Button } from "./Button";

type Props = {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  selecCol: (id: number, to: string) => void;
  status: string;
};

export default function TaskCard({
  title,
  onDelete,
  id,
  selecCol,
  status,
}: Props) {
  const statusColors = {
    todo: "bg-gray-200 text-gray-700",
    scheduled: "bg-blue-200 text-blue-700",
    progress: "bg-yellow-200 text-yellow-700",
    done: "bg-green-200 text-green-700",
  };

  return (
    <div className={`rounded-2xl p-4 ${statusColors[status]}`}>
      <div className="flex items-center justify-between">
        <h1>{title}</h1>
        <Button onClick={() => onDelete(id)}>🗑</Button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-2">
        <Button
          onClick={() => selecCol(id, "scheduled")}
          className="text-blue-700 text-[10px]"
        >
          Scheduled
        </Button>

        <Button
          onClick={() => selecCol(id, "progress")}
          className="text-yellow-700 text-[10px]"
        >
          In progress
        </Button>

        <Button
          onClick={() => selecCol(id, "done")}
          className="text-green-700 text-[10px]"
        >
          Completed
        </Button>
      </div>
    </div>
  );
}
