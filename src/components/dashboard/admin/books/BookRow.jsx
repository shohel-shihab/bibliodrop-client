"use client";

import toast from "react-hot-toast";
import Swal from "sweetalert2";

import BookStatusBadge from "./BookStatusBadge";

export default function BookRow({
  book,
  setBooks,
}) {



  const handleUnpublish = async () => {

    const result = await Swal.fire({
      title: "Unpublish Book?",
      text: "This book will no longer appear publicly.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Unpublish",
    });

    if (!result.isConfirmed) return;

    try {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/books/${book._id}/unpublish`,
        {
          method: "PATCH",
        }
      );

      const data = await res.json();

      if (data.success) {

        toast.success("Book Unpublished");

        setBooks((prev) =>
          prev.map((item) =>
            item._id === book._id
              ? {
                  ...item,
                  status: "Unpublished",
                }
              : item
          )
        );

      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };



  const handleDelete = async () => {

    const result = await Swal.fire({
      title: "Delete Book?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    });

    if (!result.isConfirmed) return;

    try {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/books/${book._id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {

        toast.success("Book Deleted");

        setBooks((prev) =>
          prev.filter(
            (item) => item._id !== book._id
          )
        );

      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

  };

  return (
    <tr className="border-b">

      <td className="px-6 py-4">
        {book.title}
      </td>

      <td className="px-6 py-4">
        {book.author}
      </td>

      <td className="px-6 py-4">
        <BookStatusBadge
          status={book.status}
        />
      </td>

      <td className="px-6 py-4">

        <div className="flex gap-2">

        
          {book.status === "Published" && (
            <button
              onClick={handleUnpublish}
              className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
            >
              Unpublish
            </button>
          )}

          {/* Delete */}

          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Delete
          </button>

        </div>

      </td>

    </tr>
  );
}