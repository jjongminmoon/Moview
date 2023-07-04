import UserSearch from "@/components/search/UserSearch";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";

export default function UserSearchPage() {
  return (
    <Section>
      <Title className="my-8">사용자 정보 검색</Title>
      <UserSearch />
    </Section>
  );
}
