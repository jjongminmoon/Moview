import MovieSearch from "@/components/search/MovieSearch";
import Section from "@/components/ui/Section";

export default function SearchPage() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold text-center my-8">영화 정보 검색</h2>
      <MovieSearch />
    </Section>
  );
}
