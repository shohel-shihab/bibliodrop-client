"use client";

import Image from "next/image";
import { FaFire } from "react-icons/fa";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    requests: 45,
    image: "/books/book1.jpg",
  },
  {
    id: 2,
    title: "Clean Code",
    requests: 38,
    image: "/books/book2.jpg",
  },
  {
    id: 3,
    title: "Deep Work",
    requests: 30,
    image: "/books/book3.jpg",
  },
  {
    id: 4,
    title: "The Psychology of Money",
    requests: 26,
    image: "/books/book4.jpg",
  },
];

export default function PopularBooks() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Most Requested Books
        </h2>

        <p className="text-sm text-gray-500">
          Books with the highest delivery requests.
        </p>
      </div>

      <div className="space-y-5">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex items-center gap-4 rounded-xl border p-3 transition hover:bg-violet-50"
          >
            <Image
              src={book.image}
              alt={book.title}
              width={60}
              height={80}
              className="rounded-lg object-cover"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                {book.title}
              </h3>

              <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                <FaFire className="text-orange-500" />
                {book.requests} Requests
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}