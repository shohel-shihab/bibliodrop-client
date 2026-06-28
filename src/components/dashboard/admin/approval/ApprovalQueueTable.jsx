"use client";

import ApprovalRow from "./ApprovalRow";

const pendingBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    librarian: "Shohel Rana",
    date: "25 Jun 2026",
    status: "Pending Approval",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    librarian: "John Doe",
    date: "24 Jun 2026",
    status: "Pending Approval",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    librarian: "Alice Smith",
    date: "22 Jun 2026",
    status: "Pending Approval",
  },
];

export default function ApprovalQueueTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}

      <div className="border-b px-6 py-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Pending Books
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Review and publish librarian submissions.
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
                Category
              </th>

              <th className="px-6 py-4 text-left">
                Librarian
              </th>

              <th className="px-6 py-4 text-left">
                Submitted
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
            {pendingBooks.map((book) => (
              <ApprovalRow
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