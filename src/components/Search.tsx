"use client";

import useDebounce from "@/hooks/debounce";
import useSWR from "swr";
import Image from "next/image";
import noImage from "../../public/images/no-image.webp";
import { getSearchResult } from "@/service/movies";
import { useState } from "react";
import { TmdbProps } from "@/model/movies";
import { AiOutlineSearch } from "react-icons/ai";
import { IMG_API } from "@/api/movies";

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue);
  const { data, isLoading } = useSWR<TmdbProps[]>(getSearchResult(debounceValue));

  console.log(data);

  return (
    <>
      <div className="flex items-center gap-3 mb-8">
        <AiOutlineSearch className="w-8 h-8 mt-8" />
        <input
          className="w-full p-3 mt-8 rounded-xl text-black"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="영화 제목 / 배우로 검색하세요."
        />
      </div>

      {data && data.length > 0 ? (
        <div className="grid grid-cols-4 gap-2">
          {data.map((movies) => (
            <div key={movies.id} className="flex flex-col">
              <Image
                className="w-auto h-full rounded-xl"
                src={movies.poster_path ? IMG_API + movies.poster_path : noImage}
                alt={`${movies.title} 포스터`}
                width={2000}
                height={2000}
              />
              <p className="w-full truncate text-center">{movies.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full min-h-screen text-2xl rounded-2xl text-center bg-stone-950 pt-20">
          No Result.
        </div>
      )}
    </>
  );
}
