"use client";

import { BarChart2, ClipboardList, CreditCard, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-[#F7F7F7] border-r border-[#E3E5EC] flex flex-col justify-between p-6">
      
      {/* Logo */}
      <div className="mb-8">
        <span
          className="text-[20px] font-semibold text-[#000000]"
          style={{
            fontFamily: "var(--font-noto-serif)",
            lineHeight: "150%",
            letterSpacing: "-0.01em",
          }}
        >
          TrueROI Profit Guard
        </span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <SidebarLink
          label="Dashboard"
          icon={<BarChart2 size={18} />}
          active
        />
        <SidebarLink
          label="Orders"
          icon={<ClipboardList size={18} />}
        />
        <SidebarLink
          label="Billing"
          icon={<CreditCard size={18} />}
        />
      </nav>

      {/* Bottom Section */}
      <div className="space-y-2 mt-auto">
        <SidebarLink
          label="Settings"
          icon={<Settings size={18} />}
        />
      </div>
    </aside>
  );
}

function SidebarLink({
  label,
  icon,
  active = false,
}: {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
        active
          ? "bg-[#E2E5EE] text-[#000000]"
          : "text-[#515569] hover:bg-[#E3E5EC]"
      }`}
      style={{
        fontFamily: "var(--font-noto-serif)",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        lineHeight: "150%",
      }}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
}
