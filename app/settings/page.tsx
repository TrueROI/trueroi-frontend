"use client";

export default function SettingsPage() {
  return (
    <div className="space-y-10">

      {/* Page Title */}
      <h1
        className="text-[28px] font-semibold"
        style={{ fontFamily: "var(--font-noto-serif)" }}
      >
        Settings
      </h1>

      {/* Settings Container */}
      <div className="bg-white border border-[#E3E5EC] rounded-xl p-8 space-y-10">

        {/* Shopify Connection */}
        <section>
          <h2
            className="text-[20px] font-semibold text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Shopify Connection
          </h2>

          <p className="text-[#515569] mt-2">
            Status: <span className="font-semibold text-green-600">Connected</span>
          </p>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold bg-black text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            onClick={() => alert("Reconnect flow coming soon…")}
          >
            Reconnect Shopify
          </button>
        </section>

        {/* Sync Status */}
        <section>
          <h2
            className="text-[20px] font-semibold text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Sync Status
          </h2>

          <p className="text-[#515569] mt-2">
            Last Sync: Oct 7, 2026 — 4:55 PM
          </p>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold bg-black text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            onClick={() => alert("Manual sync coming soon…")}
          >
            Sync Now
          </button>
        </section>

        {/* Profit Thresholds */}
        <section>
          <h2
            className="text-[20px] font-semibold text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Profit Thresholds
          </h2>

          <p className="text-[#515569] mt-2">
            Flag products with margin below <span className="font-semibold">20%</span>
          </p>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold bg-black text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            onClick={() => alert("Threshold editing coming soon…")}
          >
            Edit Thresholds
          </button>
        </section>

        {/* Notifications */}
        <section>
          <h2
            className="text-[20px] font-semibold text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Notifications
          </h2>

          <p className="text-[#515569] mt-2">
            Email alerts: <span className="font-semibold">Enabled</span>
          </p>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold bg-black text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            onClick={() => alert("Notification settings coming soon…")}
          >
            Manage Notifications
          </button>
        </section>

      </div>

    </div>
  );
}
