"use client";

import Image from "next/image";
import { IMG_API } from "@/app/api/movies/movies";
import { SimplePost } from "@/model/post";
import Moment from "react-moment";
import { useState } from "react";
import ModalPortal from "../ui/ModalPortal";
import PostDetailModal from "./PostDetailModal";
import PostDetail from "./PostDetail";

type Props = {
  post: SimplePost;
  index: number;
};

export default function PostListCard({ post, index }: Props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <li
        className="flex justify-between items-center w-full border-2 border-neutral-800 pr-5"
        onClick={() => setOpenModal(true)}
      >
        <div className="flex items-center gap-3 w-full">
          <p className="min-w-[30px] text-center bg-red-600">{index + 1}</p>
          <Image
            className="w-[50px] h-[70px]"
            src={IMG_API + post.image}
            alt={`${post.movieTitle} 포스터`}
            width={50}
            height={50}
          />
          <div className="flex flex-col w-full truncate">
            <div className="flex items-center gap-1 w-full truncate">
              <p>{post.postTitle}</p>
              <p className="pb-1 text-red-600">[{Object(post.comments).length}]</p>
            </div>
            <p className="text-xs text-gray-400">({post.movieTitle})</p>
          </div>
        </div>
        <div className="flex justify-end gap-10 w-full">
          <div className="flex gap-5 bg-red-600 px-3 rounded-xl">
            <p className="text-black">Writen by</p>
            <p>{post.username}</p>
          </div>
          <Moment format="YYYY.MM.DD HH:mm">{post.createdAt}</Moment>
        </div>
      </li>
      {openModal && (
        <ModalPortal>
          <PostDetailModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostDetailModal>
        </ModalPortal>
      )}
    </>
  );
}
