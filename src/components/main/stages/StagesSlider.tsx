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
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div className={`mb-8 min-w-full px-0 ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {list.map((content, ind) => (
            <div key={ind} className="">
              <StageCard data={content} />
            </div>
          ))}
        </div>

        <div className="text-whiteff relative mx-auto mt-4 flex h-22 w-37 justify-between gap-4 p-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <div className="bg-whiteff/50 absolute top-1/2 left-1/2 h-0.5 w-24 -translate-x-1/2 rotate-[-70deg]" />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};
