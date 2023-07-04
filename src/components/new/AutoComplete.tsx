import Image from "next/image";
import comingUp from "../../../public/images/up-coming.webp";
import { IMG_API } from "@/app/api/movies/movies";
import { TmdbProps } from "@/model/movies";
import { Dispatch, SetStateAction } from "react";

type Props = {
  data: TmdbProps[] | undefined;
  setImage: Dispatch<SetStateAction<string>>;
  setMovieTitle: Dispatch<SetStateAction<string>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export default function AutoComplete({ data, setImage, setMovieTitle, setOpenModal }: Props) {
  return (
    <div className="grid grid-cols-5 gap-2 min-w-[700px] h-[80%] overflow-y-auto">
      {data &&
        data.map((result) => (
          <div
            key={result.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              setImage(result.poster_path);
              setMovieTitle(result.title);
              setOpenModal(false);
            }}
          >
            <Image
              className="w-auto h-[250px]"
              src={result.poster_path ? IMG_API + result.poster_path : comingUp}
              alt={`${result.title} 포스터`}
              width={2000}
              height={2000}
            />
            <p className="w-full truncate text-center text-xs">{result.title}</p>
          </div>
        ))}
    </div>
  );
}
