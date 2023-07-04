"use client";

import usePosts from "@/hooks/posts";
import Paging from "./Paging";
import PostListCard from "./PostListCard";
import Loading from "../ui/Loading";
import { SimplePost } from "@/model/post";
import { useEffect, useState } from "react";

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
    <>
      {isLoading && <Loading />}
      <div className="p-8 bg-black rounded-xl">
        <ul className="flex flex-col h-full gap-1">
          {currentPosts &&
            currentPosts.map((post, index) => (
              <PostListCard post={post} index={index} key={post.id} />
            ))}
        </ul>
        <Paging count={count} postPerPage={postPerPage} page={currentPage} onChange={handlePage} />
      </div>
    </>
  );
}
