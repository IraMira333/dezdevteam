"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { HowWeWorkType } from "../../assets/dataLists";
import { NextButton, PrevButton, usePrevNextButtons } from "../../shared/slider/CarouselButtons";
import { StageCard } from "./StageCard";

export const StagesSlider = ({
  list,
  className,
}: {
  list: HowWeWorkType[];
  className?: string;
}) => {
  const options: EmblaOptionsType = {
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <>
      <div
        className={`tab:min-w-75 prepc:min-w-83 prepc:ml-[calc(50%-166px)] mt-3 mb-8 ml-[calc(50%-140px)] min-w-70 overflow-hidden px-0 ${className}`}
      >
        <div className="" ref={emblaRef}>
          <div className="tab:w-75 prepc:w-83 flex w-70">
            {list.map((content, ind) => (
              <div key={ind} className="">
                <StageCard data={content} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-whiteff tab:left-12 tab:bottom-44 absolute bottom-25 left-1/2 flex h-22 w-37 justify-between gap-4 p-2">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className="bg-whiteff/50 absolute top-1/2 left-1/2 h-0.5 w-24 -translate-x-1/2 rotate-[-70deg]" />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </>
  );
};
