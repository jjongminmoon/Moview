import NewPost from "@/components/new/NewPost";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/auth/signin");
  }

  return (
    <Section>
      <Title className="my-8">리뷰 작성</Title>
      <NewPost />
    </Section>
  );
}
