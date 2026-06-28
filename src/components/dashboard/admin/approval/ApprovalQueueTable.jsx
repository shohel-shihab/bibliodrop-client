"use client";

import { useEffect, useState } from "react";
import ApprovalRow from "./ApprovalRow";

export default function ApprovalQueueTable() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPendingBooks = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/pending-books`
        );

        const data = await res.json();

        setBooks(data.books || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingBooks();
  }, []);

  if (loading) {
    return (
      <p className="text-center py-10">
        Loading...
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="p-4 text-left">Book</th>
            <th className="p-4 text-left">Author</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-center">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <ApprovalRow
              key={book._id}
              book={book}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}