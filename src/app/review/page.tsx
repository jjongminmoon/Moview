import PostList from "@/components/review/PostList";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";

export default function ReviewPage() {
  return (
    <Section>
      <Title className="my-8">리뷰</Title>
      <PostList />
    </Section>
  );
}
