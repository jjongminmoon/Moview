import { Comment } from "@/model/post";
import Avatar from "../Avatar";

type Props = {
  comments: Comment[] | undefined;
};

export default function Comments({ comments }: Props) {
  return (
    <>
      <div className="bg-stone-900 p-2 rounded-xl" id="comments">
        <ul className="flex flex-col gap-3">
          {comments &&
            comments.map((comment, index) => (
              <li key={index} className="flex gap-3 items-center">
                <Avatar image={comment.image} />
                <div className="flex gap-3">
                  <p>{comment.username}</p>
                  <p>{comment.comment}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
