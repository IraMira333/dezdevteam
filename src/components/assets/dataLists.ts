export type WeDoType = {
  title: string;
  forWhom: string | string[];
  includes: string;
  term: string;
};
export type WeDoListType = { uk: WeDoType; en: WeDoType };

export const weDoList: WeDoListType[] = [
  {
    uk: {
      title: "лендінг",
      forWhom: [
        "Експертів, що продають свої послуги",
        "Запуску продукту чи події",
        "Продажів курсу, наставництв",
      ],
      includes:
        "Розробку сайту під вашу цільову аудиторію і розкриття цінності вашого продукту чи послуги за допомогою дизайну та структури, що допоможе лідогенерації",
      term: "від 7 днів",
    },
    en: {
      title: "landing page",
      forWhom: [
        "Experts selling their services",
        "Product or event launches",
        "Selling courses or mentorship programs",
      ],
      includes:
        "Website development tailored to your target audience, focused on clearly communicating the value of your product or service through design and structure that drive lead generation",
      term: "from 7 days",
    },
  },
  {
    uk: {
      title: "корпоративний сайт",
      forWhom: ["Компаній, які хочуть презентувати свої послуги", "Агенств, клінік, салонів тощо"],
      includes:
        "Розробку структури сторінок сайту, які інформують про вашу діяльність, набір послуг, історію створення. Ми допоможемо вам розказати про ваш бізнес легко та зручно для вашої аудиторії",
      term: "від 15 днів",
    },
    en: {
      title: "corporate website",
      forWhom: [
        "Companies that want to showcase their services",
        "Agencies, clinics, salons, etc.",
      ],
      includes:
        "A well-structured website that clearly presents your business, services, and story. We help you communicate your brand in a simple, engaging, and user-friendly way",
      term: "from 15 days",
    },
  },
  {
    uk: {
      title: "Покращення сайту",
      forWhom: "Вас, якщо ваш сайт не приносить бажаних результатів",
      includes:
        "Оновлення візуалу, оптимізація структури та навігації для зручності користувачів. Розширення або доопрацювання функціоналу, виправлення технічних помилок, перенесення сайту на інший домен чи хостинг.",
      term: "від 1 дня",
    },
    en: {
      title: "website improvement",
      forWhom: "For you if your website is not delivering the desired results",
      includes:
        "Visual redesign, optimization of structure and navigation for better usability. Feature enhancements or improvements, fixing technical issues, and migrating the website to another domain or hosting.",
      term: "from 1 day",
    },
  },
];

export const cubeList = {
  uk: {
    list: [
      "нас об’єднує глибокее творче натхнення, любов до співпраці та прагнення втілювати сміливі рішення для ваших ідей.",
      "Кожен проект адаптований до цілей вашого бренду, аудиторії та стилю — без шаблонів, тільки індивідуальний підхід.",
      "ми пропонуємо постійне обслуговування, оновлення дизайну та моніторинг продуктивності, щоб допомогти вашому проекту розвиватися в довгостроковій перспективі.",
      "ми працюємо у сферах креативу, технологій, лайфстайлу та стартапів, зосереджуючись на брендах, які цінують стратегію, чіткість та вплив дизайну.",
    ],
  },
  en: {
    list: [
      "what unites us is a deep creative drive, a love for collaboration, and a desire to bring bold ideas to life.",
      "each project is tailored to your brand’s goals, audience, and style — no templates, only a custom approach.",
      "we provide ongoing support, design updates, and performance monitoring to help your project grow in the long term.",
      "we work across creative, technology, lifestyle, and startup industries, focusing on brands that value strategy, clarity, and impactful design.",
    ],
  },
};

export type HowWeWorkType = {
  title: string;
  description: string;
};

export const howWeWorkList: { uk: HowWeWorkType[]; en: HowWeWorkType[] } = {
  uk: [
    {
      title: "Ознайомча зустріч",
      description:
        "Збір інформації по цілям і задачам бізнесу, наявним матеріалам, очікувань по термінам.",
    },
    {
      title: "Стратегія та дослідження",
      description:
        "Ми починаємо з розробки індивідуальних стратегій та проведення глибоких досліджень для виявлення важливих інсайтів. Це створює надійний план дій для досягнення значних, вимірюваних результатів.",
    },
    {
      title: "Дизайн і прототип",
      description:
        "Ми перетворюємо ідеї на привабливі дизайни та функціональні прототипи, які втілюють вашу візію в життя. Такий підхід забезпечує безперебійну співпрацю та ранню валідацію.",
    },
    {
      title: "розробка, тестування та оптимізація",
      description:
        "Ми розробляємо надійні рішення, проводимо ретельне тестування та налагоджуємо роботу для досягнення максимальної продуктивності. ",
    },
    {
      title: "Запуск проєкту та підтримка",
      description:
        "Ми запускаємо проект з точністю і надаємо постійну підтримку, щоб допомогти вашому продукту розвиватися. Завдяки глибокому розумінню ваших цілей і користувачів, ми забезпечуємо швидкі і тривалі результати.",
    },
  ],
  en: [
    {
      title: "Discovery Meeting",
      description:
        "We gather information about your business goals and objectives, existing materials, and expectations regarding timelines.",
    },
    {
      title: "Strategy & Research",
      description:
        "We start by developing tailored strategies and conducting in-depth research to uncover key insights. This creates a solid action plan for achieving meaningful, measurable results.",
    },
    {
      title: "Design & Prototyping",
      description:
        "We transform ideas into engaging designs and functional prototypes that bring your vision to life. This approach ensures smooth collaboration and early validation.",
    },
    {
      title: "Development, Testing & Optimization",
      description:
        "We build robust solutions, conduct thorough testing, and fine-tune performance to ensure optimal results.",
    },
    {
      title: "Launch & Support",
      description:
        "We launch your project with precision and provide ongoing support to help your product grow. With a deep understanding of your goals and users, we deliver fast and long-lasting results.",
    },
  ],
};
