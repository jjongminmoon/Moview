import Avatar from "../ui/Avatar";
import { Comment } from "@/model/post";

type Props = {
  comments: Comment[] | undefined;
};

export default function Comments({ comments }: Props) {
  return (
    <div className="bg-stone-900 p-2 rounded-xl" id="comments">
      <ul className="flex flex-col gap-3">
        {comments && comments.length > 0 ? (
          comments.map((comment, index) => (
            <li key={index} className="flex gap-3 items-center">
              <div className="shrink-0">
                <Avatar image={comment.image} />
              </div>
              <div className="flex gap-3 items-center">
                <p>{comment.username}</p>
                <p>{comment.comment}</p>
              </div>
            </li>
          ))
        ) : (
          <div className="text-center p-3">처음으로 댓글을 달아주세요!</div>
        )}
      </ul>
    </div>
  );
}
