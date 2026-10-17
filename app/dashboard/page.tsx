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
    <div className="space-y-10">

      {/* Header */}
      <div className="text-center">
        <h1
          className="text-[28px] font-semibold text-[#000000]"
          style={{
            fontFamily: "var(--font-noto-serif)",
            letterSpacing: "-0.01em",
            lineHeight: "150%",
          }}
        >
          TrueROI Dashboard
        </h1>
        <p className="text-[#828282] mt-2">
          This will become your real-time profit leak view.
        </p>
      </div>

      {/* Greeting */}
      <Greeting
        merchantName="Kane"
        shopName="TrueROI Profit Guard"
        lastSync="Oct 7, 2026 — 4:55 PM"
        status="synced"
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white border border-[#E3E5EC] rounded-xl p-6">
          <h3
            className="text-[20px] font-semibold text-[#000000]"
            style={{
              fontFamily: "var(--font-noto-serif)",
              letterSpacing: "-0.01em",
              lineHeight: "150%",
            }}
          >
            Net Profit
          </h3>
          <p
            className="text-[28px] font-semibold mt-2 text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            $45,678.90
          </p>
          <p className="text-[#515569] mt-1 text-sm">+20% vs yesterday</p>
        </div>

        <div className="bg-white border border-[#E3E5EC] rounded-xl p-6">
          <h3
            className="text-[20px] font-semibold text-[#000000]"
            style={{
              fontFamily: "var(--font-noto-serif)",
              letterSpacing: "-0.01em",
              lineHeight: "150%",
            }}
          >
            Total Leaks Detected
          </h3>
          <p
            className="text-[28px] font-semibold mt-2 text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            2,405
          </p>
          <p className="text-[#515569] mt-1 text-sm">+5 new issues</p>
        </div>

        <div className="bg-white border border-[#E3E5EC] rounded-xl p-6">
          <h3
            className="text-[20px] font-semibold text-[#000000]"
            style={{
              fontFamily: "var(--font-noto-serif)",
              letterSpacing: "-0.01em",
              lineHeight: "150%",
            }}
          >
            Money Lost to Leaks
          </h3>
          <p
            className="text-[28px] font-semibold mt-2 text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            $10,353
          </p>
          <p className="text-[#515569] mt-1 text-sm">vs yesterday</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white border border-[#E3E5EC] rounded-xl p-6">
        <h3
          className="text-[20px] font-semibold text-[#000000] mb-4"
          style={{
            fontFamily: "var(--font-noto-serif)",
            letterSpacing: "-0.01em",
            lineHeight: "150%",
          }}
        >
          Profit vs Leaks Over Time
        </h3>

        <div className="h-64">
          <ProfitLeakChart data={chartData} />
        </div>
      </div>

    </div>
  );
}
