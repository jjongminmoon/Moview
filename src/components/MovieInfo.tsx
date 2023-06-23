"use client";

import Image from "next/image";
import noImage from "../../public/images/no-image.webp";
import useSWR from "swr";
import axios from "axios";
import InfoBanner from "./ui/InfoBanner";
import { IMG_API } from "@/api/movies";
import { DetailProps } from "@/model/movies";
import { getMovieDetail } from "@/service/movies";

type Props = {
  detail: string;
};

export default function MovieInfo({ detail }: Props) {
  const { data, isLoading } = useSWR<DetailProps>(
    "fetch",
    async () => await axios.get(getMovieDetail(detail)).then((response) => response.data)
  );

  return (
    <article className="relative w-full">
      <div className="flex gap-10 max-h-[650px]">
        <Image
          className="w-2/5 h-auto rounded-xl"
          src={data?.poster_path ? IMG_API + data.poster_path : noImage}
          alt={`${data?.title} 포스터`}
          width={500}
          height={200}
          priority
        />
        <div className="flex-col justify-center w-full h-full">
          <h1 className="text-4xl">{data?.title}</h1>
          <h2 className="text-xl text-neutral-400">&nbsp;{data?.original_title}</h2>
          <p>&nbsp;{data?.release_date}</p>
          <p>⭐ {Number(data?.vote_average).toFixed(1)}</p>
          <InfoBanner>장르</InfoBanner>
          <ul className="flex gap-5">
            {data?.genres && data?.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <InfoBanner>줄거리</InfoBanner>
          <p>{data?.overview}</p>
        </div>
      </div>
    </article>
  );
}
