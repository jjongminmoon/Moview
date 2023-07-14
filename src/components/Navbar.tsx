"use client";

import Section from "./ui/Section";
import Logo from "./ui/Logo";
import Link from "next/link";
import NewIcon from "./icons/NewIcon";
import Avatar from "./ui/Avatar";
import Button from "./ui/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const navList = [
  { title: "홈", path: "/" },
  { title: "영화 검색", path: "/movieSearch" },
  { title: "사용자 검색", path: "/userSearch" },
  { title: "리뷰", path: "/review" }
];

export default function Navbar() {
  const { data: session } = useSession();
  const user = session?.user;
  const pathname = usePathname();

  return (
    <Section className="relative flex items-center justify-between h-16 bg-stone-950">
      <Logo />
      <nav className="flex gap-10 items-center">
        {navList.map((list) => (
          <Link
            key={list.title}
            href={list.path}
            className={`hover:text-red-600 ${list.path === pathname && "text-red-600 font-bold"}`}
          >
            {list.title}
          </Link>
        ))}
        <div className="flex gap-5 items-center">
          <Link href="/new" className="hover:text-red-600">
            <NewIcon />
          </Link>
          {user && (
            <Link href={`/user/${user.username}`}>
              <Avatar image={user.image} />
            </Link>
          )}
          {session ? (
            <Button onClick={() => signOut()}>Logout</Button>
          ) : (
            <Button onClick={() => signIn()}>Login</Button>
          )}
        </div>
      </nav>
    </Section>
  );
}
