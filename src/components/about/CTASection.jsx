"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaUserPlus,
} from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-violet-600 to-purple-700 py-24 text-white">

      {/* Animated Background */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl"
      />

      {/* Floating Icons */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-10 top-16 hidden rounded-full bg-white/15 p-5 text-3xl backdrop-blur-lg lg:block"
      >
        📚
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-16 bottom-16 hidden rounded-full bg-white/15 p-5 text-3xl backdrop-blur-lg lg:block"
      >
        ❤️
      </motion.div>

      <div className="container relative mx-auto px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-md">
            Join The BiblioDrop Community
          </span>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight lg:text-6xl">
            Ready To Start
            <br />
            Your Reading Journey?
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-violet-100 mb-8">
            Discover thousands of books, connect with trusted
            libraries, request doorstep delivery, and become part
            of Bangladesh's growing reading community.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Link
                href="/books"
                className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-violet-700 shadow-xl transition hover:bg-gray-100"
              >
                <FaBookOpen />
                Explore Books
                <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Link
                href="/register"
                className="flex items-center gap-3 rounded-2xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-violet-700"
              >
                <FaUserPlus />
                Become a Librarian
              </Link>
            </motion.div>

          </div>

          {/* Bottom Stats */}

          <div className=" grid gap-8 md:grid-cols-3 sm:grid-cols-3">

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg"
            >
              <h3 className="text-4xl font-bold">
                12K+
              </h3>

              <p className="mt-2 text-violet-100">
                Books Available
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg"
            >
              <h3 className="text-4xl font-bold">
                8K+
              </h3>

              <p className="mt-2 text-violet-100">
                Happy Readers
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg"
            >
              <h3 className="text-4xl font-bold">
                320+
              </h3>

              <p className="mt-2 text-violet-100">
                Trusted Libraries
              </p>
            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}