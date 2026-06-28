import ApprovalQueueTable from "@/components/dashboard/admin/approval/ApprovalQueueTable";

export const metadata = {
  title: "Book Approval Queue | BiblioDrop",
};

export default function ApprovalQueuePage() {
  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Book Approval Queue
          </h1>

          <p className="mt-2 text-gray-500">
            Review newly submitted books from librarians. Approve and publish
            books or remove inappropriate submissions.
          </p>
        </div>
      </div>

      {/* Information Card */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="mb-2 text-lg font-semibold text-amber-700">
          Approval Rules
        </h3>

        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>
            Every newly submitted book starts with
            <span className="font-semibold text-amber-600">
              {" "}Pending Approval
            </span>
            .
          </li>

          <li>
            Approving a book immediately changes its status to
            <span className="font-semibold text-green-600">
              {" "}Published
            </span>
            .
          </li>

          <li>
            Published books become visible on the public Browse Books page.
          </li>

          <li>
            Deleting a submission permanently removes it from the platform.
          </li>
        </ul>
      </div>

      {/* Approval Table */}
      <ApprovalQueueTable />
    </section>
  );
}