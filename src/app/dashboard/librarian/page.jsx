import LibrarianOverviewCards from "@/components/dashboard/librarian/overview/LibrarianOverviewCards";
import EarningsChart from "@/components/dashboard/librarian/overview/EarningsChart";
import PopularBooks from "@/components/dashboard/librarian/overview/PopularBooks";

export const metadata = {
  title: "Librarian Dashboard | BiblioDrop",
};

export default function LibrarianDashboardPage() {
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
      <LibrarianOverviewCards />

      {/* Chart & Popular Books */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Earnings Chart */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-2">
          <EarningsChart />
        </div>

        {/* Popular Books */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <PopularBooks />
        </div>
      </div>
    </section>
  );
}