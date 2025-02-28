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
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Fetch a Book</h2>

      {/* Search Input */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
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
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Book Details</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="bg-gray-200">
                  <td className="p-3 border border-gray-300 font-bold">Title</td>
                  <td className="p-3 border border-gray-300">{book.title}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-300 font-bold">Author</td>
                  <td className="p-3 border border-gray-300">{book.author || "Unknown"}</td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="p-3 border border-gray-300 font-bold">Language</td>
                  <td className="p-3 border border-gray-300">{book.language || "N/A"}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-300 font-bold">Category</td>
                  <td className="p-3 border border-gray-300">{book.category || "N/A"}</td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="p-3 border border-gray-300 font-bold">Summary</td>
                  <td className="p-3 border border-gray-300">
                    {book.summary || "No summary available"}
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-300 font-bold">Created At</td>
                  <td className="p-3 border border-gray-300">
                    {new Date(book.created_at).toLocaleDateString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
