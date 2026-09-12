import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />
      <div className="flex-1 p-10 ml-64 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">TrueROI Dashboard</h1>
          <p className="text-gray-400 mt-2">
            This will become your real-time profit leak view.
          </p>
        </div>
      </div>
    </main>
  );
}
