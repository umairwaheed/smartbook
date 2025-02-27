import { Routes, Route, NavLink } from "react-router";
import Logout from "./components/Logout";
import Books from "./pages/Books";
import UserBooks from "./pages/UserBooks";
import FetchBook from "./pages/FetchBook";
import BookReader from "./pages/BookReader";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white w-64 p-4 transition-all md:block`}>
        <ul>
          <li className="py-2 p-2 rounded">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 block px-4 py-2 rounded text-yellow-400"
                  : "hover:bg-gray-700 block px-4 py-2 rounded"
              }
            >
              My Books
            </NavLink>
          </li>
          <li className="py-2 p-2 rounded">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 block px-4 py-2 rounded text-yellow-400"
                  : "hover:bg-gray-700 block px-4 py-2 rounded"
              }
            >
              Search
            </NavLink>
          </li>
          <li className="py-2 p-2 rounded">
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 block px-4 py-2 rounded text-yellow-400"
                  : "hover:bg-gray-700 block px-4 py-2 rounded"
              }
            >
              All Books
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">SmartBook</h1>
          <Logout />
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white rounded-lg shadow-md m-4">
          <Routes>
            <Route path="/" element={<UserBooks />} />
            <Route path="/search" element={<FetchBook />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:bookId/read" element={<BookReader />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
