"use client";

import Link from "next/link";
import Section from "./ui/Section";
import LogButton from "./ui/LogButton";
import { signIn, signOut, useSession } from "next-auth/react";
import Avatar from "./Avatar";
import NewIcon from "./icons/NewIcon";

const navList = [
  { title: "홈", path: "/" },
  { title: "영화 검색", path: "/search" },
  { title: "리뷰", path: "/review" }
];

export default function Navbar() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <Section className="flex items-center justify-between h-16 bg-stone-950">
      <h1 className="text-3xl text-red-600 font-black italic font-mono">Moview</h1>
      <nav className="flex gap-10 items-center">
        {navList.map((list) => (
          <Link key={list.title} href={list.path} className="hover:text-red-600">
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
            <LogButton onClick={() => signOut()}>Logout</LogButton>
          ) : (
            <LogButton onClick={() => signIn()}>Login</LogButton>
          )}
        </div>
      </nav>
    </Section>
  );
}
