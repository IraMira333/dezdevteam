export const LogoName = () => {
  return (
    <div className="flex gap-1" aria-label="Form and Code Logo">
      <div className="border-whitef0 flex h-4 w-4 shrink-0 items-center justify-center border-2">
        <div className="bg-whitef0 h-1.5 w-1.5" />
      </div>
      <div className="flex flex-col leading-none font-bold tracking-tight uppercase">
        <span>Form</span>
        <span>Code</span>
      </div>
      <span className="text-sm font-bold">&</span>
    </div>
  );
};
