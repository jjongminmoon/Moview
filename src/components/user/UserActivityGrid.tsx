import usePosts from "@/hooks/posts";
import GridCard from "./GridCard";
import Loading from "../ui/Loading";

export default function UserActivityGrid() {
  const { posts, isLoading } = usePosts();

  return (
    <>
      {isLoading && <Loading />}
      <div className="min-h-screen">
        <ul className="grid grid-cols-4 gap-4 py-4">
          {posts &&
            posts.map((post, index) => (
              <li key={post.id}>
                <GridCard post={post} priority={index < 6} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
