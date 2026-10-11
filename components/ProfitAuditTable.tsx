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

  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-200 animate-pulse rounded" />
        ))}
      </div>
    );
  }

  if (error) {
  return (
    <div className="p-6 bg-red-50 border border-red-200 rounded-xl">
      <p className="text-red-600 font-medium mb-3">
        Something went wrong while loading your audit data.
      </p>
      <button
        onClick={() => location.reload()}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Retry
      </button>
    </div>
  );
}


  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Profit Audit</h2>

      {/* FILTERS */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Leak Type</label>
          <select
            value={leakType}
            onChange={(e) => setLeakType(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="">All</option>
            <option value="HIGH_SHIPPING">High Shipping</option>
            <option value="LOW_MARGIN">Low Margin</option>
            <option value="REFUND">Refund</option>
            <option value="CHARGEBACK">Chargeback</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Min Profit</label>
          <input
            type="number"
            value={minProfit}
            onChange={(e) => setMinProfit(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Max Profit</label>
          <input
            type="number"
            value={maxProfit}
            onChange={(e) => setMaxProfit(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
      </div>

      {/* TABLE */}
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2 cursor-pointer" onClick={() => toggleSort("id")}>
              Order
            </th>
            <th className="py-2 cursor-pointer" onClick={() => toggleSort("revenue")}>
              Revenue
            </th>
            <th className="py-2 cursor-pointer" onClick={() => toggleSort("fees")}>
              Fees
            </th>
            <th className="py-2 cursor-pointer" onClick={() => toggleSort("shipping")}>
              Shipping
            </th>
            <th className="py-2 cursor-pointer" onClick={() => toggleSort("net")}>
              Net
            </th>
            <th className="py-2">Leaks</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b hover:bg-gray-50 cursor-pointer"
              onClick={() => (window.location.href = `/audit/${order.id}`)}
            >
              <td className="py-2">{order.id}</td>
              <td className="py-2">${order.revenue ?? "—"}</td>
              <td className="py-2">${order.fees ?? "—"}</td>
              <td className="py-2">${order.shipping ?? "—"}</td>
              <td className="py-2">${order.net ?? "—"}</td>

              <td className="py-2">
                {order.leaks?.length > 0 ? (
                  <span className="text-red-500">{order.leaks.join(", ")}</span>
                ) : (
                  <span className="text-green-500">None</span>
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
          className={`px-4 py-2 rounded ${
            page === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-800 text-white"
          }`}
        >
          Previous
        </button>

        <span className="text-gray-600">Page {page}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
