import { useState } from "react";

export default function FetchBook() {
  const [bookId, setBookId] = useState("");
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBook = async () => {
    setLoading(true);
    setError(null);
    setBook(null);

    try {
      const response = await fetch("/api/fetch-book/", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCSRFToken(), // CSRF token for Django
        },
        body: JSON.stringify({ book_id: bookId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch book");
      }

      setBook(data.book);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to get CSRF token from cookies
  function getCSRFToken() {
    const csrfCookie = document.cookie.split("; ").find((row) => row.startsWith("csrftoken="));
    return csrfCookie ? csrfCookie.split("=")[1] : "";
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Fetch a Book</h2>

      {/* Search Input */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Enter Book ID..."
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
        <button
          onClick={fetchBook}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Loading State */}
      {loading && <p className="text-center mt-4 text-gray-700">Fetching book...</p>}

      {/* Error Message */}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {/* Display Book Details */}
      {book && (
        <div className="mt-6 border p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold text-blue-600">{book.title}</h3>
          {book.author && <p className="text-gray-700">By: {book.author}</p>}
          <p className="text-sm text-gray-500">Language: {book.language || "Unknown"}</p>
          <a
            href={book.download_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          >
            Download Book
          </a>
        </div>
      )}
    </div>
  );
}
