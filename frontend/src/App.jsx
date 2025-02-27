export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white w-64 p-4 transition-all md:block`}>
        <h2 className="text-xl font-bold mb-4">SmartBook</h2>
        <ul>
          <li className="py-2 hover:bg-gray-700 p-2 rounded">Home</li>
          <li className="py-2 hover:bg-gray-700 p-2 rounded">Search</li>
          <li className="py-2 hover:bg-gray-700 p-2 rounded">Books</li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
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
