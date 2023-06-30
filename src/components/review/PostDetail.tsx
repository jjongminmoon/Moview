"use client";

import useFullPost from "@/hooks/post";
import Avatar from "../Avatar";

export default function PostDetail({ postId }: { postId: string }) {
  const { post, postComment } = useFullPost(postId);

  return (
    <article>
      <div className="flex items-center gap-3">
        <Avatar image={post?.userImage} />
        <p className="text-2xl">{post?.username} 님의 리뷰</p>
      </div>
      <div className="flex flex-col mt-8 p-4">
        <h2>제목</h2>
        <p className="p-2 bg-black rounded-xl">{post?.postTitle}</p>
        <h2>리뷰</h2>
        <div>{post?.content}</div>
      </div>
    </article>
  );
}
