export default function BookList({ books = [] }) {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Book List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-4 border border-gray-600 text-left">Gutenberg ID</th>
              <th className="p-4 border border-gray-600 text-left">Title</th>
              <th className="p-4 border border-gray-600 text-left">Author</th>
              <th className="p-4 border border-gray-600 text-left">Language</th>
              <th className="p-4 border border-gray-600 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {books.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-600">
                  No books available.
                </td>
              </tr>
            ) : (
              books.map((book, index) => (
                <tr
                  key={book.gutenberg_id}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="p-4 border border-gray-300">{book.gutenberg_id}</td>
                  <td className="p-4 border border-gray-300">{book.title}</td>
                  <td className="p-4 border border-gray-300">
                    {book.author || "Unknown"}
                  </td>
                  <td className="p-4 border border-gray-300">{book.language || "N/A"}</td>
                  <td className="p-4 border border-gray-300">{book.category || "N/A"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
