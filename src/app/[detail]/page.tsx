"use client";

import Section from "@/components/ui/Section";
import axios from "axios";
import Image, { StaticImageData } from "next/image";
import { IMG_API, TMDB_API } from "@/api/movies";
import { useEffect, useState } from "react";
import { TmdbProps } from "@/model/movies";
import useSWR from "swr";
import noImage from "../../../public/images/no-image.jpg";

type Props = {
  params: {
    detail: string;
  };
};

export default function DetailPage({ params: { detail } }: Props) {
  const url = `${TMDB_API}/movie/${detail}?api_key=${process.env.TMDB_API_KEY}&language=ko-KR`;
  const { data, isLoading } = useSWR<TmdbProps>(
    "fetch",
    async () => await axios.get(url).then((response) => response.data)
  );

  return (
    <Section key={data?.id} className="mt-8">
      <article className="w-full">
        <div className="flex gap-10 max-h-[650px]">
          <Image
            className="w-2/5 h-auto"
            src={data ? IMG_API + data.poster_path : noImage}
            alt={`${data?.title} 포스터`}
            width={500}
            height={200}
          />
          <div className="flex-col justify-center w-full">
            <h1 className="text-4xl">{data?.title}</h1>
            <h2 className="text-xl text-neutral-400">&nbsp;{data?.original_title}</h2>
            <p>&nbsp;{data?.release_date}</p>
            <p>⭐ {Number(data?.vote_average).toFixed(1)}</p>
            <span className="inline-block mt-8 px-4 py-2 mb-3 bg-red-600 rounded-full">줄거리</span>
            <p>{data?.overview}</p>
          </div>
        </div>
      </article>
    </Section>
  );
}
