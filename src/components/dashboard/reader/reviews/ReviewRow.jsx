"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import {
  FaStar,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import ReviewModal from "./ReviewModal";

export default function ReviewRow({
  review,
  setReviews,
  mobile = false,
}) {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Delete Review?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7C3AED",
      cancelButtonColor: "#EF4444",
      confirmButtonText: "Delete",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews/${review._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Review deleted.");

        setReviews((prev) =>
          prev.filter((item) => item._id !== review._id)
        );
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete review.");
    }
  };

  if (mobile) {
    return (
      <>
        <div className="flex gap-3">

          <button
            onClick={() => setOpen(true)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-white hover:bg-violet-700"
          >
            <FaEdit />
            Edit
          </button>

          <button
            onClick={handleDelete}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            <FaTrash />
            Delete
          </button>

        </div>

        <ReviewModal
          open={open}
          setOpen={setOpen}
          review={review}
          setReviews={setReviews}
        />
      </>
    );
  }

  return (
    <>
      <tr className="border-b hover:bg-gray-50">

        {/* Book */}

        <td className="px-6 py-5 font-medium">
          {review.bookTitle}
        </td>

        {/* Rating */}

        <td className="px-6 py-5">
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={
                  star <= review.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
        </td>

        {/* Review */}

        <td className="max-w-sm px-6 py-5">
          {review.comment}
        </td>

        {/* Date */}

        <td className="px-6 py-5 text-center">
          {new Date(
            review.createdAt
          ).toLocaleDateString()}
        </td>

        {/* Actions */}

        <td className="px-6 py-5">
          <div className="flex justify-center gap-3">

            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-white hover:bg-violet-700"
            >
              <FaEdit />
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              <FaTrash />
              Delete
            </button>

          </div>
        </td>

      </tr>

      <ReviewModal
        open={open}
        setOpen={setOpen}
        review={review}
        setReviews={setReviews}
      />
    </>
  );
}