import Link from "next/link";
import Section from "./ui/Section";

const navList = [
  { title: "홈", path: "/" },
  { title: "영화 검색", path: "/search" },
  { title: "리뷰", path: "/review" }
];

export default function Navbar() {
  return (
    <Section className="flex items-center justify-between h-16 bg-stone-950">
      <h1 className="text-3xl text-red-600 font-black italic font-mono">Moview</h1>
      <nav className="flex gap-10">
        {navList.map((list) => (
          <Link key={list.title} href={list.path} className="hover:text-red-600">
            {list.title}
          </Link>
        ))}
      </nav>
    </Section>
  );
}
