"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { HowWeWorkType } from "../../assets/dataLists";
import { NextButton, PrevButton, usePrevNextButtons } from "../../shared/slider/CarouselButtons";

export const StagesSlider = ({ list }: { list: HowWeWorkType[] }) => {
  const options: EmblaOptionsType = {
    loop: true,
    align: "start",
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div className="embla tab:hidden mb-8 min-w-full px-0">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {list.map((content, ind) => (
            <div key={ind} className="embla__slide flex-[0_0_100%] px-0.5">
              {content.title}
            </div>
          ))}
        </div>
        <div className="embla__controls tab:absolute tab:bottom-0 pc:bottom-3.5 tab:right-0 mt-4">
          <div className="embla__buttons mx-auto flex max-w-75 justify-between gap-4 text-black">
            <PrevButton black onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

            <NextButton black onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </div>
  );
};
