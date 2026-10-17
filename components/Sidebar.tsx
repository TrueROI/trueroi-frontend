"use client";

import { BarChart2, ClipboardList, CreditCard, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="
        group
        h-screen 
        bg-[#F7F7F7] 
        border-r border-[#E3E5EC] 
        flex flex-col justify-between 
        p-4
        transition-all 
        duration-300 
        w-20 
        hover:w-64
        overflow-hidden
      "
    >
      {/* Logo */}
      <div className="mb-8">
        <span
          className="
            block
            text-[20px] 
            font-semibold 
            text-[#000000] 
            whitespace-nowrap 
            opacity-0 
            transition-opacity 
            duration-300 
            group-hover:opacity-100
          "
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
          icon={<BarChart2 size={20} />}
          active
        />
        <SidebarLink
          label="Orders"
          icon={<ClipboardList size={20} />}
        />
        <SidebarLink
          label="Billing"
          icon={<CreditCard size={20} />}
        />
      </nav>

      {/* Bottom Section */}
      <div className="space-y-2 mt-auto">
        <SidebarLink
          label="Settings"
          icon={<Settings size={20} />}
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
      className={`
        flex items-center 
        px-3 py-2 
        rounded-lg 
        cursor-pointer 
        transition-colors 
        duration-200
        ${active ? "bg-[#E2E5EE] text-[#000000]" : "text-[#515569] hover:bg-[#E3E5EC]"}
      `}
      style={{
        fontFamily: "var(--font-noto-serif)",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        lineHeight: "150%",
      }}
    >
      {/* ICON ALWAYS VISIBLE */}
      <div className="min-w-[24px] flex justify-center">
        {icon}
      </div>

      {/* TEXT ONLY SHOWS WHEN EXPANDED */}
      <span
        className="
          whitespace-nowrap 
          opacity-0 
          transition-opacity 
          duration-300 
          group-hover:opacity-100
        "
      >
        {label}
      </span>
    </div>
  );
}
