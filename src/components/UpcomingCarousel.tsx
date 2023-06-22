"use client";

import { IMG_API, upcomingUrl } from "@/api/movies";
import { TmdbProps } from "@/model/movies";
import Image from "next/image";
import useSWR from "swr";
import MultiCarousel from "./ui/MulitCarousel";

export default function UpcomingCarousel() {
  const { data, isLoading } = useSWR<TmdbProps[]>(upcomingUrl);

  console.log(data);

  return (
    <section className="mt-8">
      <h1 className="text-2xl font-semibold text-center">개봉 예정 영화</h1>
      <MultiCarousel>
        {data &&
          data.map((movie) => (
            <Image
              className="rounded-xl w-auto max-h-[450px]"
              key={movie.id}
              src={IMG_API + movie.poster_path}
              alt={`${movie.title} 포스터`}
              width={2000}
              height={2000}
            />
          ))}
      </MultiCarousel>
    </section>
  );
}
