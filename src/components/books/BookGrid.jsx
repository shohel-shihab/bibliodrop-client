"use client";

import BookCard from "./BookCard";

export default function BookGrid({ books }) {
  return (
    <section className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookCard
          key={book._id}
          book={book}
        />
      ))}
    </section>
  );
}