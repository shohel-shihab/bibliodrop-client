"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaTrash,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import BookStatusBadge from "./BookStatusBadge";

export default function BookRow({ book }) {
  const [status, setStatus] = useState(book.status);

  const handleToggleStatus = () => {
    let newStatus = status;

    if (status === "Published") {
      newStatus = "Unpublished";
    } else if (status === "Unpublished") {
      newStatus = "Published";
    } else {
      toast.error(
        "Pending books should be approved from the Approval Queue."
      );
      return;
    }

    setStatus(newStatus);

    // Backend integration later

    toast.success(`Book marked as ${newStatus}.`);
  };

  const handleDelete = () => {
    // Backend integration later

    toast.success("Book deleted successfully.");
  };

  return (
    <tr className="border-b transition hover:bg-violet-50">
      <td className="px-6 py-4 font-medium">
        {book.title}
      </td>

      <td className="px-6 py-4">
        {book.author}
      </td>

      <td className="px-6 py-4">
        {book.librarian}
      </td>

      <td className="px-6 py-4">
        {book.category}
      </td>

      <td className="px-6 py-4">
        <BookStatusBadge status={status} />
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          {status !== "Pending Approval" && (
            <button
              onClick={handleToggleStatus}
              className="rounded-lg bg-violet-100 p-2 text-violet-700 transition hover:bg-violet-200"
              title={
                status === "Published"
                  ? "Unpublish Book"
                  : "Publish Book"
              }
            >
              {status === "Published" ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          )}

          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200"
            title="Delete Book"
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}