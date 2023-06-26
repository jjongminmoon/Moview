import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  searchValue: string;
  setSearchValue: (e: string) => void;
};

export default function SearchInput({ searchValue, setSearchValue }: Props) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <AiOutlineSearch className="w-8 h-8 mt-8" />
      <input
        className="w-full p-3 mt-8 rounded-xl text-black"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="찾고 싶은 영화를 검색하세요."
      />
    </div>
  );
}
