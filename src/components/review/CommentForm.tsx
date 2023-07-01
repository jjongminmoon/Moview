"use client";

import { FormEvent, useState } from "react";

type Props = {
  onPostComment: (comment: string) => void;
};

export default function CommentForm({ onPostComment }: Props) {
  const [comment, setComment] = useState("");
  const buttonDisabled = comment.length === 0;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onPostComment(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-3 bg-stone-900 mb-3 rounded-xl">
      <input
        className="w-full ml-2 border-none outline-none p-3 text-black rounded-xl"
        type="text"
        placeholder="Add a comment..."
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        disabled={buttonDisabled}
        className={`font-bold ml-2 ${buttonDisabled ? "text-red-300" : "text-red-600"}`}
      >
        Comment
      </button>
    </form>
  );
}
