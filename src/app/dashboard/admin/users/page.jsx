import UsersTable from "@/components/dashboard/admin/users/UsersTable";

export const metadata = {
  title: "Manage Users | BiblioDrop",
};

export default function ManageUsersPage() {
  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Manage Users
          </h1>

          <p className="mt-2 text-gray-500">
            View all registered users, update their roles, and remove accounts
            when necessary.
          </p>
        </div>
      </div>

      {/* Information Card */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="mb-2 text-lg font-semibold text-blue-700">
          User Management
        </h3>

        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>
            Change a user's role to <strong>Reader</strong>,
            <strong> Librarian</strong>, or <strong>Admin</strong>.
          </li>

          <li>
            Deleting a user permanently removes their account and related data.
          </li>

          <li>
            Use role changes carefully, as they immediately affect dashboard
            access and permissions.
          </li>
        </ul>
      </div>

      {/* Users Table */}
      <UsersTable />
    </section>
  );
}