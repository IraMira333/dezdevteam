import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { LocaleType } from "@/src/types/LocaleTypes";

import { projectsData } from "../assets/projectsData";
import { GlowButton } from "../shared/GlowButton";
import { ProjectsList } from "./ProjectsList";

export const Hero = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const newestProjectData = projectsData[projectsData.length - 1];
  const projectsDataWithoutNewest = projectsData.slice(0, -1);

  return (
    <div className="">
      <div className="mb-8 px-4">
        <div className="text-whiteff mb-10 flex gap-0.5 text-base leading-[130%] font-light">
          <span className="">{"{"} </span>
          <h1 className="whitespace-pre-line uppercase">{t("title")}</h1>
          <span className="self-end">{"}"}</span>
        </div>
        <p className="text-whitef0 text-[56px] leading-[90%] font-medium whitespace-pre-line uppercase">
          {t("text")}
        </p>
      </div>
      <div className="relative mb-26.5">
        <Image
          src={newestProjectData.image}
          alt={newestProjectData[locale as LocaleType].title}
          width={627}
          height={503}
        />
        <p className="text-whiteff absolute top-3.5 left-4 leading-[120%] uppercase">
          {newestProjectData.year}
        </p>
        <ul className="text-whiteff absolute top-3.5 right-4 leading-[120%] uppercase">
          {newestProjectData[locale as LocaleType].details.map((detail, index) => (
            <li key={index} className="">
              {detail}
            </li>
          ))}
        </ul>
        <div className="absolute right-20 -bottom-20">
          <GlowButton text="Дивитись проєкт" />
        </div>
      </div>
      <ProjectsList list={projectsDataWithoutNewest} locale={locale as LocaleType} />
    </div>
  );
};
