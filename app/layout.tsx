import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";

import LayoutClientWrapper from "../components/LayoutClientWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "TrueROI Dashboard",
  description: "Profit Guard Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white">
        <LayoutClientWrapper>
          
          {/* SaaS Layout Shell */}
          <div className="min-h-screen flex flex-col">

            {/* Top Navigation */}
            <header className="h-14 border-b border-[#E3E5EC] bg-white flex items-center px-6 justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="text-[20px] font-semibold"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  TrueROI
                </span>
                <span className="text-xs text-[#828282]">Profit Guard</span>
              </div>

              <div className="flex items-center gap-4 text-sm text-[#515569]">
                <span>Workspace: Kane</span>
                <button className="px-3 py-1 rounded-lg border border-[#E3E5EC] bg-[#F9FAFB]">
                  Account
                </button>
              </div>
            </header>

            <div className="flex flex-1">

              {/* Sidebar Navigation */}
<aside className="w-64 border-r border-[#E3E5EC] bg-white p-4 space-y-4">
  <nav className="space-y-2 text-sm">

    <a
      href="/dashboard"
      className="block px-3 py-2 rounded-lg hover:bg-[#F5F6FA]"
    >
      Dashboard
    </a>

    <a
      href="/orders"
      className="block px-3 py-2 rounded-lg hover:bg-[#F5F6FA]"
    >
      Orders
    </a>

    <a
      href="/leaks"
      className="block px-3 py-2 rounded-lg hover:bg-[#F5F6FA]"
    >
      Leaks
    </a>

    <a
      href="/fix"
      className="block px-3 py-2 rounded-lg hover:bg-[#F5F6FA]"
    >
      Fix Center
    </a>

    <a
      href="/settings"
      className="block px-3 py-2 rounded-lg hover:bg-[#F5F6FA]"
    >
      Settings
    </a>

  </nav>
</aside>


              {/* Main Content Area */}
              <main className="flex-1 p-8">
                {children}
              </main>

            </div>
          </div>

        </LayoutClientWrapper>
      </body>
    </html>
  );
}
