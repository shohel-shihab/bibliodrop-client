"use client";

import { useEffect, useState } from "react";

import AdminOverviewCards from "@/components/dashboard/admin/overview/AdminOverviewCards";
import RevenueChart from "@/components/dashboard/admin/overview/RevenueChart";
import CategoryPieChart from "@/components/dashboard/admin/overview/CategoryPieChart";

export default function AdminDashboardPage() {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/admin/overview`
        );

        const data = await res.json();

        setOverview(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500">
          Monitor your platform statistics.
        </p>
      </div>

      <AdminOverviewCards
        stats={overview.stats}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart
         revenue={overview.stats.totalRevenue}
        />

        <CategoryPieChart
          data={overview.categories}
        />
      </div>
    </section>
  );
}