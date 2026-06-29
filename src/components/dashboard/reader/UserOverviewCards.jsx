"use client";

import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaTruck,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function UserOverviewCards({ stats }) {
  const cards = [
    {
      title: "Books Read",
      value: stats?.totalBooksRead || 0,
      icon: <FaBookOpen />,
      bg: "bg-violet-100",
      color: "text-violet-600",
    },
    {
      title: "Pending Deliveries",
      value: stats?.pendingDeliveries || 0,
      icon: <FaTruck />,
      bg: "bg-amber-100",
      color: "text-amber-600",
    },
    {
      title: "Total Spent",
      value: `৳ ${stats?.totalSpent || 0}`,
      icon: <FaMoneyBillWave />,
      bg: "bg-green-100",
      color: "text-green-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
        >
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-gray-500">
                {card.title}
              </p>

              <h2 className="mt-3 text-4xl font-bold text-gray-800">
                {card.value}
              </h2>
            </div>

            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${card.bg} ${card.color}`}
            >
              {card.icon}
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
}