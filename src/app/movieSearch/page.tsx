import MovieSearch from "@/components/search/MovieSearch";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "영화 검색",
  description: "Moview 영화 검색 페이지입니다. 다양한 영화 정보를 확인해보세요."
};

export default function MovieSearchPage() {
  return (
    <Section>
      <Title className="my-8">영화 정보 검색</Title>
      <MovieSearch />
    </Section>
  );
}
