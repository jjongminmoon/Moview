"use client";

import useDebounce from "@/hooks/debounce";
import useSWR from "swr";
import Image from "next/image";
import noImage from "../../public/images/no-image.webp";
import Link from "next/link";
import { getMovieSearchResult } from "@/service/movies";
import { useState } from "react";
import { TmdbProps } from "@/model/movies";
import { IMG_API } from "@/api/movies";
import SearchInput from "./SearchInput";

export default function MovieSearch() {
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue);
  const { data, isLoading } = useSWR<TmdbProps[]>(getMovieSearchResult(debounceValue));

  return (
    <>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} subject="영화를" />
      {data && data.length > 0 ? (
        <div className="grid grid-cols-4 gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
          {data.map((movies) => (
            <Link href={String(movies.id)} key={movies.id} className="flex flex-col">
              <Image
                className="w-auto h-full rounded-xl"
                src={movies.poster_path ? IMG_API + movies.poster_path : noImage}
                alt={`${movies.title} 포스터`}
                width={2000}
                height={2000}
              />
              <p className="w-full truncate text-center">{movies.title}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full min-h-screen text-2xl rounded-2xl text-center bg-stone-950 pt-20">
          검색 결과가 없습니다.
        </div>
      )}
    </>
  );
}
