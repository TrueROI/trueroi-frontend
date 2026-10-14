"use client";

export default function Greeting({
  merchantName,
  shopName,
  lastSync,
  status
}: {
  merchantName: string;
  shopName: string;
  lastSync: string;
  status: "synced" | "syncing";
}) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold">
        Welcome back, {merchantName} 👋
      </h1>

      <p className="text-gray-600 mt-1">
        {shopName} • Last sync: {lastSync}
      </p>

      <div className="mt-2 flex items-center gap-2">
        <span
          className={`h-3 w-3 rounded-full ${
            status === "synced" ? "bg-green-500" : "bg-yellow-400 animate-pulse"
          }`}
        ></span>

        <span className="text-sm text-gray-700">
          {status === "synced" ? "All data synced" : "Syncing…"}
        </span>
      </div>
    </div>
  );
}
