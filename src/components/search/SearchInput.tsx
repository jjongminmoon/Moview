import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  searchValue: string;
  setSearchValue: (e: string) => void;
  icon?: string;
  placeholder: string;
};

export default function SearchInput({ searchValue, setSearchValue, icon, placeholder }: Props) {
  return (
    <div className="flex items-center gap-3 mb-8 relative">
      {icon === "use" ? <AiOutlineSearch className="w-8 h-8" /> : null}
      <input
        className="w-full p-3 rounded-xl border-2 border-gray-400 text-black focus:outline-none focus:ring-1 focus:border-red-600 focus:ring-red-600"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
