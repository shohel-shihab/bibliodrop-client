"use client";

import { motion } from "framer-motion";
import {
  FaStar,
  FaRegStar,
  FaEdit,
  FaTrash,
  FaBookOpen,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ReviewCard({ review }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
    >
      {/* Book Title */}
      <div className="flex items-center gap-2">
        <FaBookOpen className="text-violet-600" />

        <h2 className="text-xl font-bold text-gray-800">
          {review.bookTitle}
        </h2>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) =>
          star <= review.rating ? (
            <FaStar
              key={star}
              className="text-yellow-400"
            />
          ) : (
            <FaRegStar
              key={star}
              className="text-gray-300"
            />
          )
        )}
      </div>

      {/* Review */}
      <p className="mt-4 leading-7 text-gray-600">
        {review.comment}
      </p>

      {/* Date */}
      <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
        <FaCalendarAlt />

        <span>{review.date}</span>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <button
          className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2 text-white transition hover:bg-violet-700"
        >
          <FaEdit />

          Edit
        </button>

        <button
          className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
        >
          <FaTrash />

          Delete
        </button>
      </div>
    </motion.div>
  );
}