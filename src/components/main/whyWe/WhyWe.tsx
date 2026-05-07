import { useLocale, useTranslations } from "next-intl";

import { LocaleType } from "@/src/types/LocaleTypes";

import { dezTelegram } from "../../assets/contacts";
import { cubeList } from "../../assets/dataLists";
import { GlowLink } from "../../shared/GlowLink";
import { Subtitle } from "../../shared/Subtitle";
import { CubeSlider } from "./CubeSlider";

export const WhyWe = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const whyWelist = cubeList[locale as LocaleType].list;

  return (
    <section className="casual-container relative min-h-[calc(100vh-77px)] bg-[url('/bgimages/bg-whywe.png')] bg-cover bg-center pt-[calc((100vh-77px)/4)] pb-12">
      <Subtitle text={t("whyWeTitle")} className="mb-12" />
      <CubeSlider list={whyWelist} />
      <div className="mx-auto w-full max-w-80">
        <GlowLink link={dezTelegram} dark text={t("orderProject")} className="mx-auto" />
      </div>
    </section>
  );
};
