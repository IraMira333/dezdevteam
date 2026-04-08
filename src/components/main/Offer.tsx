import Image from "next/image";
import { useTranslations } from "next-intl";

import { CustomTitleH2 } from "../shared/CustomTitle";

export const Offer = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="bg-black0a casual-container relative min-h-[calc(100vh-77px)] min-w-screen overflow-hidden">
      <CustomTitleH2 text={t("offerTitle")} className="mt-6" />

      <div className="tab:justify-end absolute top-16 right-0 h-[calc(100vh-64px)]">
        <Image
          src="/bgimages/bg-offer.png"
          alt="background image"
          width={675}
          height={980}
          className="h-full w-auto object-contain object-center"
        />
      </div>

      <div className="absolute top-0 z-1 flex h-full w-[calc(100%-32px)] flex-col justify-between pt-28.5 pb-18">
        <p className="text-whitef0 w-87.5 text-5xl leading-[90%] font-medium tracking-[-6.44px] uppercase">
          {t.rich("offerText1", { grey: (chunk) => <span className="text-grey88">{chunk}</span> })}
        </p>
        <p className="text-whitef0 mr-0 ml-auto w-46 text-2xl leading-[100%] font-medium tracking-[0%] uppercase">
          {t("offerText2")}
        </p>
      </div>
    </section>
  );
};
