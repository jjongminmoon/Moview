import Image from "next/image";
import { IMG_API } from "@/app/api/movies/movies";
import { SimplePost } from "@/model/post";
import Moment from "react-moment";
import Link from "next/link";

type Props = {
  posts: SimplePost[] | undefined;
};

export default function PostListCard({ posts }: Props) {
  console.log(posts);
  return (
    <div className="flex flex-col h-full gap-1">
      {posts &&
        posts.map((post, index) => (
          <Link
            href={`/review/${post.id}`}
            key={post.id}
            className="flex justify-between items-center w-full border-2 border-neutral-800 pr-5"
          >
            <div className="flex items-center gap-3 w-full">
              <p className="min-w-[30px] text-center bg-red-600">{index + 1}</p>
              <Image
                src={IMG_API + post.image}
                alt={`${post.movieTitle} 포스터`}
                width={50}
                height={50}
              />
              <div className="flex flex-col w-full truncate">
                <div className="flex gap-1 w-full truncate">
                  <p>{post.postTitle}</p>
                  <p>{Object(post.comments).length}</p>
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
          </Link>
        ))}
    </div>
  );
}
