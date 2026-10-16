type ChartCardProps = {
  children: React.ReactNode;
};

export default function ChartCard({ children }: ChartCardProps) {
  return (
    <div className="bg-[#FFFFFF] rounded-xl shadow-sm p-6 border border-[#E0E0E0]">
      {children}
    </div>
  );
}
