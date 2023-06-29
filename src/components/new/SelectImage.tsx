import { IMG_API } from "@/app/api/movies/movies";
import Image from "next/image";
import ImageIcon from "../icons/ImageIcon";
import { Dispatch, SetStateAction } from "react";

type Props = {
  image: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export default function SelectImage({ image, setOpenModal }: Props) {
  return (
    <div
      className="w-[50%] min-h-[550px] bg-white cursor-pointer flex justify-center items-center"
      onClick={() => setOpenModal(true)}
    >
      {image.length > 0 ? (
        <Image
          className="w-full h-full"
          src={IMG_API + image}
          alt="이미지 첨부"
          width={2000}
          height={2000}
        />
      ) : (
        <p className="flex flex-col items-center gap-3 text-red-600 text-2xl font-bold">
          <ImageIcon />
          포스터 검색
        </p>
      )}
    </div>
  );
}
