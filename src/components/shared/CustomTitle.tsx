export const CustomTitleH1 = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={`text-whiteff flex gap-0.5 text-base leading-[130%] font-light ${className}`}>
      <h1 className="tracking-[0%] whitespace-pre-line uppercase">
        <span className="mr-4">{"{"} </span>
        {text}
      </h1>
      <span className="self-end">{"}"}</span>
    </div>
  );
};

export const CustomTitleH2 = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={`text-whiteff flex gap-0.5 text-base leading-[130%] font-light ${className}`}>
      <h2 className="tracking-[0%] whitespace-pre-line uppercase">
        <span className="mr-4">{"{"} </span>
        {text}
      </h2>
      <span className="self-end">{"}"}</span>
    </div>
  );
};
