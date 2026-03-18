export default function MaskButton() {
  return (
    <div className="relative mx-auto mt-20 h-12.5 w-25 overflow-hidden rounded-lg border border-black">
      <div className="absolute inset-0 bg-white" />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[11px] font-bold text-black">
        MASK3
      </span>

      <button className="mask-btn h-full w-full text-[11px] font-bold text-white">MASK3</button>
    </div>
  );
}
