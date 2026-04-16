import { useLocale, useTranslations } from "next-intl";

import { LocaleType } from "@/src/types/LocaleTypes";

import { dezTelegram } from "../../assets/contacts";
import { weDoList } from "../../assets/dataLists";
import { MaskLink } from "../../shared/MaskLink";
import { Subtitle } from "../../shared/Subtitle";
import { StickyCard } from "./StickyCard";

export const StickySection = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  return (
    <section className="casual-container relative bg-[url('/bgimages/bg-wedev.jpg')] bg-cover bg-center pb-15">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_16.25%,rgba(5,5,5,0)_100%)]" />
      <div className="relative z-10 mb-12 bg-[linear-gradient(180deg,#050505_16.25%,rgba(5,5,5,0)_100%)] py-4">
        <h2 className="text-whiteff mx-auto mb-6 w-50 text-center text-base leading-[130%] tracking-[0%] uppercase">
          {t("weDoTitle")}
        </h2>
        <p className="mx-auto mb-12 w-72 text-center text-base leading-[130%] tracking-[0%]">
          {t("weDoText")}
        </p>
        <Subtitle text={t("weDoSubtitle")} />
      </div>

      <div className="relative">
        {weDoList.map((card, index) => (
          <div
            key={card.en.title}
            className={`tab:top-[var(--card-top)] prepc:top-[var(--card-top-pc)] tab:min-h-162.5 tab:h-[var(--tab-h)] prepc:h-[var(--pc-h)] sticky top-[var(--card-top-mob)] min-h-[var(--mob-h)] pt-0`}
            style={
              {
                "--mob-h": `calc(100vh - ${90 + index * 52}px)`,
                "--tab-h": "calc(100vh - 56px)",
                "--pc-h": "calc(100vh - 84px)",
                "--card-top-mob": `${80 + index * 52}px`,
                "--card-top": "56px",
                "--card-top-pc": "84px",
              } as React.CSSProperties
            }
          >
            <StickyCard
              data={card[locale as LocaleType]}
              className={`tab:w-[33.5%] tab:left-[var(--card-left)]`}
            />
          </div>
        ))}
      </div>

      <div className="pt-18">
        <p className="text-whitef0 mb-5 text-2xl leading-[100%] font-medium tracking-[0%] whitespace-pre-line uppercase">
          {t("weDoEnd")}
        </p>
        <MaskLink noArrow text={t("btnContactUs")} white link={dezTelegram} className="w-full" />
      </div>
    </section>
  );
};
