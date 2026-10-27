"use client";

export default function LeaksPage() {
  return (
    <div className="space-y-10">

      {/* Page Title */}
      <h1
        className="text-[28px] font-semibold"
        style={{ fontFamily: "var(--font-noto-serif)" }}
      >
        Profit Leaks
      </h1>

      {/* Leak Cards */}
      <div className="space-y-6">

        {/* Leak 1 */}
        <div className="bg-white border border-[#E3E5EC] rounded-xl p-6">
          <h2
            className="text-[20px] font-semibold text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            High Shipping Costs
          </h2>

          <p className="text-[#515569] mt-2">
            Your shipping costs are significantly higher than average for this product category.
          </p>

          <div className="mt-4 text-sm text-[#515569]">
            <p>Estimated loss: <span className="font-semibold text-red-600">-$1,240/mo</span></p>
            <p>Affected orders: 42</p>
          </div>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold bg-red-500 text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            onClick={() => alert("Fix steps coming soon…")}
          >
            Fix Leak
          </button>
        </div>

        {/* Leak 2 */}
        <div className="bg-white border border-[#E3E5EC] rounded-xl p-6">
          <h2
            className="text-[20px] font-semibold text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Low Margin Products
          </h2>

          <p className="text-[#515569] mt-2">
            Several products are being sold with margins below 20%, causing silent profit loss.
          </p>

          <div className="mt-4 text-sm text-[#515569]">
            <p>Estimated loss: <span className="font-semibold text-red-600">-$780/mo</span></p>
            <p>Affected products: 12</p>
          </div>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold bg-red-500 text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            onClick={() => alert("Fix steps coming soon…")}
          >
            Fix Leak
          </button>
        </div>

        {/* Leak 3 */}
        <div className="bg-white border border-[#E3E5EC] rounded-xl p-6">
          <h2
            className="text-[20px] font-semibold text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Over-Discounting
          </h2>

          <p className="text-[#515569] mt-2">
            Discounts are reducing profit margins more than expected, especially on repeat buyers.
          </p>

          <div className="mt-4 text-sm text-[#515569]">
            <p>Estimated loss: <span className="font-semibold text-red-600">-$540/mo</span></p>
            <p>Affected orders: 19</p>
          </div>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold bg-red-500 text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            onClick={() => alert("Fix steps coming soon…")}
          >
            Fix Leak
          </button>
        </div>

      </div>

    </div>
  );
}
