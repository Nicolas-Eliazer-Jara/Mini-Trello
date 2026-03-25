type Props = {
  children: React.ReactNode
}

export const Button = ({ children }: Props) => {
  return (
    <div className=" bg-blue-300 py-5 px-10 ">
      <button
      type="submit"
      className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition cursor-pointer active:"
    >
      {children}
    </button>
    </div>
  )
}