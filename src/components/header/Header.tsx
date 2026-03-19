import { useTranslations } from "next-intl";

import LanguageSwitcher from "../LanguageSwitcher";
import { LogoName } from "../LogoName";
import { MaskButton } from "../shared/MaskButton";

export const Header = () => {
  const t = useTranslations("HomePage");
  return (
    <header className="bg-black05 border-grey22 flex items-center justify-between gap-1 border-b py-4 pr-2.5 pl-4">
      <LogoName />
      <LanguageSwitcher />
      <MaskButton text={t("btnContactUs")} />
    </header>
  );
};
