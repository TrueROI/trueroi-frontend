import { SyncBanner } from "@/components/SyncBanner";
import MetricCard from "@/components/MetricCard";
import { MetricCardSkeleton } from "@/components/MetricCardSkeleton";

async function getDashboard() {
  const res = await fetch("http://localhost:3000/api/dashboard", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load dashboard");
  }

  return res.json();
}

export default async function AuditPage() {
  let data: any = null;
  let error = false;

  try {
    data = await getDashboard();
  } catch {
    error = true;
  }

  const loading = false; // later: wire to suspense or SWR
  const syncing = false; // later: wire to backend sync status

  return (
    <>
      {/* Syncing Banner */}
      <SyncBanner syncing={syncing} />

      {/* Error Fallback (local) */}
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

      {/* Metric Cards */}
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

      {/* Rest of page content goes here */}
    </>
  );
}
