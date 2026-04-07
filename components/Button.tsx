type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};