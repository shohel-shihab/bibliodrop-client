"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaBookOpen } from "react-icons/fa6";

export default function NewsletterSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 max-w-7xl mx-auto"
      >
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />

        {/* Decorative Circles */}
        <div className="absolute left-12 top-12 h-24 w-24 rounded-full border border-white/10" />
        <div className="absolute right-20 bottom-12 h-32 w-32 rounded-full border border-white/10" />

        <div className="relative grid items-center gap-10 lg:grid-cols-2 px-8 py-12 md:px-14 lg:px-16 lg:py-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 backdrop-blur-md">
              <FaBookOpen className="text-yellow-300" />
              <span className="text-sm font-semibold text-white">
                Join BiblioDrop
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Join Our Reading
              <br />
              Community
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-8 text-violet-100 md:text-lg">
              Subscribe to receive the latest book arrivals, exclusive offers,
              librarian recommendations, book delivery updates, and exciting
              reading community events directly in your inbox.
            </p>

            {/* Input */}
            <div className="mt-10 flex flex-col overflow-hidden rounded-full bg-white shadow-2xl sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-5 text-base text-gray-700 outline-none"
              />

              <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-5 font-semibold text-white transition-all duration-300 hover:from-orange-500 hover:to-amber-500 sm:px-10">
                Subscribe

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Rotating Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              className="absolute left-5 top-6 hidden h-36 w-36 items-center justify-center rounded-full border border-white/20 lg:flex"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20">
                <FaBookOpen className="text-3xl text-yellow-300" />
              </div>
            </motion.div>

            {/* Floating Image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/newsletter.png" // Place your illustration inside /public
                alt="Newsletter"
                width={560}
                height={450}
                priority
                className="w-full max-w-md object-contain lg:max-w-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}