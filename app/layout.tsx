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
      <body className="min-h-full bg-[#F5F6F8]">
        <LayoutClientWrapper>
          
          {/* SaaS Layout Shell */}
          <div className="min-h-screen flex flex-col">

            {/* Top Navigation */}
            <header className="h-14 border-b border-[#E3E5EC] bg-[#F5F6F8] flex items-center px-6 justify-between">
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
                <button className="px-3 py-1 rounded-lg border border-[#E3E5EC] bg-[#F5F6F8]">
                  Account
                </button>
              </div>
            </header>

            <div className="flex flex-1">


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
