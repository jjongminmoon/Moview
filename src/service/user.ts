import { client } from "./sanity";

type OAuthUser = {
  id: string;
  username: string;
  email: string;
  name: string;
  image?: string | null;
};

export async function addUser({ id, username, email, name, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    bookmarks: []
  });
}

export async function getUserProfile(username: string) {
  return client
    .fetch(
      `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id,
      "posts": count(*[_type == "post" && author->username == "${username}"])
    }`
    )
    .then((user) => ({
      ...user,
      posts: user.posts ?? 0
    }));
}
