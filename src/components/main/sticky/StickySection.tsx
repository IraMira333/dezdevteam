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
    <section className="prepc:mb-25 relative mb-8 bg-[url('/bgimages/bg-wedo.jpg')] bg-cover bg-position-[center_400px]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_16.25%,rgba(5,5,5,0)_100%)]" />
      <div className="casual-container relative z-10 mb-12 py-4">
        <h2 className="text-whiteff mx-auto mb-6 w-50 text-center text-base leading-[130%] tracking-[0%] uppercase">
          {t("weDoTitle")}
        </h2>
        <p className="mx-auto mb-12 w-72 text-center text-base leading-[130%] tracking-[0%]">
          {t("weDoText")}
        </p>
        <Subtitle text={t("weDoSubtitle")} />
      </div>

      <div className="casual-container relative">
        {weDoList.map((card, index) => (
          <div
            key={card.en.title}
            className={`tab:h-[var(--h)] prepc:min-h-104 prepc:top-[var(--top-pc)] sticky top-[var(--top)] min-h-[var(--h)] pt-0`}
            style={
              {
                "--h": `calc(100vh - ${90 + index * 52}px)`,
                "--h-pc": `calc(100vh - ${120 + index * 52}px)`,
                "--top": `${80 + index * 52}px`,
                "--top-pc": `${120 + index * 52}px`,
                "--left-gap": ` ${index * 25}%`,
              } as React.CSSProperties
            }
          >
            <StickyCard
              data={card[locale as LocaleType]}
              className={`tab:w-1/2 tab:left-[var(--left-gap)]`}
            />
          </div>
        ))}
      </div>

      <div className="casual-container relative min-h-screen">
        <div className="tab:left-[calc(50%-95px)] tab:w-[55%] pc:w-[40%] tab:translate-x-0 absolute bottom-24 left-1/2 w-full -translate-x-1/2">
          <p className="text-whitef0 prepc:max-w-160 tab:max-w-120 tab:mx-0 prepc:text-36 mx-auto mb-5 max-w-90 text-2xl leading-[100%] font-medium tracking-[0%] whitespace-pre-line uppercase">
            {t("weDoEnd")}
          </p>
          <MaskLink
            noArrow
            text={t("btnContactUs")}
            white
            link={dezTelegram}
            className="tab:max-w-47.5 tab:mx-0 mx-auto w-full max-w-80"
          />
        </div>
      </div>
    </section>
  );
};
