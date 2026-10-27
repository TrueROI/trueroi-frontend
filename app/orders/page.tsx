"use client";

export default function OrdersPage() {
  return (
    <div className="space-y-10">

      {/* Page Title */}
      <h1
        className="text-[28px] font-semibold"
        style={{ fontFamily: "var(--font-noto-serif)" }}
      >
        Orders
      </h1>

      {/* Orders Table */}
      <div className="bg-white border border-[#E3E5EC] rounded-xl p-8">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-[#E3E5EC]">
              <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>Order ID</th>
              <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>Product</th>
              <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>Revenue</th>
              <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>COGS</th>
              <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>Fees</th>
              <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>Shipping</th>
              <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>Discounts</th>
              <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>True Net</th>
              <th className="py-3 px-2 font-semibold text-[#000000]" style={{ fontFamily: "var(--font-noto-serif)" }}>Action</th>
            </tr>
          </thead>

          <tbody className="text-[#515569]">

            {/* Example Order Row */}
            <tr className="border-b border-[#E3E5EC]">
              <td className="py-3 px-2">#1022</td>
              <td className="py-3 px-2">Profit Leak Hoodie</td>
              <td className="py-3 px-2">$200.00</td>
              <td className="py-3 px-2">$28.00</td>
              <td className="py-3 px-2">$0.30</td>
              <td className="py-3 px-2">$100.00</td>
              <td className="py-3 px-2">$20.00</td>

              {/* Negative True Net */}
              <td className="py-3 px-2 text-red-600 font-semibold">-48.30</td>

              {/* Fix Order Button */}
              <td className="py-3 px-2">
                <button
                  className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-500 text-white"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                  onClick={() => alert("Here’s how to fix this order leak…")}
                >
                  Fix Order
                </button>
              </td>
            </tr>

            {/* Example Positive Order */}
            <tr className="border-b border-[#E3E5EC]">
              <td className="py-3 px-2">#1017</td>
              <td className="py-3 px-2">Profit-Killer Hoodie</td>
              <td className="py-3 px-2">$80.00</td>
              <td className="py-3 px-2">$20.00</td>
              <td className="py-3 px-2">$0.30</td>
              <td className="py-3 px-2">$30.00</td>
              <td className="py-3 px-2">$0.00</td>

              {/* Positive True Net */}
              <td className="py-3 px-2 text-green-600 font-semibold">29.70</td>

              <td className="py-3 px-2">
                <button
                  className="px-4 py-2 rounded-lg text-sm font-semibold bg-black text-white"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  View
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
}
