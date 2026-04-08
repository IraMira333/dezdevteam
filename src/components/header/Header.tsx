import Image from "next/image";
import { useTranslations } from "next-intl";

import { teamData } from "../assets/contacts";
import LanguageSwitcher from "../LanguageSwitcher";
import { MaskButton } from "../shared/MaskButton";
import { SocialLink } from "../shared/SocialLink";

export const Header = () => {
  const t = useTranslations("HomePage");
  const contactList = [teamData[1].telegram, teamData[0].whatsapp];
  return (
    <header className="bg-black05 border-grey22 tab:px-6 fixed z-20 flex w-full items-center justify-between gap-1 border-b py-4 pr-2.5 pl-4">
      <Image src="/icons/Logo.png" alt="Logo" width={95} height={38} />
      <LanguageSwitcher />
      <div className="tab:hidden flex gap-2">
        {contactList.map((contact) => (
          <SocialLink
            key={contact}
            url={contact}
            className="text-black06 bg-whitef0 flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-105"
            iconStyles="w-5.5 h-auto"
          />
        ))}
      </div>
      <div className="tab:block hidden">
        <MaskButton text={t("btnContactUs")} />
      </div>
    </header>
  );
};
