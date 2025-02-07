type Props = {
  label: string;
  value: string;
  className?: string;
};
const StatsOverview = ({ label, value, className = "" }: Props) => {
  return (
    <div className={`${className}`}>
      <span className="block font-bold text-2xl">{value}</span>
      <span className="block text-black/60 text-xs">{label}</span>
    </div>
  );
};

export default StatsOverview;
