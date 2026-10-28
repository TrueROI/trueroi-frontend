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

        {/* Net Profit */}
        <div className="bg-[#F8F9FA] border border-[#E3E5EC] rounded-xl p-6">
          <h3 className="text-[20px] font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>
            Net Profit
          </h3>
          <p className="text-[28px] font-semibold mt-2 text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>
            $45,678.90
          </p>
          <p className="text-[#515569] mt-1 text-sm">+20% vs yesterday</p>
        </div>

        {/* Total Leaks Detected */}
        <div className="bg-[#F8F9FA] border border-[#E3E5EC] rounded-xl p-6">
          <h3 className="text-[20px] font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>
            Total Leaks Detected
          </h3>
          <p className="text-[28px] font-semibold mt-2 text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>
            2,405
          </p>
          <p className="text-[#515569] mt-1 text-sm">+5 new issues</p>
        </div>

        {/* Money Lost to Leaks */}
        <div className="bg-[#F8F9FA] border border-[#E3E5EC] rounded-xl p-6">
          <h3 className="text-[20px] font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>
            Money Lost to Leaks
          </h3>
          <p className="text-[28px] font-semibold mt-2 text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>
            $10,353
          </p>
          <p className="text-[#515569] mt-1 text-sm">vs yesterday</p>
        </div>

        {/* Profit Margin */}
        <div className="bg-[#F8F9FA] border border-[#E3E5EC] rounded-xl p-6">
          <h3 className="text-[20px] font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>
            Profit Margin
          </h3>
          <p className="text-[28px] font-semibold mt-2 text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>
            32%
          </p>
          <p className="text-[#515569] mt-1 text-sm">vs yesterday</p>
        </div>

      </div>

      {/* Chart Section */}
      <div className="bg-[#F8F9FA] border border-[#E3E5EC] rounded-xl p-8">
        <h3 className="text-[20px] font-semibold text-[#000000] mb-6" style={{ fontFamily: "var(--font-noto-serif)" }}>
          Profit vs Leaks Over Time
        </h3>

        <div className="h-72">
          <ProfitLeakChart data={chartData} />
        </div>
      </div>

      {/* Recent Profit Audits */}
      <div className="bg-[#F8F9FA] border border-[#E3E5EC] rounded-xl p-8">
        <h3 className="text-[20px] font-semibold text-[#000000] mb-6" style={{ fontFamily: "var(--font-noto-serif)" }}>
          Recent Profit Audits
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-[#E3E5EC]">
                <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>Order ID</th>
                <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>Product Name</th>
                <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>Revenue</th>
                <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>Fees</th>
                <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>Shipping</th>
                <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>True Net</th>
              </tr>
            </thead>

            <tbody className="text-[#515569]">
              <tr className="border-b border-[#E3E5EC]">
                <td className="py-3 px-2">#1022</td>
                <td className="py-3 px-2">Profit Leak</td>
                <td className="py-3 px-2">$200.00</td>
                <td className="py-3 px-2">$0.30</td>
                <td className="py-3 px-2">$100.00</td>
                <td className="py-3 px-2 text-red-600 font-semibold">-200.30</td>
              </tr>

              <tr className="border-b border-[#E3E5EC]">
                <td className="py-3 px-2">#1016</td>
                <td className="py-3 px-2">The Profit-Killer Hoodie</td>
                <td className="py-3 px-2">$150.00</td>
                <td className="py-3 px-2">$0.30</td>
                <td className="py-3 px-2">$100.00</td>
                <td className="py-3 px-2 text-green-600 font-semibold">49.70</td>
              </tr>

              <tr className="border-b border-[#E3E5EC]">
                <td className="py-3 px-2">#1017</td>
                <td className="py-3 px-2">The Profit-Killer Hoodie</td>
                <td className="py-3 px-2">$80.00</td>
                <td className="py-3 px-2">$0.30</td>
                <td className="py-3 px-2">$30.00</td>
                <td className="py-3 px-2 text-green-600 font-semibold">49.70</td>
              </tr>

              <tr>
                <td className="py-3 px-2">#1022</td>
                <td className="py-3 px-2">Profit Leak</td>
                <td className="py-3 px-2">$200.00</td>
                <td className="py-3 px-2">$0.30</td>
                <td className="py-3 px-2">$100.00</td>
                <td className="py-3 px-2 text-red-600 font-semibold">-200.30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
