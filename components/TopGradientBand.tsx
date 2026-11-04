"use client";

export default function TopGradientBand({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: `
          linear-gradient(
            to bottom,
            rgb(204, 44, 44) 100%,
            rgb(103, 21, 158) 40%,
            var(--tr-bg) 100%
          )
        `,
        padding: "32px",
        borderRadius: "16px",
      }}
    >
      {children}
    </div>
  );
}
