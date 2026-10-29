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
    <div className="space-y-10" style={{ fontFamily: "var(--font-body)" }}>

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
        <div
          className="rounded-xl p-6"
          style={{
            background: "var(--tr-surface)",
            border: "1px solid var(--tr-border)",
          }}
        >
          <h3
            className="text-[20px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              color: "var(--tr-text-primary)",
            }}
          >
            Net Profit
          </h3>

          <p
            className="text-[28px] font-semibold mt-2"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--tr-text-primary)",
            }}
          >
            $45,678.90
          </p>

          <p
            className="mt-1 text-sm"
            style={{ color: "var(--tr-text-secondary)" }}
          >
            +20% vs yesterday
          </p>
        </div>

        {/* Total Leaks Detected */}
        <div
          className="rounded-xl p-6"
          style={{
            background: "var(--tr-surface)",
            border: "1px solid var(--tr-border)",
          }}
        >
          <h3
            className="text-[20px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              color: "var(--tr-text-primary)",
            }}
          >
            Total Leaks Detected
          </h3>

          <p
            className="text-[28px] font-semibold mt-2"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--tr-text-primary)",
            }}
          >
            2,405
          </p>

          <p
            className="mt-1 text-sm"
            style={{ color: "var(--tr-text-secondary)" }}
          >
            +5 new issues
          </p>
        </div>

        {/* Money Lost to Leaks */}
        <div
          className="rounded-xl p-6"
          style={{
            background: "var(--tr-surface)",
            border: "1px solid var(--tr-border)",
          }}
        >
          <h3
            className="text-[20px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              color: "var(--tr-text-primary)",
            }}
          >
            Money Lost to Leaks
          </h3>

          <p
            className="text-[28px] font-semibold mt-2"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--tr-text-primary)",
            }}
          >
            $10,353
          </p>

          <p
            className="mt-1 text-sm"
            style={{ color: "var(--tr-text-secondary)" }}
          >
            vs yesterday
          </p>
        </div>

        {/* Profit Margin */}
        <div
          className="rounded-xl p-6"
          style={{
            background: "var(--tr-surface)",
            border: "1px solid var(--tr-border)",
          }}
        >
          <h3
            className="text-[20px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              color: "var(--tr-text-primary)",
            }}
          >
            Profit Margin
          </h3>

          <p
            className="text-[28px] font-semibold mt-2"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--tr-text-primary)",
            }}
          >
            32%
          </p>

          <p
            className="mt-1 text-sm"
            style={{ color: "var(--tr-text-secondary)" }}
          >
            vs yesterday
          </p>
        </div>

      </div>

      {/* Chart Section */}
      <div
        className="rounded-xl p-8"
        style={{
          background: "var(--tr-surface)",
          border: "1px solid var(--tr-border)",
        }}
      >
        <h3
          className="text-[20px] mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            color: "var(--tr-text-primary)",
          }}
        >
          Profit vs Leaks Over Time
        </h3>

        <div className="h-72">
          <ProfitLeakChart data={chartData} />
        </div>
      </div>

      {/* Recent Profit Audits */}
      <div
        className="rounded-xl p-8"
        style={{
          background: "var(--tr-surface)",
          border: "1px solid var(--tr-border)",
        }}
      >
        <h3
          className="text-[20px] mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            color: "var(--tr-text-primary)",
          }}
        >
          Recent Profit Audits
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--tr-border)" }}>
                {[
                  "Order ID",
                  "Product Name",
                  "Revenue",
                  "Fees",
                  "Shipping",
                  "True Net",
                ].map((header) => (
                  <th
                    key={header}
                    className="py-3 px-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      color: "var(--tr-text-primary)",
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody style={{ color: "var(--tr-text-secondary)" }}>
              <tr style={{ borderBottom: "1px solid var(--tr-border)" }}>
                <td className="py-3 px-2">#1022</td>
                <td className="py-3 px-2">Profit Leak</td>
                <td className="py-3 px-2">$200.00</td>
                <td className="py-3 px-2">$0.30</td>
                <td className="py-3 px-2">$100.00</td>
                <td
                  className="py-3 px-2 font-semibold"
                  style={{ color: "var(--tr-leak)" }}
                >
                  -200.30
                </td>
              </tr>

              <tr style={{ borderBottom: "1px solid var(--tr-border)" }}>
                <td className="py-3 px-2">#1016</td>
                <td className="py-3 px-2">The Profit-Killer Hoodie</td>
                <td className="py-3 px-2">$150.00</td>
                <td className="py-3 px-2">$0.30</td>
                <td className="py-3 px-2">$100.00</td>
                <td
                  className="py-3 px-2 font-semibold"
                  style={{ color: "var(--tr-profit)" }}
                >
                  49.70
                </td>
              </tr>

              <tr style={{ borderBottom: "1px solid var(--tr-border)" }}>
                <td className="py-3 px-2">#1017</td>
                <td className="py-3 px-2">The Profit-Killer Hoodie</td>
                <td className="py-3 px-2">$80.00</td>
                <td className="py-3 px-2">$0.30</td>
                <td className="py-3 px-2">$30.00</td>
                <td
                  className="py-3 px-2 font-semibold"
                  style={{ color: "var(--tr-profit)" }}
                >
                  49.70
                </td>
              </tr>

              <tr>
                <td className="py-3 px-2">#1022</td>
                <td className="py-3 px-2">Profit Leak</td>
                <td className="py-3 px-2">$200.00</td>
                <td className="py-3 px-2">$0.30</td>
                <td className="py-3 px-2">$100.00</td>
                <td
                  className="py-3 px-2 font-semibold"
                  style={{ color: "var(--tr-leak)" }}
                >
                  -200.30
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
