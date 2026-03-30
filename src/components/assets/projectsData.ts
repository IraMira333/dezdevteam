export type ProjectType = {
  title: string;
  description: string;
  services: string;
  details: string[];
};

export type ProjectsDataType = {
  id: number;
  year: number;
  image: string;
  link: string;
  icon: string;
  uk: ProjectType;
  en: ProjectType;
};
//Add new projects to the top
export const projectsData: ProjectsDataType[] = [
  {
    id: 6,
    year: 2026,
    image: "/images/card-boc.jpg",
    link: "https://eyes.ua/",
    icon: "/icons/client-logo1.svg",
    uk: {
      title: "Британський Офтольмологічний Центр",
      description: "Офтальмологічна клініка в Києві",
      services: "Редизайн сайту та повна міграція з WordPress для офтальмологічної клініки",
      details: ["Корпоративний Сайт", "Редизайн", "Sanity CMS"],
    },
    en: {
      title: "British Ophthalmological Center",
      description: "Ophthalmology clinic in Kyiv",
      services: "Website redesign and full WordPress migration for an ophthalmology clinic",
      details: ["Corporate Website", "Redesign", "Sanity CMS"],
    },
  },
  {
    id: 5,
    year: 2025,
    image: "/images/card-willow.jpg",
    link: "https://willow-motion.space/",
    icon: "/icons/client-logo3.svg",
    uk: {
      title: "Willow Motion",
      description: "Студія відеомонтажу",
      services: "Дизайн та розробка лендінгу для студії відеомонтажу",
      details: ["Лендінг", "Оптимізація відео і зображень"],
    },
    en: {
      title: "Willow Motion",
      description: "Video editing studio",
      services: "Landing page design and development for a video editing studio",
      details: ["Landing Page", "Video and Image Optimization"],
    },
  },
  {
    id: 4,
    year: 2025,
    image: "/images/card-anvil.jpg",
    link: "https://anvil.cc",
    icon: "/icons/client-logo2.svg",
    uk: {
      title: "ANVIL",
      description: "Виробництво дронів і БПЛА",
      services: "Дизайн та розробка лендінгу для виробника дронів",
      details: ["Лендінг", "3D анімація"],
    },
    en: {
      title: "ANVIL",
      description: "Drone and UAV manufacturing",
      services: "Landing page design and development for a drone manufacturer",
      details: ["Landing Page", "3D Animation"],
    },
  },
  {
    id: 3,
    year: 2025,
    image: "/images/card-bestortho.jpg",
    link: "https://bestortho.com.ua/",
    icon: "/icons/client-logo5.svg",
    uk: {
      title: "Бест-Орто",
      description: "Виробництво протезів та ортезів",
      services: "Дизайн та розробка сайту для виробника протезів та ортезів",
      details: ["Корпоративний Сайт", "Sanity CMS"],
    },
    en: {
      title: "BEST-ORTHO",
      description: "Prosthetics and orthotics services",
      services: "Website design and development for a prosthetics and orthotics company",
      details: ["Corporate Website", "Sanity CMS"],
    },
  },
  {
    id: 2,
    year: 2024,
    image: "/images/card-mapium.jpg",
    link: "https://www.mapium.aero/",
    icon: "/icons/client-logo4.svg",
    uk: {
      title: "Mapium",
      description: "Послуги з аерофотозйомки",
      services: "Дизайн та розробка лендінгу для послуг з аерофотозйомки",
      details: ["Лендінг", "Створення корпоративної пошти", "Підтримка сайту"],
    },
    en: {
      title: "Mapium",
      description: "Aerial photography services",
      services: "Design and development of a landing page for aerial photography services",
      details: ["Landing Page", "Business Email Setup", "Support"],
    },
  },
  {
    id: 1,
    year: 2024,
    image: "/images/card-protection.jpg",
    link: "https://protection.in.ua",
    icon: "/icons/client-logo6.svg",
    uk: {
      title: "Protection.in.ua",
      description: "Послуги міграційного адвоката",
      services: "Дизайн та розробка сайту для адвоката",
      details: ["Корпоративний Сайт", "SEO Оптимізація", "Підтримка сайту"],
    },
    en: {
      title: "Project One",
      description: "Immigration lawyer services",
      services: "Website design and development for a lawyer",
      details: ["Corporate Website", "SEO Optimization", "Support"],
    },
  },
];
