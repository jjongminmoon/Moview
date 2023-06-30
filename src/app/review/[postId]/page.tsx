import PostDetail from "@/components/review/PostDetail";
import Logo from "@/components/ui/Logo";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";

type Props = {
  params: {
    postId: string;
  };
};

export default function DetailPostPage({ params: { postId } }: Props) {
  return (
    <Section className="my-8">
      <PostDetail postId={postId} />
    </Section>
  );
}
