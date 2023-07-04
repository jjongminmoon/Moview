"use client";

import useDebounce from "@/hooks/debounce";
import useSWR from "swr";
import SearchInput from "./SearchInput";
import Link from "next/link";
import Avatar from "../ui/Avatar";
import Loading from "../ui/Loading";
import { useState } from "react";
import { ProfileUser } from "@/model/user";

export default function UserSearch() {
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue);
  const { data: users, isLoading } = useSWR<ProfileUser[]>(`/api/search/${debounceValue}`);

  return (
    <>
      {isLoading && <Loading />}
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        icon="use"
        placeholder="찾고 싶은 사용자를 검색하세요."
      />
      {users && users.length > 0 ? (
        <div className="flex flex-col bg-stone-950 p-4">
          {users.map((user) => (
            <Link
              key={user.id}
              href={`/user/${user.username}`}
              className="flex items-center gap-10 border-neutral-700 border p-4 w-full"
            >
              <Avatar image={user.image} size="big" />
              <div className="flex flex-col gap-2">
                <p className="text-xl">{user.name}</p>
                <p className="text-gray-400">({user.username})</p>
              </div>
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
