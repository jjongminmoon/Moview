"use client";

import useSWR from "swr";
import MultiCarousel from "../ui/MulitCarousel";
import Image from "next/image";
import { IMG_API, popularUrl } from "@/app/api/movies/movies";
import { TmdbProps } from "@/model/movies";
import Link from "next/link";

export default function PopularCarousel() {
  const { data, isLoading } = useSWR<TmdbProps[]>(popularUrl);
  const topRated = data?.slice(0, 5);

  return (
    <section className="pt-8 px-20">
      <h1 className="text-2xl font-semibold text-center">이달의 영화</h1>
      <MultiCarousel>
        {topRated &&
          topRated.map((movie) => (
            <Link key={movie.id} href={String(movie.id)}>
              <Image
                className="rounded-xl w-auto max-h-[450px]"
                src={IMG_API + movie.poster_path}
                alt={`${movie.title} 포스터`}
                width={2000}
                height={2000}
                priority
              />
            </Link>
          ))}
      </MultiCarousel>
    </section>
  );
}
