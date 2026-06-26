"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BannerSlide({ slide }) {
  return (
    <div
      className="relative h-[85vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${slide.image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <span className="inline-block rounded-full bg-violet-600/90 px-4 py-2 text-sm font-medium uppercase tracking-widest">
            Welcome to BiblioDrop
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
            {slide.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-200">
            {slide.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/books"
              className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700"
            >
              {slide.buttonOne}
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              {slide.buttonTwo}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}