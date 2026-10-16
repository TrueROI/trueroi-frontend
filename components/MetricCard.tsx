"use client";

import { ArrowUp, ArrowDown } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string;
  trend?: "up" | "down" | null;
  loading?: boolean;
  error?: boolean;
};

export default function MetricCard({
  title,
  value,
  trend,
  loading,
  error,
}: MetricCardProps) {
  // Loading skeleton
  if (loading) {
    return (
      <div className="bg-[#FFFFFF] rounded-xl shadow-sm p-6 border border-[#E0E0E0] animate-pulse">
        <div className="h-4 w-24 bg-[#E0E0E0] rounded mb-3"></div>
        <div className="h-6 w-32 bg-[#E3E5EC] rounded"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-red-50 rounded-xl shadow-sm p-6 border border-red-200">
        <p className="text-red-600 font-medium">Unable to load data</p>
      </div>
    );
  }

  // Normal card
  return (
    <div className="bg-[#FFFFFF] rounded-xl shadow-sm p-6 border border-[#E0E0E0] flex flex-col gap-2">
      <p className="text-sm text-[#515569]">{title}</p>

      <div className="flex items-center gap-2">
        <span className="text-3xl font-semibold text-[#000000]">{value}</span>

        {trend === "up" && (
          <ArrowUp size={20} className="text-green-600" />
        )}

        {trend === "down" && (
          <ArrowDown size={20} className="text-red-600" />
        )}
      </div>
    </div>
  );
}
