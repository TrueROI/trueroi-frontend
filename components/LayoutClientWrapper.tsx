"use client";

import Sidebar from "../components/Sidebar";
import { GlobalSpinner } from "../components/GlobalSpinner";
import { ErrorBanner } from "../components/ErrorBanner";

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  const isLoading = false;
  const globalError = "";

  return (
    <div
      className="flex"
      style={{
        background: "var(--tr-bg)",
        color: "var(--tr-text-primary)",
        fontFamily: "var(--font-body)",
      }}
    >
      {isLoading && <GlobalSpinner />}

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main
        className="flex-1 p-8 overflow-y-auto"
        style={{
          fontFamily: "var(--font-body)",
        }}
      >
        <ErrorBanner message={globalError} />
        {children}
      </main>
    </div>
  );
}
