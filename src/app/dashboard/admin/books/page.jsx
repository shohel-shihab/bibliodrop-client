import AllBooksTable from "@/components/dashboard/admin/books/AllBooksTable";

export const metadata = {
  title: "Manage Books | BiblioDrop",
};

export default function ManageBooksPage() {
  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Manage All Books
          </h1>

          <p className="mt-2 text-gray-500">
            View every book on the platform, manage publishing status, and
            remove listings when necessary.
          </p>
        </div>
      </div>

      {/* Information Card */}
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
        <h3 className="mb-2 text-lg font-semibold text-red-700">
          Admin Permissions
        </h3>

        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>
            You can view every book submitted by librarians.
          </li>

          <li>
            You can force publish or unpublish any book.
          </li>

          <li>
            You can permanently delete any listing.
          </li>

          <li>
            Books marked as <strong>Pending Approval</strong> should normally be
            managed from the <strong>Approval Queue</strong>.
          </li>
        </ul>
      </div>

      {/* Books Table */}
      <AllBooksTable />
    </section>
  );
}