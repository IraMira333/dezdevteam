import { getSocialType } from "@/src/utils/getSocialType";
import { socialIconsMap } from "@/src/utils/socialIconsMap";

type Props = {
  url: string;
  className?: string;
  iconStyles?: string;
  text?: string;
};

export const SocialLink = ({ url, className, iconStyles, text }: Props) => {
  const type = getSocialType(url);
  const Icon = socialIconsMap[type];

  if (!Icon) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center ${className}`}
    >
      <Icon className={iconStyles} />
      {text && <span className="ml-2 font-bold uppercase">{text}</span>}
    </a>
  );
};
