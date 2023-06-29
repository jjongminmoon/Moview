import { IMG_API } from "@/app/api/movies/movies";
import { SimplePost } from "@/model/post";
import Image from "next/image";

type Props = {
  post: SimplePost;
  priority: boolean;
};

export default function GridCard({ post, priority = false }: Props) {
  return (
    <div className="flex flex-col gap-2 items-center h-full p-3 bg-black rounded-xl hover:bg-red-600">
      <Image
        className="rounded-lg h-full"
        src={IMG_API + post.image}
        alt={`${post.username} 리뷰 이미지`}
        width={2000}
        height={2000}
        priority={priority}
      />
      <p className="text-sm text-white w-full truncate text-center">{post.movieTitle}</p>
    </div>
  );
}
