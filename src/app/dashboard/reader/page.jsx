import OverviewCards from "@/components/dashboard/reader/overview/OverviewCards";
import ReadingChart from "@/components/dashboard/reader/overview/ReadingChart";
import RecentDeliveryTable from "@/components/dashboard/reader/overview/RecentDeliveryTable";

export default function ReaderDashboardPage() {
  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Reader Dashboard 📚
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back! Here's a quick overview of your reading activity.
        </p>
      </div>

      {/* Statistics */}
      <OverviewCards />

      {/* Chart + Recent Deliveries */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Chart */}
        <div className="xl:col-span-2 rounded-2xl border bg-white p-6 shadow-sm">
          <ReadingChart />
        </div>

        {/* Quick Summary */}
        <div className="rounded-2xl border bg-gradient-to-br from-violet-600 to-indigo-600 p-6 text-white shadow-sm">
          <h2 className="text-xl font-bold">
            Reading Goal
          </h2>

          <p className="mt-3 text-violet-100">
            You've completed
            <span className="mx-1 font-bold text-white">
              18
            </span>
            books this year.
          </p>

          <div className="mt-6">
            <div className="mb-2 flex justify-between text-sm">
              <span>Progress</span>
              <span>72%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-violet-300">
              <div className="h-full w-[72%] rounded-full bg-white"></div>
            </div>
          </div>

          <p className="mt-5 text-sm text-violet-100">
            Keep reading to achieve your yearly target of
            <span className="font-semibold text-white">
              {" "}25 books.
            </span>
          </p>
        </div>
      </div>

      {/* Recent Delivery Table */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <RecentDeliveryTable />
      </div>
    </section>
  );
}