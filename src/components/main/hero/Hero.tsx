import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { LocaleType } from "@/src/types/LocaleTypes";

import { projectsData } from "../../assets/projectsData";
import { CustomTitleH1 } from "../../shared/CustomTitle";
import { GlowButton } from "../../shared/GlowButton";
import { ProjectsList } from "./ProjectsList";

export const Hero = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const newestProjectData = projectsData[0];
  const projectsDataWithoutNewest = projectsData.slice(1);

  return (
    <section className="nopadding-container mt-14">
      <div className="tab:flex tab:px-6 tab:mb-16 tab:justify-between prepc:min-h-[calc(100vh-77px)]">
        <div className="tab:flex tab:px-0 tab:w-[43%] tab:flex-col tab:justify-between tab:mb-0 mb-8 px-4">
          <CustomTitleH1 text={t("title")} className="mb-10" />
          <p className="text-whitef0 text-[56px] leading-[90%] font-medium whitespace-pre-line uppercase">
            {t("text")}
          </p>
        </div>
        <div className="tab:w-[56%] tab:max-w-157 tab:mb-0 relative mx-auto mb-26.5 w-fit">
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
          <div className="absolute right-20 -bottom-20 hidden">
            <GlowButton text="Дивитись проєкт" />
          </div>
        </div>
      </div>
      <ProjectsList list={projectsDataWithoutNewest} locale={locale as LocaleType} />
    </section>
  );
};
