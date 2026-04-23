import Image from "next/image";

import { LocaleType } from "@/src/types/LocaleTypes";

import { TeamMember } from "../../assets/contacts";
import { SocialLink } from "../../shared/SocialLink";

export const TeamCard = ({ data, locale }: { data: TeamMember; locale: LocaleType }) => {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="tab:max-w-64 prepc:max-w-80 aspect-square">
        <Image
          src={data.photo}
          alt={data[locale].name}
          width={380}
          height={380}
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-whiteff tab:w-full tab:text-lg w-30 text-base leading-[150%] font-semibold tracking-[0%]">
          {data[locale].name}
        </h3>
        <p className="tab:w-fit mx-auto w-25 leading-[143%] tracking-[1.4px] uppercase">
          {data.role}
        </p>
      </div>
      <div className="flex gap-3.5">
        {data.media.map((m) => (
          <SocialLink
            key={m}
            url={m}
            className="border-whiteff/20 h-11 w-11 rounded-full border"
            iconStyles="text-whiteff w-5.5 h-auto"
          />
        ))}
      </div>
    </div>
  );
};
