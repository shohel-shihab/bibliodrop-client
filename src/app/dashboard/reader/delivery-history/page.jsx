import DeliveryHistoryTable from "@/components/dashboard/reader/delivery/DeliveryHistoryTable";

export default function DeliveryHistoryPage() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Delivery History
        </h1>

        <p className="mt-2 text-gray-500">
          View the status of all your book delivery requests.
        </p>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <DeliveryHistoryTable />
      </div>
    </section>
  );
}