import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return <div className="flex flex-1">{t("title")}</div>;
}
