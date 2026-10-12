"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import { GlobalSpinner } from "@/components/GlobalSpinner";
import { ErrorBanner } from "@/components/ErrorBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrueROI Dashboard",
  description: "Profit Guard Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isLoading = false;
  const globalError = "";

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex bg-white">
        {isLoading && <GlobalSpinner />}
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          <ErrorBanner message={globalError} />
          {children}
        </main>
      </body>
    </html>
  );
}
