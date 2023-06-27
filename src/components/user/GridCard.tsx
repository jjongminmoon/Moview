import { SimplePost } from "@/model/post";
import { useSession } from "next-auth/react";
import Image from "next/image";

type Props = {
  post: SimplePost;
  priority: boolean;
};

export default function GridCard({ post, priority = false }: Props) {
  return (
    <div className="relative w-full aspect-square">
      <Image
        className="object-cover rounded-lg"
        src={post.image}
        alt={`${post.username} 리뷰 이미지`}
        fill
        sizes="650"
        priority={priority}
      />
    </div>
  );
}
