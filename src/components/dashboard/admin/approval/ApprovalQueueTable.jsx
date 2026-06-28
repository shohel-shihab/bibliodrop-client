"use client";

import { useEffect, useState } from "react";
import ApprovalRow from "./ApprovalRow";

export default function ApprovalQueueTable() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
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

    fetchBooks();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (books.length === 0) {
    return (
      <div className="rounded-xl border p-8 text-center">
        <h2 className="text-xl font-semibold">
          No Pending Books
        </h2>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full">
        <thead className="bg-violet-50">
          <tr>
            <th className="px-6 py-4 text-left">Title</th>
            <th className="px-6 py-4 text-left">Author</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <ApprovalRow
              key={book._id}
              book={book}
              setBooks={setBooks}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}