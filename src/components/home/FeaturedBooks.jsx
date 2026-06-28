"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import BookGrid from "../books/BookGrid";
import BookSkeleton from "../books/BookSkeleton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function FeaturedBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/books/featured`
        );

        const data = await res.json();

        setBooks(data.books || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      {/* Heading */}

      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="text-4xl font-black text-gray-900">
          Featured Books
        </h2>

        <p className="mt-3 text-gray-500">
          Discover the newest books added by our librarians.
        </p>
      </motion.div>

      {loading ? (
        <BookSkeleton />
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <BookGrid books={books} />
        </motion.div>
      )}

      {/* View All */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Link
          href="/books"
          className="inline-flex rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-700"
        >
          View All Books →
        </Link>
      </motion.div>
    </section>
  );
}