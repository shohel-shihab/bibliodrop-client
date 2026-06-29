"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function DeliveryHistoryRow({
  delivery,
}) {
  const handleCancel = async () => {
    const result = await Swal.fire({
      title: "Cancel Delivery Request?",
      text: "This request will be cancelled.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7c3aed",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/delivery-request/${delivery._id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Delivery request cancelled.");

        window.location.reload();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const badgeColor = {
    Pending:
      "bg-yellow-100 text-yellow-700",

    Dispatched:
      "bg-blue-100 text-blue-700",

    Delivered:
      "bg-green-100 text-green-700",

    Cancelled:
      "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-b last:border-none">

      {/* Book */}

      <td className="px-6 py-5">
        <div>
          <h3 className="font-semibold">
            {delivery.title}
          </h3>

          <p className="text-sm text-gray-500">
            ID: {delivery.bookId}
          </p>
        </div>
      </td>

      {/* Librarian */}

      <td className="px-6 py-5">
        {delivery.librarianEmail}
      </td>

      {/* Delivery Fee */}

      <td className="px-6 py-5 font-semibold">
        ৳ {delivery.deliveryFee}
      </td>

      {/* Request Date */}

      <td className="px-6 py-5">
        {new Date(
          delivery.requestDate
        ).toLocaleDateString()}
      </td>

      {/* Status */}

      <td className="px-6 py-5 text-center">
        <span
          className={`rounded-full px-4 py-1 text-sm font-medium ${
            badgeColor[delivery.status]
          }`}
        >
          {delivery.status}
        </span>
      </td>

      {/* Action */}

      <td className="px-6 py-5">
        <div className="flex items-center justify-center gap-3">

          <Link
            href={`/books/${delivery.bookId}`}
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white transition hover:bg-violet-700"
          >
            View
          </Link>

          {delivery.status === "Pending" && (
            <button
              onClick={handleCancel}
              className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white transition hover:bg-red-600"
            >
              Cancel
            </button>
          )}

        </div>
      </td>

    </tr>
  );
}