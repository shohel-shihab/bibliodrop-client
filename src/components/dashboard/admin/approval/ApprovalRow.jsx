"use client";

import toast from "react-hot-toast";
import {
  FaCheckCircle,
  FaTrash,
} from "react-icons/fa";

import ApprovalStatusBadge from "./ApprovalStatusBadge";

export default function ApprovalRow({
  book,
}) {
  const handleApprove = () => {
    // Backend Integration Later

    toast.success(
      `"${book.title}" has been published.`
    );
  };

  const handleDelete = () => {
    // Backend Integration Later

    toast.success(
      `"${book.title}" has been deleted.`
    );
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
        {book.category}
      </td>

      <td className="px-6 py-4">
        {book.librarian}
      </td>

      <td className="px-6 py-4">
        {book.date}
      </td>

      <td className="px-6 py-4">
        <ApprovalStatusBadge
          status={book.status}
        />
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handleApprove}
            className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white transition hover:bg-emerald-700"
          >
            <FaCheckCircle />

            Approve
          </button>

          <button
            onClick={handleDelete}
            className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-700"
          >
            <FaTrash />

            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}