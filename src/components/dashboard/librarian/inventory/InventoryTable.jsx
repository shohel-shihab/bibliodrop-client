"use client";

import InventoryRow from "./InventoryRow";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    category: "Self Development",
    deliveryFee: 50,
    status: "Published",
  },
  {
    id: 2,
    title: "Deep Work",
    category: "Productivity",
    deliveryFee: 40,
    status: "Pending Approval",
  },
  {
    id: 3,
    title: "Clean Code",
    category: "Programming",
    deliveryFee: 60,
    status: "Unpublished",
  },
];

export default function InventoryTable({books}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b px-6 py-5">
        <h2 className="text-2xl font-bold text-gray-800">
          My Inventory
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Manage all the books you've listed.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-violet-50">
            <tr>
              <th className="px-6 py-4 text-left">
                Book
              </th>

              <th className="px-6 py-4 text-left">
                Category
              </th>

              <th className="px-6 py-4 text-left">
                Delivery Fee
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
            {books?.map((book) => (
              <InventoryRow
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