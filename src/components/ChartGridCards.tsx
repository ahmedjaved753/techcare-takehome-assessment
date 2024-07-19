import React from "react";

interface ChartGridCardsProps {
  index: number;
  icon: string;
  title: string;
  value: string | number;
  status: string;
  arrowIcon: string | undefined;
}

const ChartGridCards: React.FC<ChartGridCardsProps> = ({
  index,
  icon,
  title,
  value,
  status,
  arrowIcon,
}) => {
  const applyBgColor =
    index === 0 ? "bg-custom-lightBlue" : "bg-custom-lightPink";

  return (
    <div className={`${applyBgColor} p-[0.8rem] rounded-[0.6rem]`}>
      <img src={icon} alt="icon" className="w-[60px] h-[60px]" />
      <p className="font-semibold pt-3 text-sm">{title}</p>
      <h1 className="text-2xl font-bold pb-3">{value}</h1>
      <p className="text-sm flex items-center gap-2">
        <span>{index === 2 && <img src={arrowIcon} alt="arrow down" />}</span>
        {status}
      </p>
    </div>
  );
};

export default ChartGridCards;
