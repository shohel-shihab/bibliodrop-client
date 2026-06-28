"use client";
import LibrarianOverviewCards from "@/components/dashboard/librarian/overview/LibrarianOverviewCards";
import EarningsChart from "@/components/dashboard/librarian/overview/EarningsChart";
import PopularBooks from "@/components/dashboard/librarian/overview/PopularBooks";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

// export const metadata = {
//   title: "Librarian Dashboard | BiblioDrop",
// };

export default function LibrarianDashboardPage() {
  const { data: session } =authClient.useSession();
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!session?.user?.email) return;
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/librarian/overview?email=${session?.user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOverview(data);
        setBooks(data.books);
        setLoading(false);
        
      });
  }, [session]);
  if (loading)
    return <p>Loading...</p>;

  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Librarian Dashboard 📚
        </h1>

        <p className="mt-2 text-gray-500">
          Monitor your books, earnings, delivery requests, and library
          performance.
        </p>
      </div>

      {/* Statistics */}
      <LibrarianOverviewCards  stats={overview.stats}/>

      {/* Chart & Popular Books */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Earnings Chart */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-2">
          <EarningsChart />
        </div>

        {/* Popular Books */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <PopularBooks  books={overview.books}/>
        </div>
      </div>
    </section>
  );
}