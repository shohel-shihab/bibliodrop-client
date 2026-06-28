"use client";

import { FaBookOpen } from "react-icons/fa";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-violet-300 bg-violet-50 py-20 text-center">
      <FaBookOpen
        size={70}
        className="mb-6 text-violet-500"
      />

      <h2 className="text-3xl font-bold text-gray-800">
        No Books Found
      </h2>

      <p className="mt-3 max-w-md text-gray-500">
        We couldn't find any books matching your search or selected category.
        Try changing the filters and search again.
      </p>
    </div>
  );
}