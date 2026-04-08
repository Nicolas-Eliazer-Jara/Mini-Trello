type Props = {
  title: string;
};

export default function TaskCard({ title }: Props) {
  return (
    <div className="bg-[#b8e2ff] rounded-2xl p-4">
      <h1>{title}</h1>
    </div>
  );
}