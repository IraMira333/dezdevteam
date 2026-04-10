import clsx from "clsx";

import { IconArrow } from "./icons/IconArrow";

export const MaskLink = ({
  text,
  white,
  link,
  className,
  noArrow,
}: {
  text?: string;
  white?: boolean;
  link: string;
  className?: string;
  noArrow?: boolean;
}) => {
  return (
    <div className={clsx("border-whitef0 relative h-11 w-47.5 overflow-hidden border", className)}>
      <div className={`absolute inset-0 ${white ? "bg-black06" : "bg-whitef0"}`} />

      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center text-sm leading-[100%] font-bold uppercase ${
          white ? "text-whitef0" : "text-black06"
        }`}
      >
        {text && <span className="mr-2">{text}</span>}
        {noArrow ? null : <IconArrow className="h-5 w-5 stroke-2" />}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`mask-btn flex h-full w-full items-center justify-center text-sm leading-[100%] font-bold uppercase ${
          white ? "mask-light text-black06" : "mask-dark text-whitef0"
        }`}
      >
        {text && <span className="mr-2">{text}</span>}
        {noArrow ? null : <IconArrow className="h-5 w-5 stroke-2" />}
      </a>
    </div>
  );
};
