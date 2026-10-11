// components/SyncBanner.tsx
export function SyncBanner({ syncing }: { syncing: boolean }) {
  if (!syncing) return null;

  return (
    <div className="mb-4 rounded-lg bg-blue-50 border border-blue-200 px-4 py-2 text-sm text-blue-700">
      Syncing data from Shopify… This may take a few seconds.
    </div>
  );
}
