import { useState, useEffect } from "react";

export default function UserBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("/api/user-books/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ensure cookies (authentication) are sent
      });

      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }

      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-10 text-gray-700">Loading books...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">📚 Books List</h2>

      {books.length === 0 ? (
        <p className="text-gray-600 text-center">No books available.</p>
      ) : (
        <ul className="space-y-4">
          {books.map((book) => (
            <li key={book.gutenberg_id} className="border p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-blue-600">{book.title}</h3>
              {book.author && <p className="text-gray-700">By: {book.author}</p>}
              <p className="text-sm text-gray-500">Language: {book.language || "Unknown"}</p>
              <a
                href={book.download_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600"
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
