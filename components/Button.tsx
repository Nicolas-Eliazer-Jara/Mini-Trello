type Props = {
  children: React.ReactNode;
};

export const Button = ({ children }: Props) => {
  return (
    <div className=" py-5 px-10 ">
      <button
        type="submit"
        className="w-full bg-[#121212] text-white py-2 rounded-xs hover:bg-[#121212dc] transition cursor-pointer active:"
      >
        {children}
      </button>
    </div>
  );
};
