"use client";

import { motion } from "framer-motion";
import { HiArrowTrendingUp } from "react-icons/hi2";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  bgColor,
  textColor,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
    >
      {/* Decorative Circle */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-50 transition group-hover:scale-110" />

      <div className="relative flex items-start justify-between">
        {/* Left */}
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-800">
            {value}
          </h2>

          <div className="mt-5 flex items-center gap-2 text-sm text-emerald-600">
            <HiArrowTrendingUp />

            <span>12% this month</span>
          </div>
        </div>

        {/* Right Icon */}
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${bgColor}`}
        >
          <Icon
            className={`${textColor} text-3xl`}
          />
        </div>
      </div>
    </motion.div>
  );
}