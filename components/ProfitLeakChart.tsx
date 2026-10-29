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
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        
        {/* Axis Colors */}
        <XAxis 
          dataKey="date" 
          stroke="var(--tr-text-secondary)" 
        />
        <YAxis 
          stroke="var(--tr-text-secondary)" 
        />

        {/* Tooltip */}
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--tr-surface)",
            border: "1px solid var(--tr-border)",
            borderRadius: "8px",
            color: "var(--tr-text-primary)",
            fontFamily: "var(--font-body)"
          }}
        />

        <Legend />

        {/* Profit Line */}
        <Line
          type="monotone"
          dataKey="profit"
          stroke="var(--tr-profit)"
          strokeWidth={3}
          dot={false}
        />

        {/* Leak Line */}
        <Line
          type="monotone"
          dataKey="leaks"
          stroke="var(--tr-leak)"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
