export const MaskButton = ({ text, white }: { text: string; white?: boolean }) => {
  return (
    <div className={`border-whitef0 relative h-11 w-47.5 overflow-hidden border`}>
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
        className={`mask-btn h-full w-full text-sm font-bold uppercase ${
          white ? "mask-light text-black06" : "mask-dark text-whitef0"
        }`}
      >
        {text}
      </button>
    </div>
  );
};
