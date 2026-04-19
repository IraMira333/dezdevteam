import { MouseEventHandler } from "react";

export const MaskButton = ({
  text,
  white,
  onClick,
}: {
  text: string;
  white?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={`border-whitef0 prepc:h-12 relative h-11 w-47.5 overflow-hidden border`}>
      {/* background */}
      <div className={`absolute inset-0 ${white ? "bg-black06" : "bg-whitef0"}`} />

      {/* visible text */}
      <span
        className={`pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-bold uppercase ${
          white ? "text-whitef0" : "text-black06"
        }`}
      >
        {text}
      </span>

      {/* mask button */}
      <button
        onClick={onClick}
        className={`mask-btn h-full w-full text-sm font-bold uppercase ${
          white ? "mask-light text-black06" : "mask-dark text-whitef0"
        }`}
      >
        {text}
      </button>
    </div>
  );
};
