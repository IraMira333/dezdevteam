import { useTranslations } from "next-intl";

import { UpButton } from "../shared/UpButton";
import { FooterLight } from "./FooterLight";

export const Footer = () => {
  const t = useTranslations("HomePage");

  // const list = [
  //   { title: t("policy"), url: "/policy" },
  //   { title: t("terms"), url: "/terms" },
  //   { title: t("cookies"), url: "/cookies" },
  // ];

  return (
    <footer className="bg-black05 prepc:pb-25 min-h-100 w-full flex-[0_0_auto] pb-12">
      <FooterLight />
      <div className="casual-container prepc:flex prepc:items-center prepc:gap-4 prepc:justify-between pt-8">
        {/* <ul className="prepc:flex-row prepc:w-[calc(50%-72px)] prepc:mb-0 mb-4 flex flex-col gap-4">
          {list.map((item) => (
            <li key={item.title}>
              <Link
                href={item.url}
                className="text-whiteff hover:text-grey88 leading-[150%] underline"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul> */}
        <div className="prepc:w-[calc(50%+72px)] flex items-center justify-between">
          <p className="text-grey88 text-xs uppercase"> &#169; 2026 form and code studio</p>
          <UpButton text={t("up")} />
        </div>
      </div>
    </footer>
  );
};
