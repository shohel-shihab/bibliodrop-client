import UsersTable from "@/components/dashboard/admin/users/UsersTable";

export const metadata = {
  title: "Manage Users | BiblioDrop",
};

export default function UsersPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Manage Users
        </h1>

        <p className="mt-2 text-gray-500">
          View all registered users, change their roles, or remove them from
          the platform.
        </p>
      </div>

      <UsersTable />
    </section>
  );
}