"use client";

import Sidebar from "../components/Sidebar";
import { GlobalSpinner } from "../components/GlobalSpinner";
import { ErrorBanner } from "../components/ErrorBanner";

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  const isLoading = false;
  const globalError = "";

  return (
    <div className="flex min-h-screen bg-white text-black">
      {isLoading && <GlobalSpinner />}

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <ErrorBanner message={globalError} />
        {children}
      </main>
    </div>
  );
}
