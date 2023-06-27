import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  searchValue: string;
  setSearchValue: (e: string) => void;
  icon?: string;
};

export default function SearchInput({ searchValue, setSearchValue, icon }: Props) {
  return (
    <div className="flex items-center gap-3 mb-8 relative">
      {icon === "use" ? <AiOutlineSearch className="w-8 h-8 mt-8" /> : null}
      <input
        className="w-full p-3 rounded-xl text-black"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="찾고 싶은 영화를 검색하세요."
      />
    </div>
  );
}
