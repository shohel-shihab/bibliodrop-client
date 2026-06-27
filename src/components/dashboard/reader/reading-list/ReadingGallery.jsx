"use client";

import ReadingBookCard from "./ReadingBookCard";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    status: "Delivered",
    deliveryDate: "25 Jun 2026",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    status: "Returned",
    deliveryDate: "18 Jun 2026",
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    status: "Delivered",
    deliveryDate: "10 Jun 2026",
  },
];

export default function ReadingGallery() {
  if (books.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          No Books Found
        </h2>

        <p className="mt-2 text-gray-500">
          Your reading list is currently empty.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {books.map((book) => (
        <ReadingBookCard
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
}