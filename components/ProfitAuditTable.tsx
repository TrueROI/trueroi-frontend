"use client";

import { useState, useEffect } from "react";

export default function ProfitAuditTable() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const limit = 10;

  const [sortBy, setSortBy] = useState("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  // Filters
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [leakType, setLeakType] = useState("");
  const [minProfit, setMinProfit] = useState("");
  const [maxProfit, setMaxProfit] = useState("");

  function toggleSort(column: string) {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDirection("desc");
    }
  }

  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true);

        const params = new URLSearchParams({
          page: String(page),
          limit: String(limit),
          sortBy,
          direction: sortDirection,
          startDate,
          endDate,
          leakType,
          minProfit,
          maxProfit,
        });

        const res = await fetch(`/api/orders?${params.toString()}`);
        const data = await res.json();
        setOrders(data.orders);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, [page, sortBy, sortDirection, startDate, endDate, leakType, minProfit, maxProfit]);

  /* ============================
     LOADING STATE
     ============================ */
  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="h-12 rounded animate-pulse"
            style={{ background: "var(--tr-border)" }}
          />
        ))}
      </div>
    );
  }

  /* ============================
     ERROR STATE
     ============================ */
  if (error) {
    return (
      <div
        className="p-6 rounded-xl"
        style={{
          background: "rgba(199, 106, 106, 0.1)",
          border: "1px solid var(--tr-leak)",
        }}
      >
        <p
          className="mb-3"
          style={{
            color: "var(--tr-leak)",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
          }}
        >
          Something went wrong while loading your audit data.
        </p>

        <button
          onClick={() => location.reload()}
          style={{
            background: "var(--tr-leak)",
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  /* ============================
     MAIN TABLE
     ============================ */
  return (
    <div
      className="p-6 rounded-xl shadow-sm"
      style={{
        background: "var(--tr-surface)",
        border: "1px solid var(--tr-border)",
      }}
    >
      <h2
        className="text-xl mb-4"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          color: "var(--tr-text-primary)",
        }}
      >
        Profit Audit
      </h2>

      {/* FILTERS */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Start Date", value: startDate, setter: setStartDate, type: "date" },
          { label: "End Date", value: endDate, setter: setEndDate, type: "date" },
          { label: "Leak Type", value: leakType, setter: setLeakType, type: "select" },
          { label: "Min Profit", value: minProfit, setter: setMinProfit, type: "number" },
          { label: "Max Profit", value: maxProfit, setter: setMaxProfit, type: "number" },
        ].map((field, i) => (
          <div key={i}>
            <label
              className="block text-sm mb-1"
              style={{
                color: "var(--tr-text-secondary)",
                fontFamily: "var(--font-body)",
              }}
            >
              {field.label}
            </label>

            {field.type === "select" ? (
              <select
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                className="border rounded px-3 py-2 w-full"
                style={{
                  background: "var(--tr-surface)",
                  borderColor: "var(--tr-border)",
                  color: "var(--tr-text-primary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <option value="">All</option>
                <option value="HIGH_SHIPPING">High Shipping</option>
                <option value="LOW_MARGIN">Low Margin</option>
                <option value="REFUND">Refund</option>
                <option value="CHARGEBACK">Chargeback</option>
              </select>
            ) : (
              <input
                type={field.type}
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                className="border rounded px-3 py-2 w-full"
                style={{
                  background: "var(--tr-surface)",
                  borderColor: "var(--tr-border)",
                  color: "var(--tr-text-primary)",
                  fontFamily: "var(--font-body)",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* TABLE */}
      <table className="w-full text-left">
        <thead>
          <tr style={{ borderBottom: "1px solid var(--tr-border)" }}>
            {[
              { key: "id", label: "Order" },
              { key: "revenue", label: "Revenue" },
              { key: "fees", label: "Fees" },
              { key: "shipping", label: "Shipping" },
              { key: "net", label: "Net" },
            ].map((col) => (
              <th
                key={col.key}
                className="py-2 cursor-pointer"
                onClick={() => toggleSort(col.key)}
                style={{
                  color: "var(--tr-text-secondary)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                }}
              >
                {col.label}
              </th>
            ))}

            <th
              className="py-2"
              style={{
                color: "var(--tr-text-secondary)",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
              }}
            >
              Leaks
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="cursor-pointer"
              style={{
                borderBottom: "1px solid var(--tr-border)",
              }}
              onClick={() => (window.location.href = `/audit/${order.id}`)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--tr-bg)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <td className="py-2">{order.id}</td>
              <td className="py-2">${order.revenue ?? "—"}</td>
              <td className="py-2">${order.fees ?? "—"}</td>
              <td className="py-2">${order.shipping ?? "—"}</td>
              <td className="py-2">${order.net ?? "—"}</td>

              <td className="py-2">
                {order.leaks?.length > 0 ? (
                  <span style={{ color: "var(--tr-leak)" }}>
                    {order.leaks.join(", ")}
                  </span>
                ) : (
                  <span style={{ color: "var(--tr-profit)" }}>None</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            background: page === 1 ? "var(--tr-border)" : "var(--tr-accent)",
            color: page === 1 ? "var(--tr-text-muted)" : "white",
            cursor: page === 1 ? "not-allowed" : "pointer",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
          }}
        >
          Previous
        </button>

        <span
          style={{
            color: "var(--tr-text-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          Page {page}
        </span>

        <button
          onClick={() => setPage((p) => p + 1)}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            background: "var(--tr-accent)",
            color: "white",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
