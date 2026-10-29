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

// -----------------------------
// TYPES
// -----------------------------
interface DashboardCardProps {
  title: string;
  value: string;
  sub: string;
}

interface AuditRowProps {
  id: string;
  product: string;
  revenue: string;
  fees: string;
  shipping: string;
  net: string;
  netColor: string;
}

// -----------------------------
// PAGE
// -----------------------------
export default function DashboardPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-body)" }}>
      
      {/* Greeting */}
      <div className="text-center">
        <Greeting
          merchantName="Kane"
          shopName="TrueROI Profit Guard"
          lastSync="Oct 7, 2026 — 4:55 PM"
        />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <DashboardCard title="Net Profit" value="$45,678.90" sub="+20% vs yesterday" />
        <DashboardCard title="Total Leaks Detected" value="2,405" sub="+5 new issues" />
        <DashboardCard title="Money Lost to Leaks" value="$10,353" sub="vs yesterday" />
        <DashboardCard title="Profit Margin" value="32%" sub="vs yesterday" />
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
                {["Order ID", "Product Name", "Revenue", "Fees", "Shipping", "True Net"].map((header) => (
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
              <AuditRow
                id="#1022"
                product="Profit Leak"
                revenue="$200.00"
                fees="$0.30"
                shipping="$100.00"
                net="-200.30"
                netColor="var(--tr-leak)"
              />

              <AuditRow
                id="#1016"
                product="The Profit-Killer Hoodie"
                revenue="$150.00"
                fees="$0.30"
                shipping="$100.00"
                net="49.70"
                netColor="var(--tr-profit)"
              />

              <AuditRow
                id="#1017"
                product="The Profit-Killer Hoodie"
                revenue="$80.00"
                fees="$0.30"
                shipping="$30.00"
                net="49.70"
                netColor="var(--tr-profit)"
              />

              <AuditRow
                id="#1022"
                product="Profit Leak"
                revenue="$200.00"
                fees="$0.30"
                shipping="$100.00"
                net="-200.30"
                netColor="var(--tr-leak)"
              />
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

// -----------------------------
// COMPONENTS
// -----------------------------
function DashboardCard({ title, value, sub }: DashboardCardProps) {
  return (
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
        {title}
      </h3>

      <p
        className="text-[28px] font-semibold mt-2"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--tr-text-primary)",
        }}
      >
        {value}
      </p>

      <p
        className="mt-1 text-sm"
        style={{ color: "var(--tr-text-secondary)" }}
      >
        {sub}
      </p>
    </div>
  );
}

function AuditRow({
  id,
  product,
  revenue,
  fees,
  shipping,
  net,
  netColor,
}: AuditRowProps) {
  return (
    <tr style={{ borderBottom: "1px solid var(--tr-border)" }}>
      <td className="py-3 px-2">{id}</td>
      <td className="py-3 px-2">{product}</td>
      <td className="py-3 px-2">{revenue}</td>
      <td className="py-3 px-2">{fees}</td>
      <td className="py-3 px-2">{shipping}</td>
      <td
        className="py-3 px-2 font-semibold"
        style={{ color: netColor }}
      >
        {net}
      </td>
    </tr>
  );
}
