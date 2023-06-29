"use client";

import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
import MultiCarousel from "../ui/MulitCarousel";
import { IMG_API, upcomingUrl } from "@/app/api/movies/movies";
import { TmdbProps } from "@/model/movies";
import Title from "../ui/Title";

export default function UpcomingCarousel() {
  const { data, isLoading } = useSWR<TmdbProps[]>(upcomingUrl);

  return (
    <section className="mt-8 px-20">
      <Title>개봉 예정 영화</Title>
      <MultiCarousel>
        {data &&
          data.map((movie) => (
            <Link key={movie.id} href={String(movie.id)}>
              <Image
                className="rounded-xl w-auto max-h-[450px]"
                src={IMG_API + movie.poster_path}
                alt={`${movie.title} 포스터`}
                width={2000}
                height={2000}
              />
            </Link>
          ))}
      </MultiCarousel>
    </section>
  );
}
