type Props = {
  image?: string | null;
  size?: string;
};

export default function Avatar({ image, size }: Props) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`border-red-600 border-2 object-cover rounded-full ${
          size === "big" ? "w-[140px] h-[140px] p-[5px]" : "w-[34px] h-[34px] p-[0.1rem]"
        }`}
        src={image ?? undefined}
        alt="사용자 이미지"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
