export default function PopularBooks({books}) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="mb-4 text-xl font-bold">
        My Books
      </h2>

      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        books.map((book) => (
          <div
            key={book._id}
            className="mb-3 rounded-lg border p-3"
          >
            <h3 className="font-semibold">
              {book.title}
            </h3>

            <p className="text-sm text-gray-500">
              {book.category}
            </p>

            <p className="text-sm font-medium">
              {book.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}