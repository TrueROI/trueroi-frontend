"use client";

import Sidebar from "../components/Sidebar";
import TestConnection from "./TestConnection";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />
      <div className="flex-1 p-10 ml-64">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">TrueROI Dashboard</h1>
          <p className="text-gray-400 mt-2">
            This will become your real-time profit leak view.
          </p>
        </div>

        {/* Test Button */}
        <div className="mt-10">
          <h2 className="text-xl mb-4">Frontend → Backend Test</h2>
          <TestConnection />
        </div>
      </div>
    </main>
  );
}
