import MovieSearch from "@/components/search/MovieSearch";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";

export default function SearchPage() {
  return (
    <Section>
      <Title className="my-8">영화 정보 검색</Title>
      <MovieSearch />
    </Section>
  );
}
