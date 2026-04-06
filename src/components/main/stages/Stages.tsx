import { useLocale, useTranslations } from "next-intl";

import { LocaleType } from "@/src/types/LocaleTypes";

import { howWeWorkList } from "../../assets/dataLists";
import { Subtitle } from "../../shared/Subtitle";
import { StagesSlider } from "./StagesSlider";

export const Stages = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <section className="casual-container relative min-h-screen bg-[url('/bgimages/bg-process.png')] bg-cover bg-center py-14">
      <Subtitle text={t("howWeWorkSubtitle")} className="mr-0 mb-16 ml-auto w-fit" />
      <h2 className="text-center text-5xl leading-[90%] font-medium tracking-[-6.44px] uppercase">
        {t("howWeWorkTitle")}
      </h2>
      <StagesSlider list={howWeWorkList[locale as LocaleType]} />
    </section>
  );
};
