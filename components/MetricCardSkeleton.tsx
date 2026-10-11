// components/MetricCardSkeleton.tsx
export function MetricCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="h-4 w-24 bg-gray-200 rounded mb-3 animate-pulse" />
      <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
    </div>
  );
}
