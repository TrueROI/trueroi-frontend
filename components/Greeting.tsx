"use client";

export default function Greeting({
  merchantName,
  shopName,
  lastSync,
}: {
  merchantName: string;
  shopName: string;
  lastSync: string;
}) {
  return (
    <div
      className="space-y-1"
      style={{
        fontFamily: "var(--font-body)",
        letterSpacing: "-0.01em",
        lineHeight: "140%",
      }}
    >
      <h1
        className="text-[26px]"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          color: "var(--tr-text-primary)",
        }}
      >
        Welcome back, {merchantName} 👋
      </h1>

      <p
        className="text-[16px]"
        style={{
          color: "var(--tr-text-secondary)",
          fontFamily: "var(--font-body)",
        }}
      >
        {shopName} • Last sync: {lastSync}
      </p>
    </div>
  );
}
