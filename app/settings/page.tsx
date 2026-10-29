"use client";

export default function SettingsPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-body)" }}>
      
      {/* Page Title */}
      <h1
        className="text-[28px]"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          color: "var(--tr-text-primary)",
        }}
      >
        Settings
      </h1>

      {/* Settings Container */}
      <div
        className="rounded-xl p-8 space-y-10"
        style={{
          background: "var(--tr-surface)",
          border: "1px solid var(--tr-border)",
        }}
      >

        {/* Shopify Connection */}
        <section>
          <h2
            className="text-[20px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              color: "var(--tr-text-primary)",
            }}
          >
            Shopify Connection
          </h2>

          <p
            className="mt-2"
            style={{ color: "var(--tr-text-secondary)" }}
          >
            Status:{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--tr-profit)" }}
            >
              Connected
            </span>
          </p>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm"
            style={{
              background: "var(--tr-accent)",
              color: "white",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
            }}
            onClick={() => alert("Reconnect flow coming soon…")}
          >
            Reconnect Shopify
          </button>
        </section>

        {/* Sync Status */}
        <section>
          <h2
            className="text-[20px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              color: "var(--tr-text-primary)",
            }}
          >
            Sync Status
          </h2>

          <p
            className="mt-2"
            style={{ color: "var(--tr-text-secondary)" }}
          >
            Last Sync: Oct 7, 2026 — 4:55 PM
          </p>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm"
            style={{
              background: "var(--tr-accent)",
              color: "white",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
            }}
            onClick={() => alert("Manual sync coming soon…")}
          >
            Sync Now
          </button>
        </section>

        {/* Profit Thresholds */}
        <section>
          <h2
            className="text-[20px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              color: "var(--tr-text-primary)",
            }}
          >
            Profit Thresholds
          </h2>

          <p
            className="mt-2"
            style={{ color: "var(--tr-text-secondary)" }}
          >
            Flag products with margin below{" "}
            <span className="font-semibold">20%</span>
          </p>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm"
            style={{
              background: "var(--tr-accent)",
              color: "white",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
            }}
            onClick={() => alert("Threshold editing coming soon…")}
          >
            Edit Thresholds
          </button>
        </section>

        {/* Notifications */}
        <section>
          <h2
            className="text-[20px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              color: "var(--tr-text-primary)",
            }}
          >
            Notifications
          </h2>

          <p
            className="mt-2"
            style={{ color: "var(--tr-text-secondary)" }}
          >
            Email alerts: <span className="font-semibold">Enabled</span>
          </p>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm"
            style={{
              background: "var(--tr-accent)",
              color: "white",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
            }}
            onClick={() => alert("Notification settings coming soon…")}
          >
            Manage Notifications
          </button>
        </section>

      </div>
    </div>
  );
}
