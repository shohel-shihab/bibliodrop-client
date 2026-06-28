"use client";

import {
  FaBook,
  FaMoneyBillWave,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

import StatsCard from "../../reader/overview/StatsCard";

export default function LibrarianOverviewCards({ stats }) {
  if (!stats) return null;

  const cards = [
    {
      id: 1,
      title: "Total Books",
      value: stats.totalBooks,
      icon: FaBook,
      bgColor: "bg-violet-100",
      textColor: "text-violet-600",
    },
    {
      id: 2,
      title: "Pending Books",
      value: stats.pendingBooks,
      icon: FaTruck,
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
    },
    {
      id: 3,
      title: "Published Books",
      value: stats.publishedBooks,
      icon: FaCheckCircle,
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
    },
    {
      id: 4,
      title: "Unpublished",
      value: stats.unpublishedBooks,
      icon: FaMoneyBillWave,
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
  ];

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatsCard
          key={card.id}
          title={card.title}
          value={card.value}
          icon={card.icon}
          bgColor={card.bgColor}
          textColor={card.textColor}
        />
      ))}
    </section>
  );
}