"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { dezTelegram, footerContacts } from "../assets/contacts";
import { IconArrow } from "../shared/icons/IconArrow";
import { Subtitle } from "../shared/Subtitle";

export const FooterLight = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const t = useTranslations("HomePage");
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="bg-black05 relative min-h-100 w-full overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 z-1 transition duration-100"
        style={{
          background: `radial-gradient(
            220px circle at ${pos.x}px ${pos.y}px,
            rgba(255,255,255,0.5) 0%,
            rgba(0,0,0,0.9) 80%
          )`,
        }}
      />

      <Image
        src="/images/lamp.png"
        alt="lamp"
        width={480}
        height={480}
        className="pointer-events-none absolute top-28 left-1/2 w-80 -translate-x-1/2 opacity-80"
      />

      {/* CONTENT */}
      <div className="casual-container tab:pt-8 prepc:pt-16 pc:pt-25 relative z-10 h-full pt-6 text-white">
        <Subtitle text={t("footerSubTitle")} className="mb-16" />
        <div className="tab:flex tab:justify-between tab:mb-40 mb-12">
          <div className="group tab:mb-0 tab:flex tab:gap-2 tab:w-fit mb-25 w-74">
            <a href={dezTelegram} target="_blank" rel="noopener noreferrer">
              <h2 className="tab:w-70 prepc:text-6xl pc:text-[64px] pc:w-96 prepc:w-90 tab:mb-0 mb-2 text-5xl leading-[90%] font-medium">
                {t("footerTitle")}
              </h2>
            </a>
            <IconArrow className="tab:group-hover:rotate-45 tab:h-20 tab:w-20 prepc:w-24 prepc:h-24 pc:w-32 pc:h-32 h-16 w-16 transition-transform duration-300 ease-in-out" />
          </div>
          <div className="">
            <p className="text-grey88 mb-2 leading-[100%] uppercase">{t("footerMedia")}</p>
            <ul className="group flex flex-col gap-4">
              {footerContacts.map((contact) => (
                <li key={contact.media}>
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-whiteff group-hover:text-grey88 hover:text-whiteff text-base leading-[150%] transition-all duration-300 ease-in-out"
                  >
                    {contact.media}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-grey88 h-px w-full" />
      </div>
    </div>
  );
};
