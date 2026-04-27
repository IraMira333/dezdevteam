"use client";
import { IconUp } from "./icons/IconUp";

export const UpButton = ({ className, text }: { className?: string; text: string }) => {
  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 800;
    const startTime = performance.now();

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (currentTime: number) => {
      const time = Math.min(1, (currentTime - startTime) / duration);
      const eased = ease(time);

      window.scrollTo(0, start * (1 - eased));

      if (time < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
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
