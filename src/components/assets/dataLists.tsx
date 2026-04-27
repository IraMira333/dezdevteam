import { IconStage1 } from "../shared/icons/IconStage1";
import { IconStage2 } from "../shared/icons/IconStage2";
import { IconStage3 } from "../shared/icons/IconStage3";
import { IconStage4 } from "../shared/icons/IconStage4";
import { IconStage5 } from "../shared/icons/IconStage5";

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

//TODO: Дизайн і розробка цифрових продуктів для брендів, які прагнуть чіткості, естетики та результату.

export const cubeList = {
  uk: {
    list: [
      "Нас об’єднує глибока творча експертиза, досвід у дизайні та розробці цифрових продуктів, а також прагнення створювати ефективні та візуально сильні рішення для бізнесу.",
      "Кожен проєкт ми адаптуємо під цілі бренду, його аудиторію та ринкову позицію — без шаблонних рішень, лише індивідуальна стратегія та дизайн.",
      "Ми забезпечуємо повний цикл супроводу: від дизайну та розробки до підтримки, оновлень і оптимізації продуктивності, щоб продукт стабільно розвивався після запуску.",
      "Працюємо з компаніями у сферах креативу, технологій, лайфстайлу та стартапів, фокусуючись на брендах, які цінують стратегію, чіткість і впливовий дизайн.",
    ],
  },
  en: {
    list: [
      "We are united by deep creative expertise, experience in design and digital product development, and a drive to create effective and visually strong solutions for businesses.",
      "We tailor each project to the brand’s goals, audience, and market position — no templates, only a fully custom strategy and design approach.",
      "We provide full-cycle support: from design and development to maintenance, updates, and performance optimization, ensuring the product continues to grow after launch.",
      "We work with companies in creative, technology, lifestyle, and startup industries, focusing on brands that value strategy, clarity, and impactful design.",
    ],
  },
};

export type HowWeWorkType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const howWeWorkList: { uk: HowWeWorkType[]; en: HowWeWorkType[] } = {
  uk: [
    //
    {
      title: "Ознайомча зустріч",
      icon: <IconStage1 />,
      description:
        "Аналіз цілей бізнесу, наявних матеріалів та очікуваних термінів. Формуємо чітке розуміння задач проєкту.",
    },
    {
      title: "Стратегія та дослідження",
      icon: <IconStage2 />,
      description:
        "Глибоке дослідження ринку та аудиторії для формування ефективної стратегії та прийняття обґрунтованих дизайн-рішень.",
    },
    {
      title: "Дизайн і прототип",
      icon: <IconStage3 />,
      description:
        "Перетворення ідей у візуальні концепції та інтерактивні прототипи, що дозволяють швидко перевірити рішення ще до розробки.",
    },
    {
      title: "Розробка, тестування та оптимізація",
      icon: <IconStage4 />,
      description:
        "Реалізація продукту з фокусом на якість, продуктивність і стабільність. Повне тестування та технічна оптимізація перед запуском.",
    },
    {
      title: "Запуск проєкту та підтримка",
      icon: <IconStage5 />,
      description:
        "Запуск продукту та подальший супровід: оновлення, підтримка та розвиток відповідно до потреб бізнесу й користувачів.",
    },
  ],
  en: [
    //
    {
      title: "Discovery Meeting",
      icon: <IconStage1 />,
      description:
        "Analysis of business goals, existing materials, and expected timelines. We form a clear understanding of the project scope and objectives.",
    },
    {
      title: "Strategy & Research",
      icon: <IconStage2 />,
      description:
        "In-depth market and audience research to define an effective strategy and support informed design decisions.",
    },
    {
      title: "Design & Prototyping",
      icon: <IconStage3 />,
      description:
        "Transforming ideas into visual concepts and interactive prototypes that allow for early validation before development.",
    },
    {
      title: "Development, Testing & Optimization",
      icon: <IconStage4 />,
      description:
        "Building the product with a focus on quality, performance, and stability. Full testing and technical optimization before launch.",
    },
    {
      title: "Launch & Support",
      icon: <IconStage5 />,
      description:
        "Product launch and ongoing support: updates, maintenance, and continuous development aligned with business and user needs.",
    },
  ],
};
