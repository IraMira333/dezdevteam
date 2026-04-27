import { useLocale, useTranslations } from "next-intl";

import { LocaleType } from "@/src/types/LocaleTypes";

import { projectsData } from "../../assets/projectsData";
import { CustomTitleH1 } from "../../shared/CustomTitle";
import { GlowButton } from "../../shared/GlowButton";
import { FloatingGallery } from "./FloatingGallery";
import { ProjectsList } from "./ProjectsList";

export const Hero = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <section className="nopadding-container tab:px-6 prepc:px-10 pc:px-20">
      <div className="tab:flex tab:pb-16 prepc:pt-20 pc:pt-26 tab:justify-between min-h-[calc(100vh-77px)] overflow-hidden pt-17.5">
        <div className="tab:flex tab:px-0 tab:w-[44%] prepc:w-[35%] tab:flex-col tab:justify-between tab:mb-0 mb-8 px-4">
          <CustomTitleH1 text={t("title")} className="mb-10" />
          <p className="text-whitef0 prepc:text-5xl pc:text-[56px] text-4xl font-medium whitespace-pre-line uppercase">
            {t("text")}
          </p>
        </div>
        <div className="tab:w-[56%] prepc:w-[65%] tab:ml-auto tab:mr-0 relative mx-auto aspect-[125/100] h-auto w-full">
          <FloatingGallery />
          <div className="absolute right-20 -bottom-20 hidden">
            <GlowButton text="Дивитись проєкт" />
          </div>
        </div>
      </div>
      <ProjectsList list={projectsData} locale={locale as LocaleType} />
    </section>
  );
};
