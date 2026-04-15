import { useLocale, useTranslations } from "next-intl";

import { LocaleType } from "@/src/types/LocaleTypes";

import { howWeWorkList } from "../../assets/dataLists";
import { Subtitle } from "../../shared/Subtitle";
import { StagesSlider } from "./StagesSlider";

export const Stages = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <section className="tab:min-h-[calc(100vh-77px)] relative h-[calc(100vh-77px)] min-h-200 overflow-hidden bg-[url('/bgimages/bg-process.png')] bg-cover bg-center">
      <div className="casual-container tab:mt-16 tab:flex tab:flex-row-reverse tab:justify-between">
        <Subtitle
          text={t("howWeWorkSubtitle")}
          className="tab:m-0 mt-16 mr-0 mb-16 ml-auto w-fit"
        />
        <h2 className="tab:text-left pc:text-9xl prepc:text-8xl tab:text-6xl tab:w-1/3 text-center text-5xl leading-[90%] font-medium tracking-[-6.44px] uppercase">
          {t("howWeWorkTitle")}
        </h2>
      </div>
      <StagesSlider
        list={howWeWorkList[locale as LocaleType]}
        className="tab:-translate-y-[45%] absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
};
