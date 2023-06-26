"use client";

import { useState } from "react";
import HeartIcon from "../icons/HeartIcon";
import PostsIcon from "../icons/PostsIcon";

const category = [
  { type: "posts", name: "리뷰", icon: <PostsIcon /> },
  { type: "liked", name: "좋아요", icon: <HeartIcon /> }
];

export default function UserActivity() {
  const [select, setSelect] = useState(category[0].name);

  return (
    <div className="flex border-y border-neutral-700 mt-12">
      {category.map((item) => (
        <button
          key={item.name}
          className={`flex items-center justify-center gap-2 w-1/2 p-4 text-lg ${
            item.name === select && "border-y border-red-600"
          }`}
          onClick={() => setSelect(item.name)}
        >
          {item.icon}
          {item.name}
        </button>
      ))}
    </div>
  );
}
