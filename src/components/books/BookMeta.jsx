"use client";

import {
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

export default function BookMeta({
  book,
}) {
  return (
    <div className="rounded-2xl border bg-gray-50 p-6">
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Status</span>

          <span
            className={`font-semibold ${
              book.available
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {book.available
              ? "Available"
              : "Checked Out"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <FaCalendarAlt />

            Date Added
          </span>

          <span>
            {new Date(
              book.createdAt
            ).toLocaleDateString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <FaUser />

            Librarian
          </span>

          <span>
            {book.librarianName}
          </span>
        </div>
      </div>
    </div>
  );
}