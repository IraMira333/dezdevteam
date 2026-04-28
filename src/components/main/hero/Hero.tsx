import { useLocale, useTranslations } from "next-intl";

import { LocaleType } from "@/src/types/LocaleTypes";

import { dezTelegram } from "../../assets/contacts";
import { projectsData } from "../../assets/projectsData";
import { CustomTitleH1 } from "../../shared/CustomTitle";
import { GlowLink } from "../../shared/GlowLink";
import { FloatingGallery } from "./FloatingGallery";
import { ProjectsList } from "./ProjectsList";

export const Hero = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <section className="nopadding-container tab:px-6 prepc:px-10 pc:px-20 relative">
      <div className="tab:pb-16 prepc:pt-20 pc:pt-26 min-h-[calc(100vh-77px)] overflow-hidden pt-17.5">
        <div className="tab:flex tab:justify-between">
          <div className="tab:flex tab:px-0 tab:w-[43%] prepc:w-[35%] tab:flex-col tab:justify-between tab:mb-0 mb-8 px-4">
            <CustomTitleH1 text={t("title")} className="mb-10" />
            <p className="text-whitef0 tab:pb-12 prepc:pb-16 prepc:text-5xl pc:text-[56px] text-4xl font-medium whitespace-pre-line uppercase">
              {t("text")}
            </p>
          </div>
          <div className="tab:w-[55%] prepc:w-[65%] tab:ml-auto tab:mr-0 relative mx-auto aspect-[125/100] h-auto w-full">
            <FloatingGallery />
          </div>
        </div>
      </div>
      <ProjectsList list={projectsData} locale={locale as LocaleType} />
      <div className="absolute -bottom-16 left-1/2 z-10 -translate-x-1/2">
        <GlowLink link={dezTelegram} dark text={t("orderProject")} />
      </div>
    </section>
  );
};
