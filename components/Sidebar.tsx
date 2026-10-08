import { Home, BarChart2, ClipboardList, CreditCard, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-100 border-r flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="p-6 font-bold text-xl text-blue-600">
          TrueROI
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-2">
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
      </div>

      {/* Bottom Section */}
      <div className="px-4 pb-6">
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
  active = false
}: {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}) {

  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-700 hover:bg-gray-200"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
}
