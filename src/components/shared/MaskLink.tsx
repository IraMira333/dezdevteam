import Link from "next/link";

import { IconArrow } from "./icons/IconArrow";

export const MaskLink = ({
  text,
  white,
  link,
}: {
  text: string;
  white?: boolean;
  link: string;
}) => {
  return (
    <div className={`border-whitef0 relative h-11 w-47.5 overflow-hidden border`}>
      {/* background */}
      <div className={`absolute inset-0 ${white ? "bg-black06" : "bg-whitef0"}`} />

      {/* visible text */}
      <span
        className={`pointer-events-none absolute inset-0 flex items-center justify-center text-sm leading-[100%] font-bold uppercase ${
          white ? "text-whitef0" : "text-black06"
        }`}
      >
        {text} <IconArrow className="ml-2 h-5 w-5 stroke-2" />
      </span>

      {/* mask button */}
      <Link
        href={link}
        className={`mask-btn flex h-full w-full items-center justify-center text-sm leading-[100%] font-bold uppercase ${
          white ? "mask-light text-black06" : "mask-dark text-whitef0"
        }`}
      >
        {text} <IconArrow className="ml-2 h-5 w-5 stroke-2" />
      </Link>
    </div>
  );
};
