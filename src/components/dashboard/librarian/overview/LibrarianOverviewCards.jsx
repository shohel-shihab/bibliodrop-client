"use client";

import {
  FaBook,
  FaMoneyBillWave,
  FaTruck,
} from "react-icons/fa";
import StatsCard from "../../reader/overview/StatsCard";


export default function LibrarianOverviewCards() {
  const stats = [
    {
      id: 1,
      title: "Total Books Listed",
      value: 56,
      icon: FaBook,
      bgColor: "bg-violet-100",
      textColor: "text-violet-600",
    },
    {
      id: 2,
      title: "Total Earnings",
      value: "৳18,650",
      icon: FaMoneyBillWave,
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
    },
    {
      id: 3,
      title: "Pending Requests",
      value: 12,
      icon: FaTruck,
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => (
        <StatsCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          bgColor={stat.bgColor}
          textColor={stat.textColor}
        />
      ))}
    </section>
  );
}