"use client";

const deliveries = [
  {
    id: 1,
    title: "Atomic Habits",
    fee: 50,
    date: "25 Jun 2026",
    status: "Pending",
  },
  {
    id: 2,
    title: "Clean Code",
    fee: 70,
    date: "22 Jun 2026",
    status: "Dispatched",
  },
  {
    id: 3,
    title: "The Psychology of Money",
    fee: 60,
    date: "20 Jun 2026",
    status: "Delivered",
  },
  {
    id: 4,
    title: "Deep Work",
    fee: 55,
    date: "18 Jun 2026",
    status: "Delivered",
  },
  {
    id: 5,
    title: "Rich Dad Poor Dad",
    fee: 45,
    date: "15 Jun 2026",
    status: "Pending",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-700";

    case "Dispatched":
      return "bg-blue-100 text-blue-700";

    case "Delivered":
      return "bg-green-100 text-green-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function RecentDeliveryTable() {
  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Recent Deliveries
          </h2>

          <p className="text-sm text-gray-500">
            Your latest book delivery requests.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border">
        <table className="min-w-full">
          <thead className="bg-gray-100">
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
              <tr
                key={delivery.id}
                className="border-t transition hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {delivery.title}
                </td>

                <td className="px-6 py-4">
                  ৳{delivery.fee}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {delivery.date}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`rounded-full px-4 py-1 text-xs font-semibold ${getStatusStyle(
                      delivery.status
                    )}`}
                  >
                    {delivery.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}