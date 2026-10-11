"use client";

import Greeting from "../../components/Greeting";
import MetricCard from "../../components/MetricCard";
import ProfitLeakChart from "../../components/ProfitLeakChart";

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
    <>
      <Greeting
        merchantName="Kane"
        shopName="TrueROI Profit Guard"
        lastSync="Oct 7, 2026 — 4:55 PM"
        status="synced"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard title="Revenue" value="$45,678" trend="up" />
        <MetricCard title="Fees" value="$6,540" trend="down" />
        <MetricCard title="Shipping" value="$3,210" trend="down" />
        <MetricCard title="Net Profit" value="$35,928" trend="up" />
        <MetricCard title="Profit Margin" value="32%" trend="up" />
      </div>

      <ProfitLeakChart data={chartData} />
    </>
  );
}
