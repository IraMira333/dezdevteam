import { IconProps } from "@/src/types/IconsPropType";

export const IconStage3 = ({ className }: IconProps) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Third stage icon"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="3.5" stroke="url(#paint0_linear_21_336)" />
      <g clip-path="url(#clip0_21_336)">
        <path
          d="M25.7969 15.7041H19.028C18.1131 15.7041 17.3706 16.4466 17.3706 17.3615V31.6152H22.6743V30.9522H18.0336V17.3615C18.0336 16.8112 18.4778 16.3671 19.028 16.3671H25.3262V21.0078H29.9669V30.9522H28.641V31.6152H30.6299V20.5371L25.7969 15.7041ZM25.9891 16.8378L29.4962 20.3448H25.9891V16.8378ZM25.6576 24.3226C24.3781 24.3226 23.3373 25.3635 23.3373 26.643C23.3373 27.2728 23.5892 27.8496 24.0002 28.2672V31.6152L25.6576 30.3688L27.315 31.6152V28.2672C27.7261 27.8496 27.978 27.2728 27.978 26.643C27.978 25.3635 26.9372 24.3226 25.6576 24.3226ZM25.6576 24.9856C26.5725 24.9856 27.315 25.7281 27.315 26.643C27.315 27.5579 26.5725 28.3004 25.6576 28.3004C24.7428 28.3004 24.0002 27.5579 24.0002 26.643C24.0002 25.7281 24.7428 24.9856 25.6576 24.9856ZM25.6576 29.5468L24.6632 30.2893V28.738C24.9615 28.8838 25.2996 28.9634 25.6576 28.9634C26.0156 28.9634 26.3538 28.8838 26.6521 28.738V30.2893L25.6576 29.5468Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_21_336"
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#999999" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_21_336">
          <rect
            width="15.9111"
            height="15.9111"
            fill="white"
            transform="translate(16.0444 15.7041)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
