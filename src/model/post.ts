export type Comment = {
  comment: string;
  username: string;
  image?: string | undefined;
};

export type FullPost = {
  id: string;
  username: string;
  userImage: string;
  image: string;
  text: string;
  createdAt: string;
  likes: string[];
  comments: Comment[];
};

export type SimplePost = Omit<FullPost, "comments"> & {
  comments: number;
};
