"use client";

import useMe from "@/hooks/me";
import usePosts from "@/hooks/posts";
import { Comment, SimplePost } from "@/model/post";
import HeartFillIcon from "../icons/HeartFillIcon";
import HeartEmptyIcon from "../icons/HeartEmptyIcon";
import ToggleButton from "../ui/ToggleButton";
import { useState } from "react";
import MessageEmptyIcon from "../icons/MessageEmptyIcon";
import MessageFillIcon from "../icons/MessageFillIcon";
import Comments from "./Comments";
import { Link } from "react-scroll";
import CommentForm from "./CommentForm";

type Props = {
  post: SimplePost;
  comments: Comment[] | undefined;
  onComment: (comment: Comment) => void;
};

export default function ActionBar({ post, comments, onComment }: Props) {
  const [commented, setCommented] = useState(false);
  const { user } = useMe();
  const { setLike } = usePosts();
  const { likes } = post;

  const liked = user ? likes.includes(user.username) : false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };

  const handleComment = (comment: string) => {
    user && onComment({ comment, username: user.username, image: user.image });
  };

  return (
    <>
      <div className="flex gap-3 items-center">
        <ToggleButton
          toggled={liked}
          onToggle={handleLike}
          onIcon={<HeartFillIcon />}
          offIcon={<HeartEmptyIcon />}
        />
        <p className="text-xl">{likes?.length}</p>
        <ToggleButton
          toggled={commented}
          onToggle={() => setCommented(!commented)}
          onIcon={<MessageFillIcon />}
          offIcon={<MessageEmptyIcon />}
        />
        <p className="text-xl">{Object(comments).length}</p>
      </div>
      {commented && (
        <div className="flex flex-col mt-5">
          <h2 className="text-xl mb-2">댓글</h2>
          <CommentForm onPostComment={handleComment} />
          <Comments comments={comments} />
        </div>
      )}
    </>
  );
}
