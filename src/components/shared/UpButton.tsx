"use client";
import { IconUp } from "./icons/IconUp";

export const UpButton = ({ className, text }: { className?: string; text: string }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      aria-label="scroll to top button"
      className={`group relative flex h-12 w-24 items-center justify-between overflow-hidden ${className}`}
      onClick={scrollToTop}
    >
      <p className="text-whiteff leading-[150%]">{text}</p>
      <div className="arrow-wrapper">
        <IconUp className="arrow-icon h-12 w-12 transition-transform duration-300 ease-in-out" />
      </div>
    </button>
  );
};
