"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  FaHome,
  FaArrowLeft,
  FaBookOpen,
} from "react-icons/fa";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-100 px-6">
      {/* Background Blobs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Floating Icon */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-2xl"
        >
          <FaBookOpen className="text-6xl text-violet-600" />
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-8xl font-black text-transparent md:text-9xl"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-6 text-4xl font-bold text-gray-800"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-600"
        >
          The page you're looking for doesn't exist or may have been
          moved. Let's get you back to exploring amazing books on
          <span className="font-semibold text-violet-600">
            {" "}
            BiblioDrop
          </span>
          .
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700"
          >
            <FaHome />
            Back to Home
          </Link>

          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-violet-600 px-8 py-4 font-semibold text-violet-600 transition hover:bg-violet-50"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </motion.div>
      </div>
    </section>
  );
}