type Props = {
  type?: "button" | "submit";
  children: React.ReactNode;
  onClick?: () => void;
  size?: string;
  className?: string;
};

export default function Button({ type, children, onClick, size, className }: Props) {
  return (
    <button
      type={type}
      className={`px-4 py-1 border-red-600 border-2 rounded-xl text-red-600 hover:text-white ${className} ${
        size === "big" ? "text-2xl" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
