import { SimplePost } from "@/model/post";
import { client } from "./sanity";

const simplePostProjection = `
  ...,
  "username": author->username,
  "userImage": author->image,
  "image": photo,
  "movieTitle": movieTitle,
  "postTitle": postTitle,
  "content": content,
  "likes": likes[]->username,
  "comments": count(comments),
  "id":_id,
  "createdAt":_createdAt
`;

export async function getPost(id: string) {
  return client
    .fetch(
      `*[_type == "post" && _id == "${id}"][0]{
      ...,
      "username": author->username,
      "userImage": author->image,
      "image": photo,
      "movieTitle": movieTitle,
      "postTitle": postTitle,
      "content": content,
      "likes": likes[]->username,
      comments[]{comment, "username": author->username, "image": author->image},
      "id":_id,
      "createdAt":_createdAt
    }`
    )
    .then((post) => ({ ...post }));
}

export async function getPosts() {
  return client.fetch(
    `*[_type == "post"] | order(_createdAt desc){
      ...,
      "username": author->username,
      "image": photo,
      "movieTitle": movieTitle,
      "postTitle": postTitle,
      "likes": likes[]->username,
      comments[]{comment},
      "id":_id,
      "createdAt":_createdAt
    }`
  );
}

export async function getPostsOf(username: string) {
  return client
    .fetch(
      `*[_type == "post" && author->username == "${username}"]
    | order(_createdAt desc){
      ${simplePostProjection}
    }`
    )
    .then(mapPosts);
}

export async function getLikedPostsOf(username: string) {
  return client
    .fetch(
      `*[_type == "post" && "${username}" in likes[]->username]
    | order(_createdAt desc){
      ${simplePostProjection}
    }`
    )
    .then(mapPosts);
}

function mapPosts(posts: SimplePost[]) {
  return posts.map((post: SimplePost) => ({
    ...post,
    likes: post.likes ?? []
  }));
}

export async function likePost(postId: string, userId: string) {
  return client
    .patch(postId)
    .setIfMissing({ likes: [] })
    .append("likes", [
      {
        _ref: userId,
        _type: "reference"
      }
    ])
    .commit({ autoGenerateArrayKeys: true });
}

export async function dislikePost(postId: string, userId: string) {
  return client
    .patch(postId)
    .unset([`likes[_ref=="${userId}"]`])
    .commit();
}

export async function addComment(postId: string, userId: string, comment: string) {
  return client
    .patch(postId)
    .setIfMissing({ comments: [] })
    .append("comments", [
      {
        comment,
        author: { _ref: userId, _type: "reference" }
      }
    ])
    .commit({ autoGenerateArrayKeys: true });
}

export async function createPost(
  userId: string,
  image: string,
  movieTitle: string,
  postTitle: string,
  content: string
) {
  return await client.create(
    {
      _type: "post",
      author: { _ref: userId },
      photo: image,
      movieTitle: movieTitle,
      postTitle: postTitle,
      content: content,
      comments: [],
      likes: []
    },
    { autoGenerateArrayKeys: true }
  );
}
