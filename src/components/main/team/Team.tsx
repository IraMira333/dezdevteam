import { useLocale, useTranslations } from "next-intl";

import { LocaleType } from "@/src/types/LocaleTypes";

import { teamData } from "../../assets/contacts";
import { Subtitle } from "../../shared/Subtitle";
import { TeamCard } from "./TeamCard";

export const Team = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <section className="bg-black03 casual-container prepc:pb-18 pc:pb-26 tab:pt-14 prepc:pt-25 overflow-hidden pt-8 pb-15">
      <div className="tab:flex tab:mb-0 mb-8">
        <div className="tab:w-2/5 mb-12">
          <Subtitle text={t("teamTitle")} className="mb-2" />
          <p className="text-base leading-[130%] tracking-[0%]">{t("teamProjects")}</p>
          <p className="text-base leading-[130%] tracking-[0%]">{t("teamYears")}</p>
        </div>

        <div className="tab:w-3/5">
          <p className="text-whitef0 pc:text-9xl pc:w-full prepc:text-8xl tab:text-6xl prepc:w-140 tab:w-82 mr-0 ml-auto w-62 text-5xl leading-[90%] font-medium -tracking-[6.44px] whitespace-pre-line uppercase">
            {t("teamText1")}
          </p>
        </div>
      </div>
      <div className="tab:mb-0 prepc:justify-center prepc:gap-40 mx-auto mb-8 flex w-[80%] justify-around gap-4">
        {teamData.map((member) => (
          <TeamCard key={member.en.name} data={member} locale={locale as LocaleType} />
        ))}
      </div>
      <div className="tab:flex tab:-mt-10 pointer-events-none">
        <p className="text-whitef0 pc:text-9xl pc:w-220 prepc:text-8xl tab:text-6xl tab:w-94 prepc:w-160 pc:mb-8 mb-6 w-75 text-5xl leading-[90%] font-medium -tracking-[6.44px] uppercase">
          {t("teamText2")}
        </p>
        <p className="text-whitef0 tab:self-end prepc:text-3xl pc:text-36 prepc:w-76 pc:w-88 tab:mx-0 mr-1 ml-auto w-60 text-2xl leading-[100%] font-medium tracking-[0%] uppercase">
          {t("teamText3")}
        </p>
      </div>
    </section>
  );
};
