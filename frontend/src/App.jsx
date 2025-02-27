import { useState } from "react";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white w-64 p-4 transition-all ${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="py-2 hover:bg-gray-700 p-2 rounded">Dashboard</li>
          <li className="py-2 hover:bg-gray-700 p-2 rounded">Settings</li>
          <li className="py-2 hover:bg-gray-700 p-2 rounded">Profile</li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden p-2 bg-gray-200 rounded">
            ☰
          </button>
          <h1 className="text-lg font-bold">Topbar</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white rounded-lg shadow-md m-4">
          <h2 className="text-xl font-bold mb-4">Main Content</h2>
          <p>Welcome to the dashboard! Here’s where your content will go.</p>
        </main>
      </div>
    </div>
  );
}
