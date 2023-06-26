"use client";

import useSWR from "swr";
import MultiCarousel from "../ui/MulitCarousel";
import Image from "next/image";
import CameraIcon from "../icons/CameraIcon";
import Link from "next/link";
import { getSimilarMovie } from "@/service/movies";
import { TmdbProps } from "@/model/movies";
import { IMG_API } from "@/app/api/movies/movies";
import upComing from "../../../public/images/up-coming.webp";

type Props = {
  detail: string;
};

export default function SimilarMovieCarousel({ detail }: Props) {
  const { data, isLoading } = useSWR<TmdbProps[]>(getSimilarMovie(detail));

  return (
    <section className="mt-8">
      <div className="flex items-center gap-2 sm:justify-center">
        <CameraIcon />
        <h1 className="text-2xl font-semibold">추천 영화</h1>
      </div>
      <MultiCarousel>
        {data &&
          data.map((movie) => (
            <Link href={String(movie.id)} key={movie.id}>
              <Image
                className="rounded-xl w-full h-full max-h-[350px]"
                src={movie.poster_path ? IMG_API + movie.poster_path : upComing}
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
