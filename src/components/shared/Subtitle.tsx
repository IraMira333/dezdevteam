import { IconBullet } from "./icons/IconBullet";

export const Subtitle = ({
  text,
  className,
  dark,
}: {
  text: string;
  className?: string;
  dark?: boolean;
}) => {
  return (
    <h3
      className={` ${dark ? "text-black0a" : "text-whiteff font-medium"} flex gap-4 leading-[130%] tracking-[1.4px] uppercase ${className}`}
    >
      <IconBullet className="tab:w-4 tab:h-4 mt-0.5 h-3.5 w-3.5 shrink-0" />
      {text}
    </h3>
  );
};
