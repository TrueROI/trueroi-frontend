"use client";

export default function OrdersPage() {
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
        Orders
      </h1>

      {/* Orders Table */}
      <div
        className="rounded-xl p-8"
        style={{
          background: "var(--tr-surface)",
          border: "1px solid var(--tr-border)",
        }}
      >
        <table className="min-w-full text-left">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--tr-border)" }}>
              {[
                "Order ID",
                "Product",
                "Revenue",
                "COGS",
                "Fees",
                "Shipping",
                "Discounts",
                "True Net",
                "Action",
              ].map((header) => (
                <th
                  key={header}
                  className="py-3 px-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    color: "var(--tr-text-primary)",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody style={{ color: "var(--tr-text-secondary)" }}>
            
            {/* Example Order Row (Negative Net) */}
            <tr style={{ borderBottom: "1px solid var(--tr-border)" }}>
              <td className="py-3 px-2">#1022</td>
              <td className="py-3 px-2">Profit Leak Hoodie</td>
              <td className="py-3 px-2">$200.00</td>
              <td className="py-3 px-2">$28.00</td>
              <td className="py-3 px-2">$0.30</td>
              <td className="py-3 px-2">$100.00</td>
              <td className="py-3 px-2">$20.00</td>

              {/* Negative True Net */}
              <td
                className="py-3 px-2 font-semibold"
                style={{ color: "var(--tr-leak)" }}
              >
                -48.30
              </td>

              {/* Fix Order Button */}
              <td className="py-3 px-2">
                <button
                  className="px-4 py-2 rounded-lg text-sm"
                  style={{
                    background: "var(--tr-accent)",
                    color: "white",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                  }}
                  onClick={() => alert("Here’s how to fix this order leak…")}
                >
                  Fix Order
                </button>
              </td>
            </tr>

            {/* Example Positive Order */}
            <tr style={{ borderBottom: "1px solid var(--tr-border)" }}>
              <td className="py-3 px-2">#1017</td>
              <td className="py-3 px-2">Profit-Killer Hoodie</td>
              <td className="py-3 px-2">$80.00</td>
              <td className="py-3 px-2">$20.00</td>
              <td className="py-3 px-2">$0.30</td>
              <td className="py-3 px-2">$30.00</td>
              <td className="py-3 px-2">$0.00</td>

              {/* Positive True Net */}
              <td
                className="py-3 px-2 font-semibold"
                style={{ color: "var(--tr-profit)" }}
              >
                29.70
              </td>

              <td className="py-3 px-2">
                <button
                  className="px-4 py-2 rounded-lg text-sm"
                  style={{
                    background: "var(--tr-accent)",
                    color: "white",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                  }}
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
