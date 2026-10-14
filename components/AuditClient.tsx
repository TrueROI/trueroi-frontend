"use client";

import { SyncBanner } from "./SyncBanner";
import MetricCard from "./MetricCard";
import { MetricCardSkeleton } from "./MetricCardSkeleton";

type DashboardData = {
  metrics: {
    revenue: number;
    net: number;
  };
  leaks: {
    totalLeaks: number;
  };
};

export default function AuditClient({
  data,
  error,
}: {
  data: DashboardData | null;
  error: boolean;
}) {
  const loading = false;
  const syncing = false;

  return (
    <>
      <SyncBanner syncing={syncing} />

      {error && (
        <div className="p-6 bg-red-50 border border-red-200 rounded-xl mb-6">
          <p className="text-red-600 font-medium mb-3">
            Something went wrong while loading dashboard metrics.
          </p>
          <button
            onClick={() => location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 mb-6">
        {loading || !data ? (
          <>
            <MetricCardSkeleton />
            <MetricCardSkeleton />
            <MetricCardSkeleton />
          </>
        ) : (
          <>
            <MetricCard
              title="Revenue"
              value={`$${data.metrics.revenue.toFixed(2)}`}
              trend={data.metrics.revenue > 0 ? "up" : null}
            />

            <MetricCard
              title="Net Profit"
              value={`$${data.metrics.net.toFixed(2)}`}
              trend={data.metrics.net > 0 ? "up" : "down"}
            />

            <MetricCard
              title="Total Leaks"
              value={`${data.leaks.totalLeaks}`}
              trend={data.leaks.totalLeaks > 0 ? "down" : null}
            />
          </>
        )}
      </div>
    </>
  );
}
