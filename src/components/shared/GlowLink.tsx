import { IconArrow } from "./icons/IconArrow";

export const GlowLink = ({
  text,
  small,
  link,
  dark,
  className,
}: {
  text: string;
  link: string;
  small?: boolean;
  dark?: boolean;
  className?: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`glow-btn ${
        small ? "h-24 w-24" : "h-32 w-32"
      } ${dark ? "glow-dark" : "glow-light"} flex-col gap-3 text-center font-semibold tracking-[1.4px] uppercase ${className}`}
    >
      {text}
      <IconArrow className="h-4 w-4 stroke-2" />
    </a>
  );
};
