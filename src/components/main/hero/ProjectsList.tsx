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

export const ProjectsList = ({
  list,
  locale,
}: {
  list: ProjectsDataType[];
  locale: LocaleType;
}) => {
  const t = useTranslations("HomePage");
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndexRef = useRef(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const center = window.innerHeight / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;
        const DEAD_ZONE = 140;

        itemRefs.current.forEach((el, index) => {
          if (!el) return;

          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;

          const distance = Math.abs(center - elCenter);
          if (distance < DEAD_ZONE) {
            closestIndex = index;
            closestDistance = 0;
            return;
          }
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        if (closestIndex !== lastIndexRef.current) {
          lastIndexRef.current = closestIndex;

          setTimeout(() => {
            setActiveIndex(closestIndex);
          }, 120);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mb-26.5 px-4">
      <h2 className="text-grey88 mb-11 flex gap-2 leading-[130%] font-medium tracking-[1.4px] uppercase">
        <IconBullet className="h-3.5 w-3.5" />
        {t("ourProjects", { year: new Date().getFullYear() })}
      </h2>
      <ul className="flex w-full flex-col gap-3">
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
              className="bg-black06 flex min-h-42.5 min-w-full flex-col gap-4 p-3"
            >
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="image"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden"
                  >
                    <div className="relative mx-auto aspect-326/242 h-auto w-full max-w-111">
                      <Image
                        src={project.image}
                        alt={project[locale].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center justify-between gap-4">
                <h3 className="text-whitef0 text-2xl leading-[120%] font-medium">
                  {project[locale].title}
                </h3>
                <p>{project.year}</p>
              </div>

              <div className="flex justify-between gap-4">
                <motion.p
                  layout
                  className="text-base leading-[130%]"
                  transition={{ duration: 0.4 }}
                  animate={{
                    width: isActive ? "58.5%" : "100%",
                  }}
                >
                  {project[locale].services}
                </motion.p>

                <AnimatePresence>
                  {isActive && (
                    <motion.ul
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex w-[40%] flex-col gap-1 text-right"
                    >
                      {project[locale].details.map((d) => (
                        <li
                          key={d}
                          className="border-grey33 ml-auto w-fit rounded-md border px-2 py-1"
                        >
                          {d}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <motion.div transition={{ duration: 0.3 }}>
                {isActive ? (
                  <MaskLink text={t("projectDetails")} link={project.link} white />
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-whiteff flex w-fit items-center py-3 text-sm font-bold uppercase underline"
                  >
                    {t("projectDetails")}
                    <IconArrow className="ml-2 h-5 w-5 stroke-2" />
                  </a>
                )}
              </motion.div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
