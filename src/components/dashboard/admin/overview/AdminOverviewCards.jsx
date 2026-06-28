"use client";

import {
  FaUsers,
  FaBook,
  FaTruck,
  FaMoneyBillWave,
} from "react-icons/fa";
import StatsCard from "../../reader/overview/StatsCard";



export default function AdminOverviewCards() {
  const stats = [
    {
      id: 1,
      title: "Total Users",
      value: 1248,
      icon: FaUsers,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Total Books",
      value: 568,
      icon: FaBook,
      bgColor: "bg-violet-100",
      textColor: "text-violet-600",
    },
    {
      id: 3,
      title: "Total Deliveries",
      value: 963,
      icon: FaTruck,
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
    },
    {
      id: 4,
      title: "Total Revenue",
      value: "৳85,200",
      icon: FaMoneyBillWave,
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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