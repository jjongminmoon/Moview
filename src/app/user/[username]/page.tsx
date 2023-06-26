import Section from "@/components/ui/Section";
import UserActivity from "@/components/user/UserActivity";
import UserProfile from "@/components/user/UserProfile";
import { getUserProfile } from "@/service/user";
import { notFound } from "next/navigation";
import { cache } from "react";

type Props = {
  params: {
    username: string;
  };
};

const getUser = cache(async (username: string) => getUserProfile(username));

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUser(username);

  if (!user) {
    notFound();
  }

  return (
    <Section>
      <UserProfile user={user} />
      <UserActivity />
    </Section>
  );
}
