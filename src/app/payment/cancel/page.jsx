"use client";

import Link from "next/link";
import { FaTimesCircle, FaHome, FaBookOpen } from "react-icons/fa";

export default function PaymentCancelPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 px-4">
      <div className="w-full max-w-lg rounded-3xl border border-red-100 bg-white p-10 text-center shadow-xl">

        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <FaTimesCircle className="text-6xl text-red-500" />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-bold text-gray-800">
          Payment Cancelled
        </h1>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-600">
          Your payment has been cancelled successfully.
          <br />
          No delivery request has been created.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            href="/books"
            className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-700 hover:shadow-lg"
          >
            <FaBookOpen />
            Browse Books
          </Link>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
          >
            <FaHome />
            Home
          </Link>

        </div>
      </div>
    </section>
  );
}