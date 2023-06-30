import Logo from "./ui/Logo";
import Section from "./ui/Section";

export default function Footer() {
  return (
    <Section className="flex flex-col items-center justify-center h-16 mt-10 mb-3">
      <p>Copyright © 2023 MOVIEW</p>
      <Logo />
    </Section>
  );
}
