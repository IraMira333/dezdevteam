"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { teamData } from "../assets/contacts";
import LanguageSwitcher from "../LanguageSwitcher";
import { MaskButton } from "../shared/MaskButton";
import { SocialLink } from "../shared/SocialLink";
import { ContactMenu } from "./ContactMenu";

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const t = useTranslations("HomePage");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const current = new Date().toLocaleTimeString("en-US", {
        timeZone: "Europe/Kyiv",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTime(current);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const handleClickOutside = () => setIsMenuOpened(false);

    if (isMenuOpened) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => window.removeEventListener("click", handleClickOutside);
  }, [isMenuOpened]);
  const contactList = [teamData[1].telegram, teamData[0].whatsapp];

  return (
    <header className="bg-black05 casual-container border-grey22 prepc:h-24.5 fixed left-1/2 z-20 flex w-full -translate-x-1/2 items-center justify-between gap-1 border-b py-4">
      <Image src="/icons/Logo.png" alt="Logo" width={95} height={38} />
      <LanguageSwitcher className="prepc:hidden" />
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
      <div className="tab:block prepc:flex prepc:gap-6 hidden items-center">
        <MaskButton
          text={t("btnContactUs")}
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpened((prev) => !prev);
          }}
        />
        <LanguageSwitcher className="prepc:flex hidden" />
        <ContactMenu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      </div>
      <div className="prepc:flex prepc:gap-12 prepc:absolute prepc:top-1/2 prepc:left-1/2 prepc:-translate-x-1/2 prepc:-translate-y-1/2 hidden uppercase">
        <p>{t("headerCity")}</p>
        <p>{time}</p>
      </div>
    </header>
  );
};
