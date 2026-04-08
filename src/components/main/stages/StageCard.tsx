import { HowWeWorkType } from "../../assets/dataLists";

export const StageCard = ({ data }: { data: HowWeWorkType }) => {
  return (
    <div className="bg-black05 border-whiteff/20 flex h-83 w-75 flex-col justify-between border p-4">
      <div className="flex items-center justify-between gap-5">
        <h4 className="text-whiteff text-base uppercase">{data.title}</h4>
        <div>{data.icon}</div>
      </div>
      <p className="text-base">{data.description}</p>
    </div>
  );
};
