import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import LayoutClientWrapper from "../components/LayoutClientWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body
        className="min-h-full"
        style={{ background: "var(--tr-bg)" }}
      >
        <LayoutClientWrapper>
          
          {/* SaaS Layout Shell */}
          <div className="min-h-screen flex flex-col">

            {/* Top Navigation */}
            <header
              className="h-14 flex items-center px-6 justify-between"
              style={{
                background: "transparent", // header now sits ON the gradient
                borderBottom: "1px solid var(--tr-border)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="text-[20px] font-semibold"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--tr-text-primary)",
                  }}
                >
                  TrueROI
                </span>

                <span
                  className="text-xs"
                  style={{ color: "var(--tr-text-secondary)" }}
                >
                  Profit Guard
                </span>
              </div>

              <div
                className="flex items-center gap-4 text-sm"
                style={{ color: "var(--tr-text-secondary)" }}
              >
                <span>Workspace: Kane</span>

                <button
                  className="px-3 py-1 rounded-lg"
                  style={{
                    background: "var(--tr-bg)",
                    border: "1px solid var(--tr-border)",
                    color: "var(--tr-text-primary)",
                  }}
                >
                  Account
                </button>
              </div>
            </header>

            {/* Main Content Area with full gradient */}
            <div className="flex flex-1">
              <main
                className="flex-1 p-8"
                style={{
                  background: `
                    linear-gradient(
                      to bottom,
                      rgb(228, 40, 40) 0%,
                      rgb(39, 102, 238) 50%,
                      var(--tr-bg) 100%
                    )
                  `,
                }}
              >
                {children}
              </main>
            </div>

          </div>

        </LayoutClientWrapper>
      </body>
    </html>
  );
}
