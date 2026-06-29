"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaBook,
  FaUser,
  FaTag,
  FaMoneyBillWave,
  FaEye,
} from "react-icons/fa";

export default function ReadingBookCard({ book }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
    >
      {/* Book Image */}

      <div className="relative h-64 w-full">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}

      <div className="space-y-4 p-5">

        {/* Title */}

        <h2 className="line-clamp-1 text-xl font-bold text-gray-800">
          {book.title}
        </h2>

        {/* Author */}

        <div className="flex items-center gap-2 text-gray-600">
          <FaUser className="text-violet-600" />
          <span>{book.author}</span>
        </div>

        {/* Category */}

        <div className="flex items-center gap-2 text-gray-600">
          <FaTag className="text-violet-600" />
          <span>{book.category}</span>
        </div>

        {/* Delivery Fee */}

        <div className="flex items-center gap-2 text-gray-600">
          <FaMoneyBillWave className="text-green-600" />
          <span>৳ {book.deliveryFee}</span>
        </div>

        {/* Status */}

        <div>
          <span
            className={`rounded-full px-4 py-1 text-sm font-semibold ${
              book.status === "Delivered"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {book.status}
          </span>
        </div>

        {/* Button */}

        <Link
          href={`/books/${book._id}`}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white transition hover:bg-violet-700"
        >
          <FaEye />
          View Details
        </Link>

      </div>
    </motion.div>
  );
}