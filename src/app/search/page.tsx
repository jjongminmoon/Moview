import Search from "@/components/Search";
import Section from "@/components/ui/Section";

export default function SearchPage() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold text-center mt-8">영화 정보 검색</h2>
      <Search />
    </Section>
  );
}
