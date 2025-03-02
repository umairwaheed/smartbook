import { Routes, Route, NavLink } from "react-router";
import Logout from "./components/Logout";
import Books from "./pages/Books";
import UserBooks from "./pages/UserBooks";
import FetchBook from "./pages/FetchBook";
import BookReader from "./pages/BookReader";
import BookAnalysis from "./pages/BookAnalysis";

export default function App() {
  return (
    <div className="flex bg-gray-100">
      <aside className="bg-gray-800 text-white w-64 p-4 fixed h-full">
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
              Search
            </NavLink>
          </li>
          <li className="py-2 p-2 rounded">
            <NavLink
              to="/my-books"
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

      <div className="flex flex-col flex-1 ml-64">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">SmartBook</h1>
          <Logout />
        </header>

        <main className="flex-1 p-6 bg-white rounded-lg shadow-md m-4">
          <Routes>
            <Route path="/" element={<FetchBook />} />
            <Route path="/my-books" element={<UserBooks />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:bookId/read" element={<BookReader />} />
            <Route path="/books/:bookId/analysis" element={<BookAnalysis />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
