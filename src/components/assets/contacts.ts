export const dezTelegram = "https://t.me/iryna_stoliarova";
export const dezWhatsApp = "https://wa.me/380954249078";
export const devTelegram = "https://t.me/iramira333";
export const devWhatsApp = "https://wa.me/380939449063";

export type TeamMember = {
  photo: string;
  telegram: string;
  whatsapp: string;
  media: string[];
  role: string;
  uk: { name: string };
  en: { name: string };
};
export const teamData: TeamMember[] = [
  {
    role: "fullstack developer",
    photo: "/images/photodev.png",
    media: [
      "https://linkedin.com/in/iryna-trynkal-41542311a",
      "https://www.instagram.com/trynkal_iryna_developer/",
    ],
    whatsapp: devWhatsApp,
    telegram: devTelegram,
    uk: { name: "Ірина Тринкаль" },
    en: { name: "Iryna Trynkal" },
  },
  {
    role: "UI/UX designer",
    photo: "/images/photodez.png",
    media: [
      "https://linkedin.com/in/iryna-stoliarova",
      "https://www.instagram.com/stoliarova_design/",
    ],
    telegram: dezTelegram,
    whatsapp: dezWhatsApp,
    uk: { name: "Ірина Столярова" },
    en: { name: "Iryna Stoliarova" },
  },
];

export const footerContacts = [
  { media: "Instagram", url: "https://www.instagram.com/stoliarova_design/" },
  { media: "Whatsapp", url: devWhatsApp },
  { media: "LinkedIn", url: "https://linkedin.com/in/iryna-trynkal-41542311a" },
  { media: "Behance", url: "https://www.behance.net/iryna_stoliarova" },
];
