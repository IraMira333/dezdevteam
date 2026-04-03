import { IconProps } from "@/src/types/IconsPropType";

export const IconSliderArrow = ({ className }: IconProps) => {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="arrow icon"
    >
      <path
        d="M26.2881 64.0004H101.713M101.713 64.0004L64.0005 26.2881M101.713 64.0004L64.0005 101.713"
        stroke="currentColor"
        strokeWidth="5.95615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
