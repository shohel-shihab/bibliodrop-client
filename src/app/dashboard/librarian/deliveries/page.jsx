import DeliveryTable from "@/components/dashboard/librarian/deliveries/DeliveryTable";

export const metadata = {
  title: "Manage Deliveries | BiblioDrop",
};

export default function DeliveriesPage() {
  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Manage Deliveries
          </h1>

          <p className="mt-2 text-gray-500">
            Track and update the status of every book delivery request.
          </p>
        </div>
      </div>

      {/* Information Card */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="mb-2 text-lg font-semibold text-blue-700">
          Delivery Workflow
        </h3>

        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>
            Every request begins with
            <span className="font-semibold text-amber-600">
              {" "}Pending
            </span>
            .
          </li>

          <li>
            Once the book is shipped, change the status to
            <span className="font-semibold text-blue-600">
              {" "}Dispatched
            </span>
            .
          </li>

          <li>
            After successful delivery, update the status to
            <span className="font-semibold text-green-600">
              {" "}Delivered
            </span>
            .
          </li>

          <li>
            Readers can view these updates from their dashboard.
          </li>
        </ul>
      </div>

      {/* Delivery Table */}
      <DeliveryTable />
    </section>
  );
}