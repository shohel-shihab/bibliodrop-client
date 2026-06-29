"use client";

import ReadingBookCard from "./ReadingBookCard";



export default function ReadingListGrid({ books }) {
  if (!books?.length) {
    return (
      <div className="rounded-2xl bg-white py-20 text-center shadow">
        <h2 className="text-2xl font-semibold text-gray-700">
          No Books Found
        </h2>

        <p className="mt-3 text-gray-500">
          Your delivered books will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {books.map((book) => (
        <ReadingBookCard
          key={book._id}
          book={book}
        />
      ))}
    </div>
  );
}