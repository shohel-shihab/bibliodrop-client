"use client";

import BookRow from "./BookRow";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    librarian: "Shohel Rana",
    category: "Self Development",
    status: "Published",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    librarian: "John Doe",
    category: "Programming",
    status: "Published",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    librarian: "Alice Smith",
    category: "Productivity",
    status: "Pending Approval",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    librarian: "David Brown",
    category: "Business",
    status: "Unpublished",
  },
];

export default function AllBooksTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b px-6 py-5">
        <h2 className="text-2xl font-bold text-gray-800">
          All Books
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Manage every book available on the platform.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-violet-50">
            <tr>
              <th className="px-6 py-4 text-left">
                Title
              </th>

              <th className="px-6 py-4 text-left">
                Author
              </th>

              <th className="px-6 py-4 text-left">
                Librarian
              </th>

              <th className="px-6 py-4 text-left">
                Category
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <BookRow
                key={book.id}
                book={book}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}