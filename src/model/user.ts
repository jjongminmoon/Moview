export type AuthUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  image?: string;
};

export type ProfileUser = AuthUser & {
  posts: number;
};
