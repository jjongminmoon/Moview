import { IMG_API } from "@/api/movies";
import { CreditProps } from "@/model/movies";
import Image from "next/image";
import noImage from "../../public/images/no-image.webp";
import InfoBanner from "./ui/InfoBanner";

type Props = {
  credit: CreditProps | undefined;
};

export default function CreditInfo({ credit }: Props) {
  return (
    <section className="sm:text-center">
      <InfoBanner>출연진</InfoBanner>
      <ul className="flex gap-6 w-full overflow-auto p-3">
        {credit &&
          credit.cast.map((person, index) => (
            <li key={index} className="flex flex-col w-[120px] items-center shrink-0">
              <Image
                className="w-[100px] h-[100px] rounded-full object-cover"
                src={person.profile_path ? IMG_API + person.profile_path : noImage}
                alt={`${person.name} 이미지`}
                width={500}
                height={500}
              />
              <p className="truncate">{person.name}</p>
              <p className="text-xs truncate text-gray-400">{person.character}</p>
            </li>
          ))}
      </ul>
      <InfoBanner>연출진</InfoBanner>
      <ul className="flex gap-6 w-full overflow-auto p-3">
        {credit &&
          credit.crew.map((person, index) => (
            <li key={index} className="flex flex-col w-[120px] items-center shrink-0">
              <Image
                className="w-[100px] h-[100px] rounded-full object-cover"
                src={person.profile_path ? IMG_API + person.profile_path : noImage}
                alt={`${person.name} 이미지`}
                width={500}
                height={500}
              />
              <p className="truncate">{person.name}</p>
              <p className="text-xs truncate text-gray-400">{person.job}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}
