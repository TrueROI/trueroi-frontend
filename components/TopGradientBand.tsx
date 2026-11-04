"use client";

export default function TopGradientBand({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: `
          linear-gradient(
            to bottom,
            rgba(255,255,255,1) 0%,
            rgba(247,247,247,1) 40%,
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
