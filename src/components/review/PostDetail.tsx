"use client";

import useFullPost from "@/hooks/post";
import Avatar from "../Avatar";
import { SimplePost } from "@/model/post";
import ActionBar from "./ActionBar";

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { post: data, postComment } = useFullPost(post.id);
  const comments = data?.comments;

  return (
    <article className="overflow-y-scroll h-full">
      <div className="flex items-center gap-3">
        <Avatar image={post.userImage} />
        <p className="text-2xl">{post.username} 님의 리뷰</p>
      </div>
      <div className="flex flex-col gap-4 mt-8 p-4 bg-black rounded-xl overflow-scroll">
        <h2 className="text-2xl">제목</h2>
        <p className="p-2 bg-stone-900 rounded-xl">{post.postTitle}</p>
        <h2 className="text-2xl">리뷰</h2>
        <div className="p-2 bg-stone-900 rounded-xl min-h-[500px]">{post.content}</div>
        <ActionBar post={post} comments={comments} onComment={postComment} />
      </div>
    </article>
  );
}
