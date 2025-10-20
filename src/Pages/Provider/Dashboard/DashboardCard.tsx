import React from "react";

type DashboardCardProps = {
  bgColor: string;
  iconColor: string;
  number: number;
  mainText: string;
  Icon: React.ElementType;
};

const DashboardCard = ({
  bgColor,
  iconColor,
  number,
  mainText,
  Icon,
}: DashboardCardProps) => {
  return (
    <div className="p-4 border border-secondary300 rounded-2xl flex  gap-2 items-center  flex-1">
      <div
        className={`${bgColor} ${iconColor} h-10 w-10 rounded-xl flex items-center justify-center`}
      >
        {Icon && <Icon />}
      </div>
      <div>
        <p className="font-bold text-2xl">{number}</p>
        <p className="capitalize text-sm text-secondary300">{mainText}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
