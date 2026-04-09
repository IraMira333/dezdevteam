import Image from "next/image";
import { useTranslations } from "next-intl";

import { projectsData } from "../assets/projectsData";
import { technologiesList } from "../assets/technologies";
import { Subtitle } from "../shared/Subtitle";

export const Clients = () => {
  const t = useTranslations("HomePage");
  const servicesList = [
    t("service1"),
    t("service2"),
    t("service3"),
    t("service4"),
    t("service5"),
    t("service6"),
    t("service7"),
    t("service8"),
  ];

  return (
    <section className="min-h-[calc(100vh-77px)] w-full overflow-hidden bg-[url('/bgimages/bg-clients.jpg')] bg-cover bg-center px-4 py-17.5">
      <div className="tab:max-w-full tab:w-2/3 tab:ml-auto tab:mr-0 mx-auto max-w-90">
        <Subtitle text={t("ourClientsTitle")} dark className="mb-6" />
        <ul className="border-black0a/20 tab:max-w-150 tab:w-full mb-8 grid grid-cols-3 border-[0.5px]">
          {projectsData.map((logo) => (
            <li
              key={logo.link}
              className="border-black0a/20 tab:aspect-20/14 flex aspect-square items-center justify-center border-[0.5px] p-3"
            >
              <Image
                src={logo.icon}
                alt={`${logo.en.title} logo`}
                className="tab:h-5 h-5 w-auto object-contain"
                width={100}
                height={23}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="tab:max-w-full mx-auto max-w-90">
        <div className="bg-grey33 mb-8 h-px w-full" />
        <div className="tab:max-w-full tab:w-2/3 tab:mr-0 tab:flex tab:gap-3 mx-auto">
          <div className="tab:mb-0 tab:w-1/2 mb-8">
            <Subtitle text={t("servicesTitle")} dark className="mb-5" />
            <ul className="flex flex-col gap-3">
              {servicesList.map((service) => (
                <li key={service} className="text-black0a text-base leading-[130%] tracking-[0%]">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="tab:w-1/2">
            <Subtitle text={t("technTitle")} dark className="mb-6" />
            <ul className="flex flex-wrap gap-3">
              {technologiesList.map((technology) => (
                <li
                  key={technology}
                  className="text-black0a border-grey33 w-fit rounded-xl border px-4 py-2 leading-[100%] font-light tracking-[0%]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
