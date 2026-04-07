"use client";
import { EmblaCarouselType } from "embla-carousel";
import React, { PropsWithChildren, useCallback, useEffect, useState } from "react";

import { IconChevron } from "../icons/IconChevron";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => onSelect(emblaApi);

    emblaApi.on("reInit", handleSelect);
    emblaApi.on("select", handleSelect);

    handleSelect();

    return () => {
      emblaApi.off("reInit", handleSelect);
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type ButtonType = PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> & {
  black?: boolean;
};

export const PrevButton: React.FC<ButtonType> = (props) => {
  const { disabled, ...restProps } = props;

  return (
    <button
      disabled={disabled}
      aria-label="show previous slide button"
      className={`group disabled:text-grey88 hover:text-grey88 active:text-whiteff text-whiteff flex justify-center transition-colors duration-300 ease-in-out disabled:pointer-events-none`}
      type="button"
      {...restProps}
    >
      <IconChevron className={`shrink-0`} />
    </button>
  );
};

export const NextButton: React.FC<ButtonType> = (props) => {
  const { disabled, ...restProps } = props;

  return (
    <button
      disabled={disabled}
      aria-label="show next slide button"
      className={`group disabled:text-grey88 hover:text-grey88 active:text-whiteff text-whiteff flex rotate-180 items-baseline justify-center transition-colors duration-300 ease-in-out disabled:pointer-events-none`}
      type="button"
      {...restProps}
    >
      <IconChevron className={`shrink-0`} />
    </button>
  );
};
