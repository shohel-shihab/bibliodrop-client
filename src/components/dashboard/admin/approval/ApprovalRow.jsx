"use client";

import toast from "react-hot-toast";
import Swal from "sweetalert2";

import ApprovalStatusBadge from "./ApprovalStatusBadge";

export default function ApprovalRow({
  book,
  setBooks
}) {

  const handleApprove = async () => {
    console.log("Approve button clicked");

    const result = await Swal.fire({
      title: "Approve Book?",
      text: "This book will become publicly available.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Approve",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/books/${book._id}/approve`,
        {
          method: "PATCH",
        }
      );

      console.log("Status:", res.status);

      const data = await res.json();

      console.log("Response:", data);

      if (data.success) {
        toast.success("Book Published");

        setBooks((prev) =>
          prev.filter((item) => item._id !== book._id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {

    const result = await Swal.fire({

      title: "Delete Book?",

      text: "This action cannot be undone.",

      icon: "warning",

      showCancelButton: true,

      confirmButtonText: "Delete"

    });

    if (!result.isConfirmed) return;

    const res = await fetch(

      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/books/${book._id}`,

      {

        method: "DELETE"

      }

    );

    const data = await res.json();

    if (data.success) {

      toast.success("Book Deleted");

      setBooks(prev =>

        prev.filter(item => item._id !== book._id)

      );

    }

  };

  return (

    <tr className="border-b">

      <td className="px-6 py-5">

        {book.title}

      </td>

      <td className="px-6 py-5">

        {book.author}

      </td>

      <td className="px-6 py-5">

        <ApprovalStatusBadge

          status={book.status}

        />

      </td>

      <td className="px-6 py-5">

        <div className="flex gap-3">

          <button

            onClick={handleApprove}

            className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"

          >

            Approve

          </button>

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