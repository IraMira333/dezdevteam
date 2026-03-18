import { useTranslations } from "next-intl";

import { GlowButton } from "@/src/components/shared/GlowButton";
import MaskButton from "@/src/components/shared/MaskButton";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="mx-auto mt-20">
      <h1>{t("title")}</h1>
      <MaskButton />
      <GlowButton />
    </div>
  );
}
