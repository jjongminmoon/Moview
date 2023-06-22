import Section from "./ui/Section";

export default function Footer() {
  return (
    <Section className="flex flex-col items-center justify-center h-16 mt-10 mb-3">
      <p>Copyright © 2023 MOVIEW</p>
      <p className="text-3xl text-red-600 font-black italic font-mono">Moview</p>
    </Section>
  );
}
