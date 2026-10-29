"use client";

import { 
  BarChart2, 
  ClipboardList, 
  Wrench, 
  AlertTriangle, 
  Settings 
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        group
        h-screen
        flex flex-col justify-between
        p-4
        transition-all duration-300
        w-20 hover:w-64
        overflow-hidden
      "
      style={{
        background: "var(--tr-surface)",       // slightly darker than main bg
        borderRight: "1px solid var(--tr-border)"
      }}
    >
      {/* Logo */}
      <div className="mb-8">
        <span
          className="
            block
            text-[20px]
            whitespace-nowrap
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            color: "var(--tr-text-primary)",
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
          href="/dashboard"
          active={pathname === "/dashboard"}
        />

        <SidebarLink
          label="Orders"
          icon={<ClipboardList size={20} />}
          href="/orders"
          active={pathname === "/orders"}
        />

        <SidebarLink
          label="Leaks"
          icon={<AlertTriangle size={20} />}
          href="/leaks"
          active={pathname === "/leaks"}
        />

        <SidebarLink
          label="Fix Center"
          icon={<Wrench size={20} />}
          href="/fix"
          active={pathname === "/fix"}
        />

      </nav>

      {/* Bottom Section */}
      <div className="space-y-2 mt-auto">
        <SidebarLink
          label="Settings"
          icon={<Settings size={20} />}
          href="/settings"
          active={pathname === "/settings"}
        />
      </div>
    </aside>
  );
}

function SidebarLink({
  label,
  icon,
  href,
  active = false,
}: {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={`
        flex items-center
        px-3 py-2
        rounded-lg
        cursor-pointer
        transition-colors duration-200
      `}
      style={{
        background: active ? "var(--tr-accent)" : "transparent",
        color: active ? "white" : "var(--tr-text-secondary)",
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        lineHeight: "150%",
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.background = "var(--tr-border)";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.background = "transparent";
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
          transition-opacity duration-300
          group-hover:opacity-100
        "
      >
        {label}
      </span>
    </a>
  );
}
