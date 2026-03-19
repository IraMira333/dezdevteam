export const MaskButton = ({ text }: { text: string }) => {
  return (
    <div className="border-whitef0 relative h-11 w-47.5 overflow-hidden border">
      <div className="bg-whitef0 absolute inset-0" />
      <span className="text-black06 pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-bold uppercase">
        {text}
      </span>

      <button className="mask-btn text-whitef0 h-full w-full text-sm font-bold uppercase">
        {text}
      </button>
    </div>
  );
};
