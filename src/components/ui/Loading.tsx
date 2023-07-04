import ClipSpinner from "./ClipSpinner";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full z-99 bg-neutral-900/70">
      <ClipSpinner />
    </div>
  );
}
