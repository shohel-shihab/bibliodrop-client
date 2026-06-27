"use client"
import {
  FaBookOpen,
  FaTruck,
  FaMoneyBillWave,
} from "react-icons/fa";

import StatsCard from "./StatsCard";

export default function OverviewCards() {
  // Dummy Data (Replace with API data later)
  const stats = [
    {
      id: 1,
      title: "Total Books Read",
      value: 18,
      icon: FaBookOpen,
      bgColor: "bg-violet-100",
      textColor: "text-violet-600",
    },
    {
      id: 2,
      title: "Pending Deliveries",
      value: 3,
      icon: FaTruck,
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
    },
    {
      id: 3,
      title: "Total Delivery Fees",
      value: "৳850",
      icon: FaMoneyBillWave,
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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