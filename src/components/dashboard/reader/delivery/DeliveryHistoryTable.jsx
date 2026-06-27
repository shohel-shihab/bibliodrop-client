"use client";

import DeliveryRow from "./DeliveryRow";

const deliveries = [
  {
    id: 1,
    title: "Atomic Habits",
    fee: 50,
    requestDate: "25 Jun 2026",
    status: "Pending",
  },
  {
    id: 2,
    title: "Clean Code",
    fee: 70,
    requestDate: "22 Jun 2026",
    status: "Dispatched",
  },
  {
    id: 3,
    title: "The Psychology of Money",
    fee: 60,
    requestDate: "18 Jun 2026",
    status: "Delivered",
  },
  {
    id: 4,
    title: "Deep Work",
    fee: 55,
    requestDate: "15 Jun 2026",
    status: "Delivered",
  },
  {
    id: 5,
    title: "Rich Dad Poor Dad",
    fee: 45,
    requestDate: "12 Jun 2026",
    status: "Pending",
  },
];

export default function DeliveryHistoryTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b px-6 py-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Delivery History
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Track all your book delivery requests.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-violet-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Book Title
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