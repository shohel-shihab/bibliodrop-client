"use client";

import DeliveryRow from "./DeliveryRow";

const deliveries = [
  {
    id: 1,
    client: "Shohel Rana",
    book: "Atomic Habits",
    date: "25 Jun 2026",
    status: "Pending",
  },
  {
    id: 2,
    client: "John Doe",
    book: "Clean Code",
    date: "22 Jun 2026",
    status: "Dispatched",
  },
  {
    id: 3,
    client: "Alice Smith",
    book: "Deep Work",
    date: "20 Jun 2026",
    status: "Delivered",
  },
  {
    id: 4,
    client: "David Brown",
    book: "Rich Dad Poor Dad",
    date: "18 Jun 2026",
    status: "Pending",
  },
];

export default function DeliveryTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b px-6 py-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Delivery Requests
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Update delivery progress for your readers.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-violet-50">
            <tr>
              <th className="px-6 py-4 text-left">
                Reader
              </th>

              <th className="px-6 py-4 text-left">
                Book
              </th>

              <th className="px-6 py-4 text-left">
                Request Date
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {deliveries.map((delivery) => (
              <DeliveryRow
                key={delivery.id}
                delivery={delivery}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}