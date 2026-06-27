"use client";

import StatusBadge from "./StatusBadge";

export default function DeliveryRow({ delivery }) {
  return (
    <tr className="border-b transition hover:bg-gray-50">
      <td className="px-6 py-4 font-medium text-gray-800">
        {delivery.title}
      </td>

      <td className="px-6 py-4">
        ৳{delivery.fee}
      </td>

      <td className="px-6 py-4 text-gray-600">
        {delivery.requestDate}
      </td>

      <td className="px-6 py-4 text-center">
        <StatusBadge status={delivery.status} />
      </td>
    </tr>
  );
}