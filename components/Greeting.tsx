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
      className="space-y-1" // tighter spacing
      style={{
        fontFamily: "var(--font-noto-serif)",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        lineHeight: "140%", // slightly tighter
      }}
    >
      <h1 className="text-[26px] text-[#000000]">
        Welcome back, {merchantName} 👋
      </h1>

      <p className="text-[#515569] text-[16px]">
        {shopName} • Last sync: {lastSync}
      </p>
    </div>
  );
}
