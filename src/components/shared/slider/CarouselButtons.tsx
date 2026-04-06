"use client";
import { EmblaCarouselType } from "embla-carousel";
import React, { PropsWithChildren, useCallback, useEffect, useState } from "react";

import { IconArrow } from "../icons/IconArrow";

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
  const { disabled, black = false, ...restProps } = props;

  return (
    <button
      disabled={disabled}
      aria-label="show previous slide button"
      className={`embla__button--prev group tab:h-11 tab:border tab:w-11 relative flex h-6 w-6 rotate-180 items-center justify-center rounded transition-colors duration-300 ease-in-out hover:border-black hover:bg-black active:border-black active:bg-black disabled:pointer-events-none disabled:opacity-60 ${black ? "border-black" : "bg-white-100/10 border-ivory"}`}
      type="button"
      {...restProps}
    >
      <IconArrow
        className={` ${black ? "group-hover:text-ivory group-active:text-ivory text-black" : "text-ivory"}`}
      />
    </button>
  );
};

export const NextButton: React.FC<ButtonType> = (props) => {
  const { disabled, black = false, ...restProps } = props;

  return (
    <button
      disabled={disabled}
      aria-label="show next slide button"
      className={`embla__button--prev group tab:h-11 tab:border tab:w-11 relative flex h-6 w-6 items-center justify-center rounded-sm transition-colors duration-300 ease-in-out hover:border hover:border-black hover:bg-black active:border active:border-black active:bg-black disabled:pointer-events-none disabled:opacity-60 ${black ? "border-black" : "bg-white-100/10 border-ivory"}`}
      type="button"
      {...restProps}
    >
      <IconArrow
        className={` ${black ? "group-hover:text-ivory group-active:text-ivory text-black" : "text-ivory"}`}
      />
    </button>
  );
};
