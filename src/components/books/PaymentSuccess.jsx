"use client";

import Link from "next/link";
import { FaCheckCircle, FaTruck } from "react-icons/fa";

export default function PaymentSuccess() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-100 px-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">

        {/* Success Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <FaCheckCircle className="text-6xl text-green-600" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold text-gray-800">
          Payment Successful 🎉
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg leading-7 text-gray-600">
          Your delivery request has been submitted successfully.
          <br />
          You can now track the delivery status from your dashboard.
        </p>

        {/* Button */}
        <Link
          href="/dashboard/reader/delivery-history"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-700 hover:shadow-lg"
        >
          <FaTruck />
          Delivery History
        </Link>
      </div>
    </section>
  );
}