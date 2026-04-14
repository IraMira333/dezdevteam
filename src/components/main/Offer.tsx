import Image from "next/image";
import { useTranslations } from "next-intl";

import { CustomTitleH2 } from "../shared/CustomTitle";

export const Offer = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="bg-black0a casual-container pc:min-w-fit relative min-h-[calc(100vh-77px)] min-w-screen overflow-hidden">
      <CustomTitleH2 text={t("offerTitle")} className="mt-6 justify-end" />

      <div className="tab:right-0 absolute top-16 right-11 bottom-0 overflow-hidden">
        <Image
          src="/bgimages/bg-offer.png"
          alt="background image"
          width={675}
          height={980}
          className="h-full w-auto max-w-none"
        />
      </div>

      <div className="tab:pt-14 prepc:pt-6 prepc:pb-16 pc:pb-23.5 absolute top-0 z-1 flex h-full w-[calc(100%-32px)] flex-col justify-between pt-28.5 pb-14">
        <p className="text-whitef0 pc:w-[calc(100%-100px)] pc:text-9xl prepc:text-8xl prepc:w-2/3 tab:w-1/2 tab:text-6xl w-87.5 text-5xl leading-[90%] font-medium tracking-[-6.44px] whitespace-pre-line uppercase">
          {t.rich("offerText1", { grey: (chunk) => <span className="text-grey88">{chunk}</span> })}
        </p>
        <p className="text-whitef0 tab:mx-auto tab:w-60 prepc:text-3xl prepc:w-70 pc:text-36 pc:w-88 mr-0 ml-auto w-46 text-2xl leading-[100%] font-medium tracking-[0%] uppercase">
          {t("offerText2")}
        </p>
      </div>
    </section>
  );
};
