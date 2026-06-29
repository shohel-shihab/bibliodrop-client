"use client";

import DeliveryHistoryRow from "./DeliveryHistoryRow";

export default function DeliveryHistoryTable({ deliveries }) {
  if (deliveries.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          No Delivery History
        </h2>

        <p className="mt-3 text-gray-500">
          You haven't requested any book deliveries yet.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full">

        {/* Table Header */}

        <thead className="bg-violet-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Book
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Librarian
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Delivery Fee
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Request Date
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
              Status
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
              Action
            </th>
          </tr>
        </thead>

        {/* Table Body */}

        <tbody>

          {deliveries.map((delivery) => (
            <DeliveryHistoryRow
              key={delivery._id}
              delivery={delivery}
            />
          ))}

        </tbody>

      </table>
    </div>
  );
}