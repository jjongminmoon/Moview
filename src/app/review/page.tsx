import PostList from "@/components/review/PostList";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "리뷰 게시판",
  description: "Moview 리뷰 커뮤니티 페이지입니다. 다른 사람이 작성한 리뷰를 확인해보세요."
};

export default async function ReviewPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/auth/signin");
  }

  return (
    <Section>
      <Title className="my-8">리뷰</Title>
      <PostList />
    </Section>
  );
}
