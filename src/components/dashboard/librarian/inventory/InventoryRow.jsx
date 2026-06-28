"use client";

import {
  FaEdit,
  FaTrash,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import StatusBadge from "./StatusBadge";

export default function InventoryRow({ book }) {
  return (
    <tr className="border-b transition hover:bg-violet-50">
      <td className="px-6 py-4 font-medium">
        {book.title}
      </td>

      <td className="px-6 py-4">
        {book.category}
      </td>

      <td className="px-6 py-4">
        ৳{book.deliveryFee}
      </td>

      <td className="px-6 py-4">
        <StatusBadge
          status={book.status}
        />
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          {/* Edit */}
          <button className="rounded-lg bg-violet-100 p-2 text-violet-600 transition hover:bg-violet-200">
            <FaEdit />
          </button>

          {/* Delete */}
          <button className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200">
            <FaTrash />
          </button>

          {/* Publish / Unpublish */}
          {book.status !==
            "Pending Approval" && (
            <button className="rounded-lg bg-emerald-100 p-2 text-emerald-600 transition hover:bg-emerald-200">
              {book.status ===
              "Published" ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}