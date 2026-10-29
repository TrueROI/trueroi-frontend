"use client";

export default function PricingPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "var(--tr-bg)",
        color: "var(--tr-text-primary)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div className="text-center">
        <h1
          className="text-3xl"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            color: "var(--tr-text-primary)",
          }}
        >
          Pricing
        </h1>

        <p
          className="mt-2"
          style={{
            color: "var(--tr-text-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          Plans and subscriptions will live here.
        </p>
      </div>
    </main>
  );
}
