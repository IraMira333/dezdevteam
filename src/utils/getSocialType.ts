export type SocialType = "linkedin" | "instagram" | "telegram" | "whatsapp" | "unknown";

export const getSocialType = (url: string): SocialType => {
  const normalized = url.toLowerCase();

  if (normalized.includes("linkedin.com")) return "linkedin";
  if (normalized.includes("instagram.com")) return "instagram";
  if (normalized.includes("t.me") || normalized.includes("telegram")) return "telegram";
  if (normalized.includes("wa.me") || normalized.includes("whatsapp")) return "whatsapp";

  return "unknown";
};
