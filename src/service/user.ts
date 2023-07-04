import { ProfileUser } from "@/model/user";
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
    image
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id,
    }`
  );
}

export async function searchUsers(keyword?: string) {
  const query = keyword ? `&& (name match "${keyword}") || (username match "${keyword}")` : "";

  return client
    .fetch(
      `*[_type == "user" ${query}]{
    ...,
    "id":_id,
    "posts": count(*[_type == "post" && author->username == "${keyword}"])
  }`
    )
    .then((users) =>
      users.map((user: ProfileUser) => ({
        ...user,
        posts: user.posts ?? 0
      }))
    );
}

export async function getUserForProfile(username: string) {
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
