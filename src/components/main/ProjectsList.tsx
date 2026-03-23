import Image from "next/image";

import { LocaleType } from "@/src/types/LocaleTypes";

import { ProjectsDataType } from "../assets/projectsData";

export const ProjectsList = ({
  list,
  locale,
}: {
  list: ProjectsDataType[];
  locale: LocaleType;
}) => {
  return (
    <div className="mb-26.5">
      <h2 className="text-whiteff mb-10 text-3xl font-bold">Наші проєкти</h2>
      <ul className="flex flex-col gap-8">
        {list.map((project) => (
          <li key={project.id} className="flex gap-4">
            <div className="relative h-20 w-20 shrink-0">
              <Image
                src={project.image}
                alt={project[locale].title}
                className="h-full w-full object-cover"
                fill
              />
            </div>
            <div>
              <p className="text-whiteff text-sm uppercase">{project.year}</p>
              <h3 className="text-whitef0 text-lg font-medium uppercase">
                {project[locale].title}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
