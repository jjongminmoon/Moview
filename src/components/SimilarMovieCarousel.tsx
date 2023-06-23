"use client";

import { getSimilarMovie } from "@/service/movies";
import useSWR from "swr";
import MultiCarousel from "./ui/MulitCarousel";
import Image from "next/image";
import { TmdbProps } from "@/model/movies";
import { IMG_API } from "@/api/movies";
import Slider from "react-slick";
import CameraIcon from "./icons/CameraIcon";

type Props = {
  detail: string;
};

export default function SimilarMovieCarousel({ detail }: Props) {
  const { data, isLoading } = useSWR<TmdbProps[]>(getSimilarMovie(detail));

  return (
    <section className="mt-8">
      <div className="flex items-center gap-2">
        <CameraIcon />
        <h1 className="text-2xl font-semibold">추천 영화</h1>
      </div>
      <MultiCarousel>
        {data &&
          data.map((movie) => (
            <Image
              className="rounded-xl w-auto max-h-[350px]"
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
