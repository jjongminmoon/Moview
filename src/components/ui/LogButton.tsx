type Props = {
  children: React.ReactNode;
  onClick: () => void;
  size?: string;
};

export default function LogButton({ children, onClick, size }: Props) {
  return (
    <button
      className={`px-4 py-1 border-red-600 border-2 rounded-xl text-red-600 hover:text-white ${
        size === "big" ? "text-2xl" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
