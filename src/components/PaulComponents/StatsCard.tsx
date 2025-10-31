interface StatsCardProps {
  label: string;
  value: string;

}

const StatsCard = ({ label, value, }: StatsCardProps) => {
  

  return (
    <div className="p-4 border border-secondary300 rounded-xl flex flex-col  gap-1 items-center  ">
      <div className={'text-3xl font-bold '}>{value}</div>
      <div className="text-sm text-black/40">{label}</div>
    </div>
  );
};

export default StatsCard;
