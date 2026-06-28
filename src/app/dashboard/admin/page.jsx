import AdminOverviewCards from "@/components/dashboard/admin/overview/AdminOverviewCards";
import RevenueChart from "@/components/dashboard/admin/overview/RevenueChart";
import CategoryPieChart from "@/components/dashboard/admin/overview/CategoryPieChart";

export const metadata = {
  title: "Admin Dashboard | BiblioDrop",
};

export default function AdminDashboardPage() {
  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard 👨‍💼
        </h1>

        <p className="mt-2 text-gray-500">
          Monitor platform activity, approve books, manage users, and track
          revenue from one place.
        </p>
      </div>

      {/* Overview Cards */}
      <AdminOverviewCards />

      {/* Charts */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Revenue Chart */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-2">
          <RevenueChart />
        </div>

        {/* Pie Chart */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <CategoryPieChart />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
          <h3 className="text-lg font-semibold text-violet-700">
            Pending Approvals
          </h3>

          <p className="mt-2 text-3xl font-bold text-violet-800">
            12
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Books waiting for approval.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h3 className="text-lg font-semibold text-emerald-700">
            Active Librarians
          </h3>

          <p className="mt-2 text-3xl font-bold text-emerald-800">
            24
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Currently managing books.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-semibold text-blue-700">
            Today's Deliveries
          </h3>

          <p className="mt-2 text-3xl font-bold text-blue-800">
            36
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Delivery requests today.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="text-lg font-semibold text-amber-700">
            Revenue Today
          </h3>

          <p className="mt-2 text-3xl font-bold text-amber-800">
            ৳5,250
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Platform earnings today.
          </p>
        </div>
      </div>
    </section>
  );
}
