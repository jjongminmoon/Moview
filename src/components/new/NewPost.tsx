"use client";

import SearchInput from "../search/SearchInput";
import useDebounce from "@/hooks/debounce";
import useSWR from "swr";
import AutoComplete from "./AutoComplete";
import ModalPortal from "../ui/ModalPortal";
import SelectImageModal from "./SelectImageModal";
import SelectImage from "./SelectImage";
import Input from "./Input";
import Button from "../ui/Button";
import Loading from "../ui/Loading";
import { FormEvent, useState } from "react";
import { TmdbProps } from "@/model/movies";
import { getMovieSearchResult } from "@/service/movies";
import { useRouter } from "next/navigation";

export default async function NewPost() {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState<string>("");
  const [movieTitle, setMovieTitle] = useState<string>("");
  const [postTitle, setPostTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const debounceSearchValue = useDebounce(searchValue);
  const { data } = useSWR<TmdbProps[]>(getMovieSearchResult(debounceSearchValue));
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("photo", image);
    formData.append("movieTitle", movieTitle);
    formData.append("postTitle", postTitle);
    formData.append("content", content);

    fetch("/api/posts/", { method: "POST", body: formData })
      .then((res) => {
        if (!res.ok) {
          setError(`${res.status} ${res.statusText}`);
          return;
        }
        router.push("/");
      })
      .catch((err) => {
        setError(err.toString());
      })
      .finally(() => {
        setLoading(false);
        error && alert(error);
      });
  };

  return (
    <section className="bg-black p-10 rounded-xl">
      {loading && <Loading />}
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex gap-5">
          <SelectImage image={image} setOpenModal={setOpenModal} />
          <div className="flex flex-col w-full h-full gap-5">
            <Input value={movieTitle} placeholder="영화 선택 시 자동으로 입력됩니다." />
            <Input
              placeholder="제목을 작성해주세요."
              onChange={(e) => setPostTitle(e.target.value)}
              value={postTitle}
            />
            <textarea
              className="p-4 text-black text-sm rounded-xl"
              name="text"
              id="input-text"
              required
              rows={20}
              placeholder="리뷰를 작성해주세요."
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <Button type="submit" className="w-full mt-5">
          완료
        </Button>
        {openModal && (
          <ModalPortal>
            <SelectImageModal onClose={() => setOpenModal(false)}>
              <SearchInput
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                placeholder="찾고 싶은 영화를 검색하세요."
              />
              <AutoComplete
                data={data}
                setImage={setImage}
                setMovieTitle={setMovieTitle}
                setOpenModal={setOpenModal}
              />
            </SelectImageModal>
          </ModalPortal>
        )}
      </form>
    </section>
  );
}
