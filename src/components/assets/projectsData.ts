export type ProjectType = {
  title: string;
  description: string;
  services: string;
  details: string[];
  short?: string[];
  done: string;
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
      title: "Британський Офтальмологічний Центр",
      description: "Офтальмалогічна клініка в Києві",
      done: "Редизайн сайту та повна міграція з WordPress",
      services:
        "Редизайн сайту та повна міграція з WordPress для офтальмологічної клініки. Проєкт включав розробку сучасного, зручного та адаптивного веб-сайту, який відображає професіоналізм клініки та її орієнтацію на пацієнтів. Основні завдання полягали в оновленні візуального стилю, покращенні навігації та оптимізації контенту для кращого сприйняття інформації про послуги та спеціалістів клініки. ",
      details: ["Корпоративний Сайт", "Редизайн", "Sanity CMS"],
    },
    en: {
      title: "British Ophthalmological Center",
      description: "Ophthalmology clinic in Kyiv",
      done: "Website redesign and full WordPress migration",
      services:
        "Website redesign and full migration from WordPress for an ophthalmology clinic. The project included the development of a modern, user-friendly, and responsive website that reflects the clinic’s professionalism and patient-centered approach. The main goals were to refresh the visual identity, improve navigation, and optimize content for clearer presentation of the clinic’s services and specialists.",
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
      services:
        "Дизайн та розробка лендінгу для студії відеомонтажу, що передає її творчий підхід і професійність через візуальну мову та структуру сайту. Основна мета — не просто презентувати послуги, а занурити користувача в атмосферу бренду, показати стиль робіт і викликати емоційний відгук. Сайт також виконує роль платформи для знайомства з портфоліо та швидкого зв’язку з монтажеркою.",
      details: ["Лендінг", "Оптимізація відео і зображень"],
      done: "Дизайн та розробка лендінгу",
      short: [
        "Це лендінг для студії відеомонтажу, що передає її творчий підхід і професійність через візуальну мову та структуру сайту. Основна мета — не просто презентувати послуги, а занурити користувача в атмосферу бренду, показати стиль робіт і викликати емоційний відгук. Сайт також виконує роль платформи для знайомства з портфоліо та швидкого зв’язку з монтажеркою.",
        "Проєкт поєднує продуману функціональність із виразним дизайном. Інтуїтивна навігація, FAQ, двомовність і прості способи контакту забезпечують зручний користувацький досвід, а візуальні рішення — від відео на першому екрані до анімацій і динамічного градієнта — підсилюють залучення та фокусують увагу на ключових елементах.",
        "Особливу увагу приділено демонстрації робіт: портфоліо оформлене у вигляді інтерактивних відеокарток, які дозволяють швидко переглядати різні приклади монтажу. У поєднанні з адаптивністю під усі пристрої та акцентом на деталях це створює цілісний, живий досвід взаємодії з брендом і спонукає користувача до дії.",
      ],
    },
    en: {
      title: "Willow Motion",
      description: "Video editing studio",
      services:
        "Landing page design and development for a video editing studio that communicates its creative approach and professionalism through visual language and site structure. The main goal is not just to present services, but to immerse users in the brand’s atmosphere, showcase the style of work, and create an emotional connection. The website also serves as a platform to explore the portfolio and quickly get in touch with the editor.",
      details: ["Landing Page", "Video and Image Optimization"],
      done: "Landing page design and development",
      short: [
        "This is a landing page for a video editing studio that communicates its creative approach and professionalism through visual language and site structure. The main goal is not just to present services, but to immerse users in the brand’s atmosphere, showcase the style of work, and create an emotional connection. The website also serves as a platform to explore the portfolio and quickly get in touch with the editor.",
        "The project combines thoughtful functionality with expressive design. Intuitive navigation, an FAQ section, bilingual support, and simple contact options ensure a smooth user experience, while visual elements — from the hero video to animations and dynamic gradients — enhance engagement and focus attention on key content.",
        "Special attention is given to showcasing the work: the portfolio is presented as interactive video cards that allow users to quickly browse different editing examples. Combined with full responsiveness and attention to detail, this creates a cohesive and immersive brand experience that encourages user interaction.",
      ],
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
      services:
        "Дизайн та розробка лендінгу для виробника безпілотних систем, який передає експертність команди та їхній бойовий досвід через візуальну подачу та структуру сайту. Основний акцент зроблено на надійності, технологічності та реальному застосуванні дронів у бойових умовах, що формує довіру до продукту та підсилює цінність бренду.",
      details: ["Лендінг", "3D анімація"],
      done: "Дизайн та розробка лендінгу",
      short: [
        "Це лендінг для виробника безпілотних систем, який передає експертність команди та їхній бойовий досвід через візуальну подачу та структуру сайту. Основний акцент зроблено на надійності, технологічності та реальному застосуванні дронів у бойових умовах, що формує довіру до продукту та підсилює цінність бренду.",
        "Сайт поєднує чітку інформаційну структуру з виразною візуальною складовою. Контент побудований навколо послуг, підходу до роботи та цінностей команди, а інтерактивні елементи — зокрема 3D-модель дрона, яка рухається під час скролу — створюють ефект присутності та занурення в продукт.",
        "Особливу увагу приділено демонстрації технологій і процесів: від виробництва FPV-дронів до інженерних рішень під конкретні задачі. У поєднанні з динамікою, анімаціями та акцентами на ключових меседжах це формує цілісний, сучасний досвід взаємодії, який підкреслює інноваційність і практичну цінність продукту.",
      ],
    },
    en: {
      title: "ANVIL",
      description: "Drone and UAV manufacturing",
      services:
        "Design and development of a landing page for an unmanned systems manufacturer, conveying the team’s expertise and combat experience through visual presentation and site structure. The main focus is on reliability, technological strength, and real-world drone applications in combat conditions, building trust in the product and reinforcing the brand’s value.",
      details: ["Landing page", "3D animation"],
      done: "Design and development of a landing page",
      short: [
        "This is a landing page for an unmanned systems manufacturer that communicates the team’s expertise and combat experience through visual language and site structure. The main focus is on reliability, advanced technology, and real-world drone applications in combat conditions, building trust in the product and strengthening the brand’s value.",
        "The website combines a clear informational structure with a strong visual component. The content is built around services, workflow, and team values, while interactive elements — including a 3D drone model that moves during scroll — create a sense of presence and immersion into the product.",
        "Special attention is given to showcasing technologies and processes: from FPV drone manufacturing to engineering solutions tailored to specific tasks. Combined with dynamic interactions, animations, and emphasis on key messages, this creates a cohesive and modern user experience that highlights innovation and practical value.",
      ],
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
      services:
        "Дизайн та розробка сайту для виробника та дистриб’ютора протезно-ортопедичних виробів, який фокусується на відновленні якості життя, свободи руху та незалежності пацієнтів. Акцент зроблено на доступності послуг, зрозумілій навігації та можливості отримати консультацію або розпочати процес протезування.",
      short: [
        "Це лендінг для виробника та дистриб’ютора протезно-ортопедичних виробів, який фокусується на відновленні якості життя, свободи руху та незалежності пацієнтів. Сайт підкреслює експертність компанії, сучасні технології та участь у державних програмах протезування, формуючи довіру до бренду та його соціальної місії.",
        "Платформа поєднує чітку структуру з інформативною подачею: користувач може швидко ознайомитися з напрямами діяльності — протезуванням, ортезуванням і постачанням комплектуючих. Акцент зроблено на доступності послуг, зрозумілій навігації та можливості отримати консультацію або розпочати процес протезування.",
        "Особливу увагу приділено змісту та користувацькому досвіду: сайт пояснює складні медичні процеси простою мовою, демонструє рішення для різних потреб і підкреслює індивідуальний підхід до кожного пацієнта. У результаті формується зрозумілий, довірливий і соціально значущий цифровий продукт.",
      ],
      done: "Дизайн та розробка сайту",
      details: ["Корпоративний Сайт", "Sanity CMS"],
    },
    en: {
      title: "BEST-ORTHO",
      description: "Prosthetics and orthotics services",
      services:
        "Design and development of a website for a manufacturer and distributor of prosthetic and orthotic products, focused on restoring quality of life, freedom of movement, and patient independence. The emphasis is on service accessibility, clear navigation, and the ability to easily get a consultation or start the prosthetics process.",
      short: [
        "This is a landing page for a manufacturer and distributor of prosthetic and orthotic products, focused on restoring quality of life, freedom of movement, and patient independence. The website highlights the company’s expertise, modern technologies, and participation in government prosthetics programs, building trust in the brand and its social mission.",
        "The platform combines a clear structure with informative content: users can quickly explore key areas such as prosthetics, orthotics, and component supply. The focus is on service accessibility, intuitive navigation, and the ability to get a consultation or begin the prosthetics process.",
        "Special attention is given to content and user experience: the website explains complex medical processes in simple terms, presents solutions for different needs, and emphasizes an individual approach to each patient. As a result, it creates a clear, trustworthy, and socially impactful digital product.",
      ],
      done: "Design and development of a website",
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
      services:
        "Дизайн та розробка лендінгу для компанії, що спеціалізується на аерозйомці, картографії та лазерному скануванні, який передає технологічність процесів, масштаб проєктів і точність результатів через візуальну мову та структуру контенту. Основний акцент зроблено на складності інженерних рішень і професійності команди, що працює з даними різного рівня — від аерозйомки до створення цифрових карт.",
      short: [
        "Це лендінг для компанії, що спеціалізується на аерозйомці, картографії та лазерному скануванні. Ми спроєктували і розробили платформу, яка передає технологічність процесів, масштаб проєктів і точність результатів через візуальну мову та структуру контенту. Основний акцент зроблено на складності інженерних рішень і професійності команди, що працює з даними різного рівня — від аерозйомки до створення цифрових карт.",
        "Побудувано чітку інформаційну архітектуру, яка дозволяє користувачам швидко зрозуміти спектр послуг і технологій: аерофотозйомку, цифрову картографію та лазерне сканування. Особливу увагу приділили подачі складного технічного контенту — зробили його структурованим, візуально зрозумілим і легким для сприйняття.",
        "У дизайні ми підкреслено інженерний характер продукту через мінімалістичну стилістику, акценти на деталях і медіаконтент. Візуальні блоки, зображення обладнання та процесів, а також логічна побудова секцій формують цілісний досвід взаємодії, який демонструє точність, масштаб і технологічність рішень компанії.",
      ],
      done: "Дизайн та розробка лендінгу",
      details: ["Лендінг", "Створення корпоративної пошти", "Підтримка сайту"],
    },
    en: {
      title: "Mapium",
      description: "Aerial photography services",
      services:
        "Design and development of a landing page for a company specializing in aerial surveying, cartography, and laser scanning that communicates the technological nature of the processes, project scale, and precision of results through visual language and content structure. The main focus is on the complexity of engineering solutions and the professionalism of the team working with data of various levels — from aerial surveying to digital map creation.",
      short: [
        "This is a landing page for a company specializing in aerial surveying, cartography, and laser scanning. We designed and developed a platform that communicates the technological nature of the processes, project scale, and precision of results through visual language and content structure. The main focus is on complex engineering solutions and the professionalism of a team working with data at different levels — from aerial surveying to digital map creation.",
        "A clear information architecture was built to help users quickly understand the range of services and technologies: aerial photography, digital mapping, and laser scanning. Special attention was given to presenting complex technical content in a structured, visually clear, and easily digestible way.",
        "In the design, we emphasized the engineering nature of the product through a minimalistic visual style, attention to detail, and media content. Visual blocks, equipment and process imagery, and a logical section structure create a cohesive experience that highlights the precision, scale, and technological strength of the company’s solutions.",
      ],
      done: "Design and development of a landing page",
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
      services:
        "Дизайн та розробка сайту для міграційного адвоката, спроєктований як структурована та довірча платформа для пояснення складних юридичних послуг простою і зрозумілою мовою. Основний фокус зроблено на чіткому донесенні експертизи команди, яка спеціалізується на міграційному праві, громадянстві та захисті прав клієнтів у взаємодії з державними органами.",
      short: [
        "Це сайт міграційного адвоката, спроєктований як структурована та довірча платформа для пояснення складних юридичних послуг простою і зрозумілою мовою. Основний фокус зроблено на чіткому донесенні експертизи команди, яка спеціалізується на міграційному праві, громадянстві та захисті прав клієнтів у взаємодії з державними органами.",
        "Інформаційна архітектура побудована так, щоб користувач швидко знаходив потрібні сценарії звернення — від отримання дозволів на проживання до оскарження рішень міграційної служби. Контент поділено на логічні блоки з акцентом на типові кейси клієнтів, що спрощує навігацію у складній юридичній тематиці.",
        "Візуальна система та подача контенту орієнтовані на довіру та ясність: мінімалістичний дизайн, акцент на текстовій експертизі, структуровані списки послуг і зрозумілі пояснення процесів формують відчуття професійності та прозорості. Сайт підсилює головну ідею бренду — захист прав клієнта через юридичну експертизу та практичний досвід.",
      ],
      done: "Дизайн та розробка корпоративного сайту",
      details: ["Корпоративний Сайт", "SEO Оптимізація", "Підтримка сайту"],
    },
    en: {
      title: "Project One",
      description: "Immigration lawyer services",
      services:
        "Design and development of a website for an immigration lawyer, structured as a clear and trustworthy platform for explaining complex legal services in simple and accessible language. The main focus is on clearly communicating the expertise of a team specializing in immigration law, citizenship, and client rights protection in interactions with government authorities.",
      short: [
        "This is a website for an immigration lawyer, designed as a structured and trustworthy platform for explaining complex legal services in simple and clear language. The main focus is on clearly communicating the expertise of a team specializing in immigration law, citizenship, and the protection of client rights in dealings with government authorities.",
        "The information architecture is designed so users can quickly find relevant legal scenarios — from residence permits to appeals against migration service decisions. Content is organized into logical blocks focused on typical client cases, making navigation through complex legal topics more accessible.",
        "The visual system and content presentation are focused on trust and clarity: a minimalist design, emphasis on textual expertise, structured service lists, and clear explanations of legal processes create a sense of professionalism and transparency. The website reinforces the core brand idea — protecting client rights through legal expertise and practical experience.",
      ],
      done: "Corporate website design and development",
      details: ["Corporate Website", "SEO Optimization", "Support"],
    },
  },
];
