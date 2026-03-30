import { useLocale, useTranslations } from "next-intl";

import { LocaleType } from "@/src/types/LocaleTypes";

import { teamData } from "../../assets/contacts";
import { Subtitle } from "../../shared/Subtitle";
import { TeamCard } from "./TeamCard";

export const Team = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <section className="bg-black03 casual-container pt-4 pb-15">
      <div className="mb-12">
        <Subtitle text={t("teamTitle")} className="mb-2" />
        <p className="text-base leading-[130%] tracking-[0%]">{t("teamProjects")}</p>
        <p className="text-base leading-[130%] tracking-[0%]">{t("teamYears")}</p>
      </div>
      <div>
        <p className="text-whitef0 mr-0 mb-8 ml-auto w-62 text-5xl leading-[90%] font-medium -tracking-[6.44px] uppercase">
          {t("teamText1")}
        </p>
        <div className="mb-8 flex gap-4">
          {teamData.map((member) => (
            <TeamCard key={member.en.name} data={member} locale={locale as LocaleType} />
          ))}
        </div>
        <p className="text-whitef0 mb-6 w-75 text-5xl leading-[90%] font-medium -tracking-[6.44px] uppercase">
          {t("teamText2")}
        </p>
        <p className="text-whitef0 mr-1 ml-auto w-60 text-2xl leading-[100%] font-medium tracking-[0%] uppercase">
          {t("teamText3")}
        </p>
      </div>
    </section>
  );
};
