"use client";

export function GlobalSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10 z-50">
      <div className="h-10 w-10 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin" />
    </div>
  );
}
