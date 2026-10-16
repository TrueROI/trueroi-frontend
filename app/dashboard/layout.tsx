export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#FFFFFF] text-[#000000]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#F7F7F7] border-r border-[#E3E5EC] p-6">
        <h2 className="text-xl font-semibold mb-6 text-[#515569]">TrueROI</h2>

        <nav className="space-y-2">
          <a className="block px-3 py-2 rounded-lg text-[#515569] hover:bg-[#E2E5EE]">
            Dashboard
          </a>
          <a className="block px-3 py-2 rounded-lg text-[#515569] hover:bg-[#E2E5EE]">
            Orders
          </a>
          <a className="block px-3 py-2 rounded-lg text-[#515569] hover:bg-[#E2E5EE]">
            Billing
          </a>
          <a className="block px-3 py-2 rounded-lg text-[#515569] hover:bg-[#E2E5EE]">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
