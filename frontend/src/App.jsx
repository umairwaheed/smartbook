import { Routes, Route, Link } from "react-router";
import Logout from "./components/Logout";
import Books from "./pages/Books";
import UserBooks from "./pages/UserBooks";

const Search = () => <h2 className="text-xl font-bold">🔍 Search Page</h2>;

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white w-64 p-4 transition-all md:block`}>
        <ul>
          <li className="py-2 hover:bg-gray-700 p-2 rounded">
            <Link to="/">My Books</Link>
          </li>
          <li className="py-2 hover:bg-gray-700 p-2 rounded">
            <Link to="/search">Search</Link>
          </li>
          <li className="py-2 hover:bg-gray-700 p-2 rounded">
            <Link to="/books">Books</Link>
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
            <Route path="/search" element={<Search />} />
            <Route path="/books" element={<Books />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
