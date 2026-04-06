import { IconProps } from "@/src/types/IconsPropType";

export const IconStage2 = ({ className }: IconProps) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Second stage icon"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="3.5" stroke="url(#paint0_linear_21_324)" />
      <g clip-path="url(#clip0_21_324)">
        <path
          d="M25.7949 15.7041H19.028C18.1138 15.7041 17.3706 16.4479 17.3706 17.3615V31.6152H30.6299V20.5391L25.7949 15.7041ZM25.9891 16.8358L29.4982 20.3448H25.9891V16.8358ZM18.0336 30.9522V17.3615C18.0336 16.8132 18.4797 16.3671 19.028 16.3671H25.3262V21.0078H29.9669V30.9522H18.0336ZM20.0225 22.3337H27.978V22.9967H20.0225V22.3337ZM20.0225 24.9856H27.978V25.6485H20.0225V24.9856ZM27.3714 27.4525L27.9223 27.8217C27.8912 27.8681 27.144 28.964 25.6576 28.964C24.8263 28.964 24.3045 28.6776 23.8444 28.425C23.3996 28.1811 23.0151 27.9696 22.3601 27.9696H22.3455C21.2781 27.9749 20.6264 28.8228 20.6198 28.8308L20.0881 28.435C20.1219 28.3892 20.9354 27.3139 22.3408 27.3066H22.3587C23.1841 27.3066 23.7039 27.5917 24.1633 27.8436C24.6102 28.0889 24.9967 28.3011 25.6576 28.3011C26.78 28.3011 27.3482 27.4869 27.3714 27.4525Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_21_324"
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#999999" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_21_324">
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
