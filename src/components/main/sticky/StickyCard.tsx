import { useTranslations } from "next-intl";

import { dezTelegram } from "../../assets/contacts";
import { WeDoType } from "../../assets/dataLists";
import { MaskLink } from "../../shared/MaskLink";

export const StickyCard = ({ data, className }: { data: WeDoType; className?: string }) => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div
        className={`bg-black05 border-whiteff tab:top-12 tab:h-[calc(100%-48px)] tab:p-6 tab:pt-8 prepc:px-12 prepc:pt-15 prepc:flex-row prepc:justify-between absolute flex w-full flex-col border-t p-4 ${className}`}
      >
        <h3 className="text-whitef0 mb-6 text-2xl leading-[120%] font-medium uppercase">
          {data.title}
        </h3>
        <div>
          <h4 className="mb-5 leading-[130%] font-medium tracking-[1.41px] uppercase">
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
        <div>
          <h4 className="mb-5 leading-[130%] font-medium tracking-[1.41px] uppercase">
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
        <div>
          <h4>{t("weDoTerm")}</h4>
          <p className="tab:mb-7 prepc:w-[24%] prepc:mb-0 prepc:max-w-80.25 mb-5 max-w-125 leading-5">
            {data.term}
          </p>
        </div>
        <div className="flex flex-col gap-3.5">
          <MaskLink noArrow white text={t("orderProject")} link={dezTelegram} className="w-full" />
          <MaskLink noArrow text={t("weDone")} link="" className="w-full" />
        </div>
      </div>
    </>
  );
};
