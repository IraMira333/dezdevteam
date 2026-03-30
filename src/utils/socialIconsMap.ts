import { ComponentType } from "react";

import { IconInstagram } from "../components/shared/icons/IconInstagram";
import { IconLinkedin } from "../components/shared/icons/IconLinkedin";
import { IconTelegram } from "../components/shared/icons/IconTelegram";
import { IconWhatsapp } from "../components/shared/icons/IconWhatsapp";
import { IconProps } from "../types/IconsPropType";
import { SocialType } from "./getSocialType";

export const socialIconsMap: Partial<Record<SocialType, ComponentType<IconProps>>> = {
  linkedin: IconLinkedin,
  instagram: IconInstagram,
  telegram: IconTelegram,
  whatsapp: IconWhatsapp,
};
