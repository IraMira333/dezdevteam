"use client";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

import { locales } from "../config";
import { Link, usePathname } from "../i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const hash = typeof window !== "undefined" ? window.location.hash : "";

  return (
    <ul className="pc:text-base relative z-10 flex gap-1 pb-1 leading-[100%] uppercase">
      {locales.map((curLocale) => (
        <li
          key={curLocale}
          className="relative first:pr-1.25 first:after:absolute first:after:-top-0.5 first:after:right-0 first:after:h-4.25 first:after:w-px first:after:bg-current first:after:content-['']"
        >
          <Link
            href={{
              hash,
              search: searchParams.toString(),
              pathname: pathName,
            }}
            replace
            locale={curLocale}
            scroll={false}
            className={
              curLocale === locale
                ? "text-whitef0 cursor-none! font-bold transition-all duration-250 ease-in-out"
                : "text-grey88 hover:text-whiteff transition-all duration-250 ease-in-out"
            }
          >
            {curLocale === "uk" ? "ua" : curLocale}
          </Link>
        </li>
      ))}
    </ul>
  );
}
