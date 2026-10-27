"use client";

export default function FixCenterPage() {
  return (
    <div className="space-y-10">

      {/* Page Title */}
      <h1
        className="text-[28px] font-semibold"
        style={{ fontFamily: "var(--font-noto-serif)" }}
      >
        Fix Center
      </h1>

      {/* Fix Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Fix 1 — High Shipping Costs */}
        <div className="bg-white border border-[#E3E5EC] rounded-xl p-6">
          <h2
            className="text-[20px] font-semibold text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            High Shipping Costs
          </h2>

          <p className="text-[#515569] mt-2">
            Your shipping costs are above industry average for this product category.
            This usually happens due to packaging size, carrier choice, or incorrect Shopify shipping profiles.
          </p>

          <ul className="mt-4 text-[#515569] list-disc ml-6">
            <li>Switch to a cheaper carrier</li>
            <li>Use Shopify discounted shipping rates</li>
            <li>Reduce package dimensions or weight</li>
            <li>Update shipping profile rules</li>
          </ul>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold bg-black text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            onClick={() => alert("This will open the Shopify shipping settings soon.")}
          >
            Open in Shopify
          </button>
        </div>

        {/* Fix 2 — Low Margin Products */}
        <div className="bg-white border border-[#E3E5EC] rounded-xl p-6">
          <h2
            className="text-[20px] font-semibold text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Low Margin Products
          </h2>

          <p className="text-[#515569] mt-2">
            These products are being sold with margins below 20%, causing silent profit loss.
            This usually happens when COGS is too high or the selling price is too low.
          </p>

          <ul className="mt-4 text-[#515569] list-disc ml-6">
            <li>Raise product price</li>
            <li>Negotiate lower cost of goods</li>
            <li>Remove aggressive discount codes</li>
            <li>Bundle products to increase AOV</li>
          </ul>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold bg-black text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            onClick={() => alert("This will open the Shopify product editor soon.")}
          >
            Edit Product
          </button>
        </div>

        {/* Fix 3 — Over-Discounting */}
        <div className="bg-white border border-[#E3E5EC] rounded-xl p-6">
          <h2
            className="text-[20px] font-semibold text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Over-Discounting
          </h2>

          <p className="text-[#515569] mt-2">
            Discounts are reducing profit margins more than expected, especially on repeat buyers.
            This often happens when discount codes stack or are applied too frequently.
          </p>

          <ul className="mt-4 text-[#515569] list-disc ml-6">
            <li>Reduce discount percentage</li>
            <li>Limit discount usage per customer</li>
            <li>Remove old or unused discount codes</li>
            <li>Switch to tiered discounts</li>
          </ul>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold bg-black text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            onClick={() => alert("This will open Shopify discount settings soon.")}
          >
            Manage Discounts
          </button>
        </div>

        {/* Fix 4 — High Fees */}
        <div className="bg-white border border-[#E3E5EC] rounded-xl p-6">
          <h2
            className="text-[20px] font-semibold text-[#000000]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            High Fees
          </h2>

          <p className="text-[#515569] mt-2">
            Transaction fees are eating into your profit margins. This usually happens with certain payment gateways or high refund rates.
          </p>

          <ul className="mt-4 text-[#515569] list-disc ml-6">
            <li>Switch to Shopify Payments</li>
            <li>Reduce refund frequency</li>
            <li>Encourage lower-fee payment methods</li>
            <li>Review gateway fee structure</li>
          </ul>

          <button
            className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold bg-black text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            onClick={() => alert("This will open Shopify payment settings soon.")}
          >
            Payment Settings
          </button>
        </div>

      </div>

    </div>
  );
}
