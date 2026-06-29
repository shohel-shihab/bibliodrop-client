"use client";

import Link from "next/link";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaEye, FaTimesCircle } from "react-icons/fa";

export default function DeliveryHistoryRow({
  delivery,
  setDeliveries,
  mobile = false,
}) {
  const handleCancel = async () => {
    const result = await Swal.fire({
      title: "Cancel Delivery?",
      text: "Are you sure you want to cancel this delivery request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel",
      confirmButtonColor: "#7C3AED",
      cancelButtonColor: "#EF4444",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/delivery-request/${delivery._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Delivery request cancelled.");

        setDeliveries((prev) =>
          prev.filter((item) => item._id !== delivery._id)
        );
      } else {
        toast.error(data.message || "Failed to cancel request.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const badgeColor = {
    Pending: "bg-yellow-100 text-yellow-700",
    Dispatched: "bg-blue-100 text-blue-700",
    Delivered: "bg-green-100 text-green-700",
  };

  if (mobile) {
    return (
      <div className="flex gap-3">

        <Link
          href={`/books/${delivery.bookId}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-700"
        >
          <FaEye />
          View Book
        </Link>

        {delivery.status === "Pending" && (
          <button
            onClick={handleCancel}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600"
          >
            <FaTimesCircle />
            Cancel
          </button>
        )}

      </div>
    );
  }

  return (
    <tr className="border-b hover:bg-gray-50">

      {/* Book Title */}

      <td className="px-6 py-5 font-medium text-gray-800">
        {delivery.title}
      </td>

      {/* Delivery Fee */}

      <td className="px-6 py-5 text-center">
        ৳ {delivery.deliveryFee}
      </td>

      {/* Request Date */}

      <td className="px-6 py-5 text-center">
        {new Date(
          delivery.requestDate
        ).toLocaleDateString()}
      </td>

      {/* Status */}

      <td className="px-6 py-5 text-center">
        <span
          className={`rounded-full px-4 py-1 text-sm font-semibold ${
            badgeColor[delivery.status]
          }`}
        >
          {delivery.status}
        </span>
      </td>

      {/* Actions */}

      <td className="px-6 py-5">
        <div className="flex justify-center gap-3">

          <Link
            href={`/books/${delivery.bookId}`}
            className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-700"
          >
            <FaEye />
            View
          </Link>

          {delivery.status === "Pending" && (
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
            >
              <FaTimesCircle />
              Cancel
            </button>
          )}

        </div>
      </td>

    </tr>
  );
}