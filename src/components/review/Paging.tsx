import Pagination from "react-js-pagination";

type Props = {
  page: number;
  postPerPage: number;
  count: number | undefined;
  onChange: (currentPage: number) => void;
};

export default function Paging({ page, postPerPage, count, onChange }: Props) {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={postPerPage}
      totalItemsCount={count && count > 0 ? count : 0}
      pageRangeDisplayed={5}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={onChange}
      innerClass="flex gap-5 items-center justify-center mt-10"
      activeClass="bg-red-600 rounded-full px-3 py-1"
      itemClassFirst="pb-1"
      itemClassLast="pb-1"
    />
  );
}
