"use client";

import { useRef, useState } from "react";
import SearchInput from "../search/SearchInput";
import useDebounce from "@/hooks/debounce";
import useSWR from "swr";
import { TmdbProps } from "@/model/movies";
import { getMovieSearchResult } from "@/service/movies";
import AutoComplete from "./AutoComplete";
import ModalPortal from "../ui/ModalPortal";
import SelectImageModal from "./SelectImageModal";
import SelectImage from "./SelectImage";

export default function NewPost() {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState<string>("");
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue);
  const { data, isLoading } = useSWR<TmdbProps[]>(getMovieSearchResult(debounceValue));
  const textRef = useRef<HTMLTextAreaElement>(null);

  return (
    <section>
      <form className="flex gap-10">
        <SelectImage image={image} setOpenModal={setOpenModal} />

        <textarea
          className="w-full p-4 border border-neutral-400 text-black text-sm rounded-xl"
          name="text"
          id="input-text"
          required
          rows={20}
          placeholder="리뷰를 작성해주세요."
          ref={textRef}
        />
        {openModal && (
          <ModalPortal>
            <SelectImageModal onClose={() => setOpenModal(false)}>
              <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
              <AutoComplete data={data} setImage={setImage} setOpenModal={setOpenModal} />
            </SelectImageModal>
          </ModalPortal>
        )}
      </form>
    </section>
  );
}
