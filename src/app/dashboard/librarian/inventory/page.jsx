import InventoryTable from "@/components/dashboard/librarian/inventory/InventoryTable";

export const metadata = {
  title: "Manage Inventory | BiblioDrop",
};

export default function InventoryPage() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Manage Inventory
          </h1>

          <p className="mt-2 text-gray-500">
            View, edit, delete and manage the publishing status of all your
            listed books.
          </p>
        </div>
      </div>

      {/* Information Card */}
      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
        <h3 className="mb-2 text-lg font-semibold text-violet-700">
          Publishing Rules
        </h3>

        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>
            Every newly added book starts with
            <span className="font-semibold text-amber-600">
              {" "}
              Pending Approval
            </span>
            .
          </li>

          <li>
            Only the administrator can approve a pending book.
          </li>

          <li>
            Once approved, you can switch between
            <span className="font-semibold text-green-600">
              {" "}
              Published
            </span>
            {" "}and
            <span className="font-semibold text-gray-700">
              {" "}Unpublished
            </span>
            .
          </li>

          <li>
            You cannot publish a book that is still pending approval.
          </li>
        </ul>
      </div>

      {/* Inventory Table */}
      <InventoryTable />
    </section>
  );
}