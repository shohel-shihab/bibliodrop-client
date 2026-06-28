"use client";

import {
  FaBook,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function BookInfo({
  book,
}) {
  return (
    <div className="space-y-5">
      <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
        {book.category}
      </span>

      <h1 className="text-4xl font-bold text-gray-900">
        {book.title}
      </h1>

      <div className="flex items-center gap-2 text-lg text-gray-600">
        <FaBook />

        <span>{book.author}</span>
      </div>

      <div className="flex items-center gap-2 text-2xl font-bold text-emerald-600">
        <FaMoneyBillWave />

        <span>
          ৳ {book.deliveryFee}
        </span>
      </div>
    </div>
  );
}