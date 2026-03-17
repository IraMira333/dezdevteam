import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-1 bg-linear-to-b from-[#2e026d] to-[#15162c] text-white">
      {t("title")}
    </div>
  );
}
