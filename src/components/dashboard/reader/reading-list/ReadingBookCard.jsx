"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaBookOpen, FaCalendarAlt } from "react-icons/fa";

export default function ReadingBookCard({ book }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
    >
      {/* Book Cover */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover transition duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-gray-800">
            {book.title}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            by {book.author}
          </p>
        </div>

        {/* Category */}
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
            {book.category}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              book.status === "Returned"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {book.status}
          </span>
        </div>

        {/* Delivery Date */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaCalendarAlt />

          <span>{book.deliveryDate}</span>
        </div>

        {/* Button */}
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-medium text-white transition hover:bg-violet-700">
          <FaBookOpen />

          View Details
        </button>
      </div>
    </motion.div>
  );
}