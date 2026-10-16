"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

type ProfitLeakChartProps = {
  data: { date: string; profit: number; leaks: number }[];
};

export default function ProfitLeakChart({ data }: ProfitLeakChartProps) {
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-sm border border-[#E0E0E0]">
      <h2 className="text-xl font-semibold text-[#000000] mb-4">
        Profit vs Leaks Over Time
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#515569" />
          <YAxis stroke="#515569" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E0E0E0",
              borderRadius: "8px"
            }}
          />
          <Legend />

          {/* Profit Line */}
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#22c55e"
            strokeWidth={3}
            dot={false}
          />

          {/* Leaks Line */}
          <Line
            type="monotone"
            dataKey="leaks"
            stroke="#ef4444"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
