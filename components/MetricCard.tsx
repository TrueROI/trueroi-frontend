"use client";

import { ArrowUp, ArrowDown } from "lucide-react";

export default function MetricCard({
  title,
  value,
  trend,
  loading,
  error
}: {
  title: string;
  value: string;
  trend: "up" | "down" | null;
  loading?: boolean;
  error?: boolean;
}) {
  if (loading) {
    return (
      <div className="p-6 bg-white rounded-xl shadow animate-pulse">
        <div className="h-4 w-24 bg-gray-200 rounded mb-3"></div>
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-xl shadow">
        <p className="text-red-600 font-medium">Unable to load data</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow flex flex-col gap-2">
      <p className="text-gray-600 text-sm">{title}</p>

      <div className="flex items-center gap-2">
        <span className="text-2xl font-semibold">{value}</span>

        {trend === "up" && (
          <ArrowUp size={18} className="text-green-500" />
        )}
        {trend === "down" && (
          <ArrowDown size={18} className="text-red-500" />
        )}
      </div>
    </div>
  );
}
