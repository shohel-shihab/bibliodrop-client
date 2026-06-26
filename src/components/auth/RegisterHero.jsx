"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaTruck,
  FaUsers,
} from "react-icons/fa";

export default function RegisterHero() {
  return (
    <div className="relative hidden min-h-[750px] overflow-hidden lg:flex">
      {/* Background Image */}
      <Image
        src="/login.jpg"
        alt="Library"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-violet-900/60 to-black/80" />

      {/* Animated Blob 1 */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-8 top-10 h-56 w-56 rounded-full bg-violet-500/20 blur-[120px]"
      />

      {/* Animated Blob 2 */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-[140px]"
      />

      {/* Floating Book */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute right-12 top-12 rounded-3xl bg-white/10 p-5 backdrop-blur-md"
      >
        <FaBookOpen className="text-5xl text-white" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center p-14 text-white">
        <motion.span
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 w-fit rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-md"
        >
          📚 Welcome to BiblioDrop
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg text-5xl font-black leading-tight"
        >
          Read More.
          <br />
          Share More.
          <br />
          Discover More.
        </motion.h1>

    
 

      
      </div>
    </div>
  );
}