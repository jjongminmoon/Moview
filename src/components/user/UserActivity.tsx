"use client";

import { useState } from "react";
import HeartIcon from "../icons/HeartIcon";
import PostsIcon from "../icons/PostsIcon";
import { ProfileUser } from "@/model/user";
import { CacheKeysContext } from "@/context/CacheKeysContext";
import UserActivityGrid from "./UserActivityGrid";

type Props = {
  user: ProfileUser;
};

const category = [
  { type: "posts", icon: <PostsIcon /> },
  { type: "liked", icon: <HeartIcon /> }
];

export default function UserActivity({ user: { username } }: Props) {
  const [query, setQuery] = useState(category[0].type);

  return (
    <>
      <div className="flex border-y border-neutral-700 mt-12">
        {category.map((item) => (
          <button
            key={item.type}
            className={`flex items-center justify-center gap-2 w-1/2 p-4 text-lg uppercase ${
              item.type === query && "border-y border-red-600"
            }`}
            onClick={() => setQuery(item.type)}
          >
            {item.icon}
            {item.type}
          </button>
        ))}
      </div>
      <CacheKeysContext.Provider value={{ postsKey: `/api/users/${username}/${query}` }}>
        <UserActivityGrid />
      </CacheKeysContext.Provider>
    </>
  );
}
