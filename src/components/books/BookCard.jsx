"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaBook,
  FaMoneyBillWave,
  FaArrowRight,
} from "react-icons/fa";

export default function BookCard({ book }) {
  const isUnavailable = book.available === false;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
    >
      {/* Book Image */}

      <div className="relative h-72 overflow-hidden">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Status Badge */}

        {isUnavailable && (
          <span className="absolute right-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow">
            Unavailable
          </span>
        )}
      </div>

      {/* Content */}

      <div className="space-y-4 p-5">
        {/* Category */}

        <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
          {book.category}
        </span>

        {/* Title */}

        <h2 className="line-clamp-2 text-xl font-bold text-gray-800">
          {book.title}
        </h2>

        {/* Author */}

        <div className="flex items-center gap-2 text-gray-500">
          <FaBook />

          <span>{book.author}</span>
        </div>

        {/* Delivery Fee */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-emerald-600">
            <FaMoneyBillWave />

            <span>৳ {book.deliveryFee}</span>
          </div>

          <Link
            href={`/books/${book._id}`}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
          >
            Details

            <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}