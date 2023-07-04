"use client";

import useSWR from "swr";
import MultiCarousel from "../ui/MulitCarousel";
import Image from "next/image";
import CameraIcon from "../icons/CameraIcon";
import Link from "next/link";
import upComing from "../../../public/images/up-coming.webp";
import Loading from "../ui/Loading";
import { getRecommendationssMovie } from "@/service/movies";
import { TmdbProps } from "@/model/movies";
import { IMG_API } from "@/app/api/movies/movies";

type Props = {
  detail: string;
};

export default function SimilarMovieCarousel({ detail }: Props) {
  const { data, isLoading } = useSWR<TmdbProps[]>(getRecommendationssMovie(detail));

  return (
    <>
      {isLoading && <Loading />}
      <section className="mt-8">
        <div className="flex items-center gap-2">
          <CameraIcon />
          <h1 className="text-2xl font-semibold">추천 영화</h1>
        </div>
        <MultiCarousel>
          {data &&
            data.map((movie) => (
              <Link href={String(movie.id)} key={movie.id}>
                <Image
                  className="rounded-xl w-full h-full max-h-[400px]"
                  src={movie.poster_path ? IMG_API + movie.poster_path : upComing}
                  alt={`${movie.title} 포스터`}
                  width={2000}
                  height={2000}
                />
              </Link>
            ))}
        </MultiCarousel>
      </section>
    </>
  );
}
