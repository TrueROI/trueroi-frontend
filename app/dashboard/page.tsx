"use client";

import Greeting from "../../components/Greeting";
import dynamic from "next/dynamic";

// Load chart client-side only
const ProfitLeakChart = dynamic(
  () => import("../../components/ProfitLeakChart"),
  { ssr: false }
);

// Example chart data
const chartData = [
  { date: "Oct 1", profit: 3200, leaks: 400 },
  { date: "Oct 2", profit: 3500, leaks: 380 },
  { date: "Oct 3", profit: 2900, leaks: 500 },
  { date: "Oct 4", profit: 4100, leaks: 300 },
  { date: "Oct 5", profit: 3800, leaks: 450 },
  { date: "Oct 6", profit: 4200, leaks: 320 },
  { date: "Oct 7", profit: 4600, leaks: 280 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-14">

      {/* Centered Greeting */}
      <div className="text-center">
        <Greeting
          merchantName="Kane"
          shopName="TrueROI Profit Guard"
          lastSync="Oct 7, 2026 — 4:55 PM"
        />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* ... unchanged KPI cards ... */}
      </div>

      {/* Chart Section */}
      <div className="bg-white border border-[#E3E5EC] rounded-xl p-8">
        <h3
          className="text-[20px] font-semibold text-[#000000] mb-6"
          style={{
            fontFamily: "var(--font-noto-serif)",
            letterSpacing: "-0.01em",
            lineHeight: "150%",
          }}
        >
          Profit vs Leaks Over Time
        </h3>

        <div className="h-72">
          <ProfitLeakChart data={chartData} />
        </div>
      </div>

    </div>
  );
}
