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
      className={` px-4 py-2 rounded  transition cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};