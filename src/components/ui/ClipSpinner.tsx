import dynamic from "next/dynamic";

const ClipLoader = dynamic(() => import("react-spinners").then((lib) => lib.ClipLoader), {
  ssr: false
});

export default function ClipSpinner() {
  return <ClipLoader color="#ff0000" size="55px" />;
}
