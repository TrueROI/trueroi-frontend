// app/api/orders/route.ts

// Define the shape of an order coming from your backend
type Order = {
  id: string;
  date: string;
  revenue: number;
  fees: number;
  shipping: number;
  net: number;
  leaks?: string[];
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  // Pagination
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  // Sorting
  const sortBy = (searchParams.get("sortBy") || "date") as keyof Order;
  const direction = searchParams.get("direction") || "desc";

  // Filters
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const leakType = searchParams.get("leakType");
  const minProfit = searchParams.get("minProfit");
  const maxProfit = searchParams.get("maxProfit");

  // Fetch all orders from backend
  const backendRes = await fetch(
    "https://trueroi-backend-production.up.railway.app/orders"
  );

  if (!backendRes.ok) {
    return Response.json(
      { error: "Failed to fetch orders from backend" },
      { status: 500 }
    );
  }

  let allOrders: Order[] = await backendRes.json();

  // Validate backend response
  if (!Array.isArray(allOrders)) {
    return Response.json(
      {
        orders: [],
        error: "Invalid data returned from backend",
      },
      { status: 500 }
    );
  }

  // FILTERING
  allOrders = allOrders.filter((order: Order) => {
    if (startDate && new Date(order.date) < new Date(startDate)) return false;
    if (endDate && new Date(order.date) > new Date(endDate)) return false;

    if (leakType && !order.leaks?.includes(leakType)) return false;

    if (minProfit && order.net < Number(minProfit)) return false;
    if (maxProfit && order.net > Number(maxProfit)) return false;

    return true;
  });

  // SORTING — fully type-safe
  allOrders.sort((a: Order, b: Order) => {
    const valA = a[sortBy] ?? 0;
    const valB = b[sortBy] ?? 0;

    if (valA < valB) return direction === "asc" ? -1 : 1;
    if (valA > valB) return direction === "asc" ? 1 : -1;
    return 0;
  });

  // PAGINATION
  const start = (page - 1) * limit;
  const paginatedOrders = allOrders.slice(start, start + limit);

  return Response.json({
    page,
    limit,
    total: allOrders.length,
    orders: paginatedOrders,
  });
}
