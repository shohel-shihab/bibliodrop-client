import TransactionsTable from "@/components/dashboard/admin/transactions/TransactionsTable";

export const metadata = {
  title: "Transactions | BiblioDrop",
};

export default function TransactionsPage() {
  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            View All Transactions
          </h1>

          <p className="mt-2 text-gray-500">
            Monitor every payment made on the platform, including reader,
            librarian, amount, and transaction history.
          </p>
        </div>
      </div>

      {/* Information Card */}
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <h3 className="mb-2 text-lg font-semibold text-emerald-700">
          Transaction Information
        </h3>

        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>
            Every successful book delivery payment appears in this table.
          </li>

          <li>
            Administrators can review the complete transaction history.
          </li>

          <li>
            Use this page to monitor platform revenue and payment activity.
          </li>

          <li>
            Future improvements may include payment status, filtering, and
            export options.
          </li>
        </ul>
      </div>

      {/* Transactions Table */}
      <TransactionsTable />
    </section>
  );
}