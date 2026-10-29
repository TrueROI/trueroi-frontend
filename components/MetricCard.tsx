"use client";

import { ArrowUp, ArrowDown } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string;
  trend?: "up" | "down" | null;
  loading?: boolean;
  error?: boolean;
};

export default function MetricCard({
  title,
  value,
  trend,
  loading,
  error,
}: MetricCardProps) {
  // Loading skeleton
  if (loading) {
    return (
      <div
        className="rounded-xl shadow-sm p-6 animate-pulse"
        style={{
          background: "var(--tr-surface)",
          border: "1px solid var(--tr-border)",
        }}
      >
        <div
          className="h-4 w-24 rounded mb-3"
          style={{ background: "var(--tr-border)" }}
        ></div>
        <div
          className="h-6 w-32 rounded"
          style={{ background: "var(--tr-border)" }}
        ></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div
        className="rounded-xl shadow-sm p-6"
        style={{
          background: "rgba(199, 106, 106, 0.1)", // soft leak red
          border: "1px solid var(--tr-leak)",
        }}
      >
        <p
          style={{
            color: "var(--tr-leak)",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
          }}
        >
          Unable to load data
        </p>
      </div>
    );
  }

  // Normal card
  return (
    <div
      className="rounded-xl shadow-sm p-6 flex flex-col gap-2"
      style={{
        background: "var(--tr-surface)",
        border: "1px solid var(--tr-border)",
      }}
    >
      {/* Title */}
      <p
        className="text-sm"
        style={{
          color: "var(--tr-text-secondary)",
          fontFamily: "var(--font-body)",
        }}
      >
        {title}
      </p>

      {/* Value + Trend */}
      <div className="flex items-center gap-2">
        <span
          className="text-3xl font-semibold"
          style={{
            color: "var(--tr-text-primary)",
            fontFamily: "var(--font-heading)",
          }}
        >
          {value}
        </span>

        {trend === "up" && (
          <ArrowUp
            size={20}
            style={{ color: "var(--tr-accent)" }} // brand accent blue
          />
        )}

        {trend === "down" && (
          <ArrowDown
            size={20}
            style={{ color: "var(--tr-leak)" }} // leak red
          />
        )}
      </div>
    </div>
  );
}
