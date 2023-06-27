import usePosts from "@/hooks/posts";
import PostGridCard from "./GridCard";

export default function UserActivityGrid() {
  const { posts, isLoading } = usePosts();

  console.log(posts);

  return (
    <div>
      <ul className="grid grid-cols-3 gap-4 py-4">
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}
