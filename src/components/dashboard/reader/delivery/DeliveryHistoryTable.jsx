"use client";

import DeliveryHistoryRow from "./DeliveryHistoryRow";



export default function DeliveryHistoryTable({
  deliveries,
  setDeliveries,
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">

      {/* Desktop Table */}

      <div className="hidden overflow-x-auto lg:block">
        <table className="min-w-full">

          <thead className="bg-violet-600 text-white">

            <tr>

              <th className="px-6 py-4 text-left">
                Book Title
              </th>

              <th className="px-6 py-4 text-center">
                Delivery Fee
              </th>

              <th className="px-6 py-4 text-center">
                Request Date
              </th>

              <th className="px-6 py-4 text-center">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {deliveries.map((delivery) => (
              <DeliveryHistoryRow
                key={delivery._id}
                delivery={delivery}
                setDeliveries={setDeliveries}
              />
            ))}

          </tbody>

        </table>
      </div>

      {/* Mobile Cards */}

      <div className="space-y-5 p-5 lg:hidden">

        {deliveries.map((delivery) => (
          <div
            key={delivery._id}
            className="rounded-2xl border p-5 shadow-sm"
          >
            <h2 className="text-lg font-bold text-gray-800">
              {delivery.title}
            </h2>

            <div className="mt-4 space-y-2 text-sm text-gray-600">

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-semibold">
                  ৳ {delivery.deliveryFee}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Request Date</span>
                <span>
                  {new Date(
                    delivery.requestDate
                  ).toLocaleDateString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Status</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold
                  ${
                    delivery.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : delivery.status === "Dispatched"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {delivery.status}
                </span>
              </div>

            </div>

            <div className="mt-5">

              <DeliveryHistoryRow
                delivery={delivery}
                setDeliveries={setDeliveries}
                mobile
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}