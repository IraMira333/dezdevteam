import { useTranslations } from "next-intl";

import { dezTelegram } from "../../assets/contacts";
import { WeDoType } from "../../assets/dataLists";
import { MaskLink } from "../../shared/MaskLink";
import { MaskLinkInsite } from "../../shared/MaskLinkInsite";

export const StickyCard = ({ data, className }: { data: WeDoType; className?: string }) => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div
        className={`bg-black05 border-whiteff prepc:min-h-104 prepc:h-104 tab:border tab:border-whiteff/20 absolute flex w-full flex-col border-t p-4 ${className}`}
      >
        <h3 className="text-whitef0 mb-4 text-2xl leading-[120%] font-medium uppercase">
          {data.title}
        </h3>
        <div className="prepc:flex prepc:flex-col h-full justify-between">
          <div className="prepc:flex">
            <div className="prepc:w-1/2">
              <h4 className="mb-4 leading-[130%] font-medium tracking-[1.41px] uppercase">
                {t("weDoForWhom")}
              </h4>
              {Array.isArray(data.forWhom) ? (
                <ul className="mb-5 list-disc pl-5 text-base leading-[160%] tracking-[0%]">
                  {data.forWhom.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-5 text-base leading-[160%] tracking-[0%]">{data.forWhom}</p>
              )}
            </div>
            <div className="prepc:w-1/2">
              <h4 className="mb-4 leading-[130%] font-medium tracking-[1.41px] uppercase">
                {t("weDoServices")}
              </h4>
              {Array.isArray(data.includes) ? (
                <ul className="mb-5 list-disc pl-5 text-base leading-[160%] tracking-[0%]">
                  {data.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-5 text-base leading-[160%] tracking-[0%]">{data.includes}</p>
              )}
            </div>
          </div>
          <div>
            <div className="tab:mb-7 mb-5 flex items-center justify-between">
              <h4>{t("weDoTerm")}</h4>
              <p className="prepc:w-[24%] prepc:max-w-80.25 max-w-125 leading-5">{data.term}</p>
            </div>
            <div className="prepc:flex-row flex flex-col gap-3.5">
              <MaskLink
                noArrow
                white
                text={t("orderProject")}
                link={dezTelegram}
                className="w-full"
              />
              <MaskLinkInsite noArrow text={t("weDone")} id="projects" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
