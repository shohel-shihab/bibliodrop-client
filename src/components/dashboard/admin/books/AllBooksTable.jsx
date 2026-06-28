"use client";

import { useEffect, useState } from "react";

import BookRow from "./BookRow";

export default function AllBooksTable() {

  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchBooks = async () => {

      try {

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/books`
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

  return (

    <div className="overflow-hidden rounded-xl border">

      <table className="min-w-full">

        <thead className="bg-violet-50">

          <tr>

            <th className="px-6 py-4">Book</th>

            <th className="px-6 py-4">Author</th>

            <th className="px-6 py-4">Status</th>

            <th className="px-6 py-4">Actions</th>

          </tr>

        </thead>

        <tbody>

          {
            books.map(book => (
              <BookRow
                key={book._id}
                book={book}
                setBooks={setBooks}
              />
            ))
          }

        </tbody>

      </table>

    </div>

  );
}