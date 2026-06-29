"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";

import UserOverviewCards from "@/components/dashboard/reader/UserOverviewCards";
import UserPieChart from "@/components/dashboard/reader/UserPieChart";
import UserStatsChart from "@/components/dashboard/reader/UserStatsChart";

export default function ReaderDashboardPage() {
  const { data: session } = authClient.useSession();

  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchOverview = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/reader/overview?email=${session.user.email}`,
          {
            credentials: "include",
          }
        );

        const data = await res.json();

        if (data.success) {
          setOverview(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, [session]);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <section className="space-y-8">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-800">
          Reader Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back! Here's a quick overview of your reading journey.
        </p>
      </motion.div>

      {/* Quick Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <UserOverviewCards
          stats={overview?.stats}
        />
      </motion.div>

      {/* Charts */}

      <div className="grid gap-8 lg:grid-cols-2">

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <UserPieChart
            data={overview?.pieChart}
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <UserStatsChart
            stats={overview?.stats}
          />
        </motion.div>

      </div>

    </section>
  );
}