"use client";

export default function LeaksPage() {
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
        Profit Leaks
      </h1>

      {/* Leak Cards */}
      <div className="space-y-6">

        {/* Leak 1 */}
        <div
          className="rounded-xl p-6"
          style={{
            background: "var(--tr-surface)",
            border: "1px solid var(--tr-border)",
          }}
        >
          <h2
            className="text-[20px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              color: "var(--tr-text-primary)",
            }}
          >
            High Shipping Costs
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--tr-text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Your shipping costs are significantly higher than average for this product category.
          </p>

          <div
            className="mt-4 text-sm"
            style={{ color: "var(--tr-text-secondary)" }}
          >
            <p>
              Estimated loss:{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--tr-leak)" }}
              >
                -$1,240/mo
              </span>
            </p>
            <p>Affected orders: 42</p>
          </div>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm"
            style={{
              background: "var(--tr-accent)",
              color: "white",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
            }}
            onClick={() => alert("Fix steps coming soon…")}
          >
            Fix Leak
          </button>
        </div>

        {/* Leak 2 */}
        <div
          className="rounded-xl p-6"
          style={{
            background: "var(--tr-surface)",
            border: "1px solid var(--tr-border)",
          }}
        >
          <h2
            className="text-[20px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              color: "var(--tr-text-primary)",
            }}
          >
            Low Margin Products
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--tr-text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Several products are being sold with margins below 20%, causing silent profit loss.
          </p>

          <div
            className="mt-4 text-sm"
            style={{ color: "var(--tr-text-secondary)" }}
          >
            <p>
              Estimated loss:{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--tr-leak)" }}
              >
                -$780/mo
              </span>
            </p>
            <p>Affected products: 12</p>
          </div>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm"
            style={{
              background: "var(--tr-accent)",
              color: "white",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
            }}
            onClick={() => alert("Fix steps coming soon…")}
          >
            Fix Leak
          </button>
        </div>

        {/* Leak 3 */}
        <div
          className="rounded-xl p-6"
          style={{
            background: "var(--tr-surface)",
            border: "1px solid var(--tr-border)",
          }}
        >
          <h2
            className="text-[20px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              color: "var(--tr-text-primary)",
            }}
          >
            Over-Discounting
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--tr-text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Discounts are reducing profit margins more than expected, especially on repeat buyers.
          </p>

          <div
            className="mt-4 text-sm"
            style={{ color: "var(--tr-text-secondary)" }}
          >
            <p>
              Estimated loss:{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--tr-leak)" }}
              >
                -$540/mo
              </span>
            </p>
            <p>Affected orders: 19</p>
          </div>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm"
            style={{
              background: "var(--tr-accent)",
              color: "white",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
            }}
            onClick={() => alert("Fix steps coming soon…")}
          >
            Fix Leak
          </button>
        </div>

      </div>
    </div>
  );
}
