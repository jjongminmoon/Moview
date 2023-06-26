"use client";

import Image from "next/image";
import upComing from "../../../public/images/up-coming.webp";
import useSWR from "swr";
import axios from "axios";
import InfoBanner from "../ui/InfoBanner";
import CreditInfo from "./CreditInfo";
import { IMG_API } from "@/app/api/movies/movies";
import { CreditProps, DetailProps } from "@/model/movies";
import { getMovieCredit, getMovieDetail } from "@/service/movies";

type Props = {
  detail: string;
};

export default function MovieInfo({ detail }: Props) {
  const { data: movie, isLoading } = useSWR<DetailProps>(
    "movie",
    async () => await axios.get(getMovieDetail(detail)).then((response) => response.data)
  );
  const { data: credit } = useSWR<CreditProps>(
    "credit",
    async () => await axios.get(getMovieCredit(detail)).then((response) => response.data)
  );

  return (
    <>
      <article className="w-full flex gap-10 sm:flex-col sm:items-center sm:gap-2">
        <Image
          className="w-2/5 h-auto rounded-xl sm:w-3/5"
          src={movie?.poster_path ? IMG_API + movie.poster_path : upComing}
          alt={`${movie?.title} 포스터`}
          width={500}
          height={200}
          priority
        />
        <div className="flex-col w-full h-full sm:text-center">
          <h1 className="text-4xl sm:text-xl">{movie?.title}</h1>
          <h2 className="text-xl text-neutral-400 sm:text-sm">&nbsp;{movie?.original_title}</h2>
          <p className="sm:text-xs">&nbsp;{movie?.release_date}</p>
          <p className="sm:text-xs">⭐ {Number(movie?.vote_average).toFixed(1)}</p>
          <InfoBanner>장르</InfoBanner>
          <ul className="flex gap-5 sm:justify-center sm:text-sm">
            {movie?.genres && movie?.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <InfoBanner>줄거리</InfoBanner>
          <p className="sm:text-xs">{movie?.overview}</p>
        </div>
      </article>
      <CreditInfo credit={credit} />
    </>
  );
}
