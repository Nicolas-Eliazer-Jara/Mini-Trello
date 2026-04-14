import { Button } from "./Button";

type Props = {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  selecCol: (id: number, to: string) => void;
};

export default function TaskCard({ title, onDelete, id, selecCol }: Props) {
  return (
    <div className="bg-gray-200 text-gray-700 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <h1>{title}</h1>
        <Button onClick={() => onDelete(id)}>🗑</Button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-2">
        <Button
          onClick={() => selecCol(id, "scheduled")}
          className="text-yellow-700 text-[10px]"
        >
          Scheduled
        </Button>

        <Button
          onClick={() => selecCol(id, "progress")}
          className="text-blue-700 text-[10px]"
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