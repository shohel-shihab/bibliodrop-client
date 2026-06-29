"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaTruck,
  FaUsers,
} from "react-icons/fa";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-violet-600 to-purple-700 py-24 text-white">

      {/* Animated Background */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl"
      />

      <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-md"
          >
            📚 About BiblioDrop
          </motion.span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
            Bringing Books
            <br />
            Closer To
            <span className="text-yellow-300">
              {" "}
              Everyone
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-violet-100">
            BiblioDrop is a modern book-sharing platform that
            connects readers with local libraries and independent
            book owners. Discover books, request delivery,
            and enjoy reading from the comfort of your home.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/books"
              className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-violet-700 transition hover:scale-105"
            >
              Explore Books
              <FaArrowRight />
            </Link>

            <Link
              href="/register"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-violet-700"
            >
              Become a Librarian
            </Link>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative flex justify-center"
        >

          {/* Main Card */}

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative w-full max-w-md rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
          >

            <div className="space-y-6">

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">

                <div className="rounded-xl bg-yellow-400 p-4 text-2xl text-violet-700">
                  <FaBookOpen />
                </div>

                <div>

                  <h3 className="font-bold">
                    Thousands of Books
                  </h3>

                  <p className="text-sm text-violet-100">
                    Fiction, Academic, Programming & More
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">

                <div className="rounded-xl bg-green-400 p-4 text-2xl text-violet-700">
                  <FaTruck />
                </div>

                <div>

                  <h3 className="font-bold">
                    Fast Delivery
                  </h3>

                  <p className="text-sm text-violet-100">
                    Request books and receive them at your doorstep.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">

                <div className="rounded-xl bg-pink-400 p-4 text-2xl text-violet-700">
                  <FaUsers />
                </div>

                <div>

                  <h3 className="font-bold">
                    Trusted Community
                  </h3>

                  <p className="text-sm text-violet-100">
                    Readers, librarians, and book lovers together.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Floating Icons */}

          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -left-6 top-8 rounded-full bg-yellow-400 p-5 text-3xl text-violet-700 shadow-xl"
          >
            📚
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute -right-4 bottom-10 rounded-full bg-pink-400 p-5 text-3xl shadow-xl"
          >
            ❤️
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}