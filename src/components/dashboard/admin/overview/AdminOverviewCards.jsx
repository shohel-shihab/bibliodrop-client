"use client";

import {
  FaBook,
  FaUsers,
  FaMoneyBillWave,
  FaTruck,
} from "react-icons/fa";

import StatsCard from "../../reader/overview/StatsCard";

export default function AdminOverviewCards({
  stats,
}) {
  const cards = [
    {
      id: 1,
      title: "Total Users",
      value: stats.totalUsers,
      icon: FaUsers,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },

    {
      id: 2,
      title: "Total Books",
      value: stats.totalBooks,
      icon: FaBook,
      bgColor: "bg-violet-100",
      textColor: "text-violet-600",
    },

    {
      id: 3,
      title: "Total Deliveries",
      value: stats.totalDeliveries,
      icon: FaTruck,
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },

    {
      id: 4,
      title: "Total Revenue",
      value: `৳${stats.totalRevenue}`,
      icon: FaMoneyBillWave,
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatsCard
          key={card.id}
          {...card}
        />
      ))}
    </section>
  );
}