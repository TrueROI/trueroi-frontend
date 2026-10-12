"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "../components/Sidebar";
import { GlobalSpinner } from "@/components/GlobalSpinner";
import { ErrorBanner } from "@/components/ErrorBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
  const isLoading = false;      // later: wire to router or global state
  const globalError = "";       // later: wire to global error state

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex bg-white">
        {isLoading && <GlobalSpinner />}

        {/* Sidebar */}
        <Sidebar />

        {/* Main dashboard content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <ErrorBanner message={globalError} />
          {children}
        </main>
      </body>
    </html>
  );
}
