// app/api/dashboard/route.ts
type DashboardMetrics = {
  revenue: number;
  fees: number;
  shipping: number;
  net: number;
};

type LeakSummary = {
  totalLeaks: number;
  leakTypes: Record<string, number>;
};

type ProfitEngineResult = {
  score: number;
  grade: "A" | "B" | "C" | "D";
};

type DashboardResponse = {
  metrics: DashboardMetrics;
  leaks: LeakSummary;
  profitEngine: ProfitEngineResult;
};

export async function GET() {
  try {
    // Fetch raw orders from your existing backend
    const res = await fetch(
      "https://trueroi-backend-production.up.railway.app/orders"
    );

    const orders: {
      revenue: number;
      fees: number;
      shipping: number;
      net: number;
      leaks?: string[];
    }[] = await res.json();

    // Aggregated metrics
    const metrics: DashboardMetrics = orders.reduce(
      (acc, order) => {
        acc.revenue += order.revenue ?? 0;
        acc.fees += order.fees ?? 0;
        acc.shipping += order.shipping ?? 0;
        acc.net += order.net ?? 0;
        return acc;
      },
      { revenue: 0, fees: 0, shipping: 0, net: 0 }
    );

    // Leak summary
    const leakTypes: Record<string, number> = {};
    let totalLeaks = 0;

    for (const order of orders) {
      if (!order.leaks) continue;
      for (const leak of order.leaks) {
        totalLeaks += 1;
        leakTypes[leak] = (leakTypes[leak] || 0) + 1;
      }
    }

    const leaks: LeakSummary = {
      totalLeaks,
      leakTypes,
    };

    // Simple profit engine result (placeholder logic)
    const profitEngine: ProfitEngineResult = {
      score: metrics.net > 0 ? 85 : 40,
      grade: metrics.net > 0 ? "A" : "C",
    };

    const payload: DashboardResponse = {
      metrics,
      leaks,
      profitEngine,
    };

    return Response.json(payload);
  } catch (error) {
    return Response.json(
      { error: "Failed to load dashboard data" },
      { status: 500 }
    );
  }
}
