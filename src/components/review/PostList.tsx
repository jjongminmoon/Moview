"use client";

import usePosts from "@/hooks/posts";
import { SimplePost } from "@/model/post";
import { useEffect, useState } from "react";
import Paging from "./Paging";
import PostListCard from "./PostListCard";

export default function PostList() {
  const { posts, isLoading } = usePosts();
  const postPerPage = 10;
  const count = posts?.length;
  const [currentPosts, setCurrentPosts] = useState<SimplePost[] | undefined>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  useEffect(() => {
    setCurrentPosts(posts?.slice(indexOfFirstPost, indexOfLastPost));
  }, [posts, currentPage, indexOfFirstPost, indexOfLastPost]);

  const handlePage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <div className="p-8 bg-black rounded-xl">
      <PostListCard posts={currentPosts} />
      <Paging count={count} postPerPage={postPerPage} page={currentPage} onChange={handlePage} />
    </div>
  );
}
