import Section from "@/components/ui/Section";
import MovieInfo from "@/components/MovieInfo";
import SimilarMovieCarousel from "@/components/SimilarMovieCarousel";

type Props = {
  params: {
    detail: string;
  };
};

export default function DetailPage({ params: { detail } }: Props) {
  return (
    <Section className="mt-8">
      <MovieInfo detail={detail} />
      <SimilarMovieCarousel detail={detail} />
    </Section>
  );
}
