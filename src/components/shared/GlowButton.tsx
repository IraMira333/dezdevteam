import { IconArrow } from "./icons/IconArrow";

export const GlowButton = ({
  text,
  small,
  dark,
  className,
}: {
  text: string;
  small?: boolean;
  dark?: boolean;
  className?: string;
}) => {
  return (
    <button
      className={`glow-btn ${
        small ? "h-24 w-24" : "h-32 w-32"
      } ${dark ? "glow-dark" : "glow-light"} flex-col gap-3 font-semibold tracking-[1.4px] uppercase ${className}`}
    >
      {text}
      <IconArrow className="h-4 w-4 stroke-2" />
    </button>
  );
};
