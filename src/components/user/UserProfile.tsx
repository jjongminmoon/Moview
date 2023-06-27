import { ProfileUser } from "@/model/user";
import Avatar from "../Avatar";

type Props = {
  user: ProfileUser;
};

export default function UserProfile({ user }: Props) {
  return (
    <div className="flex items-center justify-center gap-5 mt-8">
      <Avatar image={user.image} size="big" />
      <div className="flex flex-col gap-3">
        <p className="text-xl">{user.name}</p>
        <p className="text-gray-400">({user.username})</p>
        <p className="text-lg">{user.posts} Posts</p>
      </div>
    </div>
  );
}
