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
      className="space-y-2"
      style={{
        fontFamily: "var(--font-noto-serif)",
        fontWeight: 600, // semibold
        letterSpacing: "-0.01em",
        lineHeight: "150%",
      }}
    >
      <h1 className="text-[28px] text-[#000000]">
        Welcome back, {merchantName} 👋
      </h1>

      <p className="text-[#515569]">
        {shopName} • Last sync: {lastSync}
      </p>
    </div>
  );
}
