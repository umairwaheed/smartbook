import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";

export default function BookPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBook = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/books/${bookId}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch book");
      }

      const data = await response.json();
      setBook(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [bookId]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-700">Loading book...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">{book.title}</h2>
      {book.author && <p className="text-center text-gray-700 mb-4">By {book.author}</p>}

      <div className="h-[500px] overflow-y-auto p-4 border border-gray-300 bg-gray-100 rounded-lg">
        <pre className="whitespace-pre-wrap text-gray-800 text-lg leading-relaxed">{book.text}</pre>
      </div>
    </div>
  );
}
