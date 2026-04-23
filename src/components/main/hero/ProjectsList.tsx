"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { LocaleType } from "@/src/types/LocaleTypes";

import { ProjectsDataType } from "../../assets/projectsData";
import { IconArrow } from "../../shared/icons/IconArrow";
import { IconBullet } from "../../shared/icons/IconBullet";
import { MaskLink } from "../../shared/MaskLink";
import { ProjectImage } from "./ProjectImage";

export const ProjectsList = ({
  list,
  locale,
}: {
  list: ProjectsDataType[];
  locale: LocaleType;
}) => {
  const t = useTranslations("HomePage");
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const isTablet = window.innerWidth >= 768;

        const triggerLine = isTablet ? 220 : window.innerHeight * 0.35;
        let newIndex = 0;

        itemRefs.current.forEach((el, index) => {
          if (!el) return;

          const rect = el.getBoundingClientRect();

          if (rect.top <= triggerLine) {
            newIndex = index;
          }
        });

        setActiveIndex(newIndex);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const activeProject = list[activeIndex];

  return (
    <div id="projects" className="tab:flex tab:pb-16 tab:justify-between tab:pl-6 pc:pl-20">
      <ProjectImage title={activeProject.en.title} image={activeProject.image} />
      <div className="tab:w-[61%] tab:px-6 pc:pr-20 tab:mb-0 relative mb-26.5 px-4">
        <h2 className="text-grey88 mb-11 flex gap-2 leading-[130%] font-medium tracking-[1.4px] uppercase">
          <IconBullet className="h-3.5 w-3.5" />
          {t("ourProjects", { year: new Date().getFullYear() })}
        </h2>
        <ul className="flex w-full flex-col gap-6">
          {list.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.li
                key={project.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                layout
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className={`flex min-w-full flex-col gap-4 rounded-xl bg-linear-to-r from-[#FF4B2F] to-[#FF9148] pt-1 pb-px ${isActive ? "bg-linear-to-r from-[#FF4B2F] to-[#FF9148]" : "from-grey88 to-greyd9 bg-linear-to-r"}`}
              >
                <div className="bg-black06 tab:p-4 rounded-xl p-3">
                  <AnimatePresence initial={false}>
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.98,
                        height: isActive ? "auto" : 0,
                      }}
                      style={{ overflow: "hidden" }}
                      transition={{ duration: 0.4 }}
                      className="tab:hidden"
                    >
                      <div className="relative mx-auto mb-4 aspect-326/242 h-auto w-full max-w-111">
                        <Image
                          src={project.image}
                          alt={project[locale].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-1 right-1">
                          <MaskLink
                            link={project.link}
                            className="flex w-11! items-center justify-center"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="tab:flex-row-reverse mb-3 flex items-center justify-between gap-4">
                    <IconArrow className={`tab:block hidden ${isActive ? "text-accent" : ""}`} />
                    <h3 className="text-whitef0 text-2xl leading-[120%] font-medium">
                      {project[locale].title}
                    </h3>
                    <p>{project.year}</p>
                  </div>

                  <div className="">
                    <p className="text-base leading-[130%]">{project[locale].services}</p>
                    <ul className="mt-4 flex gap-1">
                      {project[locale].details.map((d) => (
                        <li key={d} className="border-grey33 w-fit rounded-md border px-2 py-1">
                          {d}
                        </li>
                      ))}
                    </ul>
                    {/* {project[locale].short && (
                      <AnimatePresence>
                        <motion.ul
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            x: isActive ? 0 : 20,
                            height: isActive ? "auto" : 0,
                          }}
                          style={{ overflow: "hidden" }}
                          transition={{ duration: 0.3 }}
                        >
                          {project[locale].short.map((d) => (
                            <li key={d} className=" ">
                              {d}
                            </li>
                          ))}
                        </motion.ul>
                      </AnimatePresence>
                    )} */}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
