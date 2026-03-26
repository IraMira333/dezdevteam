import Image from "next/image";
import { useTranslations } from "next-intl";

import { dezTelegram } from "../assets/contacts";
import LanguageSwitcher from "../LanguageSwitcher";
import { MaskButton } from "../shared/MaskButton";

export const Header = () => {
  const t = useTranslations("HomePage");
  return (
    <header className="bg-black05 border-grey22 tab:px-6 flex items-center justify-between gap-1 border-b py-4 pr-2.5 pl-4">
      <Image src="/icons/Logo.png" alt="Logo" width={95} height={38} />
      <LanguageSwitcher />
      <div className="tab:hidden flex gap-2">
        <a
          href={dezTelegram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black06 bg-whitef0 flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-105"
        >
          TG
        </a>
      </div>
      <div className="tab:block hidden">
        <MaskButton text={t("btnContactUs")} />
      </div>
    </header>
  );
};
