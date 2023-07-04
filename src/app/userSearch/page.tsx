import UserSearch from "@/components/search/UserSearch";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "사용자 검색",
  description: "Moview 사용자 검색 페이지입니다. 찾고 싶은 사용자를 검색해보세요."
};

export default function UserSearchPage() {
  return (
    <Section>
      <Title className="my-8">사용자 정보 검색</Title>
      <UserSearch />
    </Section>
  );
}
