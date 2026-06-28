"use client";

import { useState } from "react";
import { FaSave } from "react-icons/fa";
import DeliveryStatusSelect from "./DeliveryStatusSelect";

export default function DeliveryRow({
  delivery,
}) {
  const [status, setStatus] = useState(
    delivery.status
  );

  const handleSave = () => {
    // Later connect with backend
    console.log({
      id: delivery.id,
      status,
    });

    alert("Status Updated");
  };

  return (
    <tr className="border-b transition hover:bg-violet-50">
      <td className="px-6 py-4 font-medium">
        {delivery.client}
      </td>

      <td className="px-6 py-4">
        {delivery.book}
      </td>

      <td className="px-6 py-4">
        {delivery.date}
      </td>

      <td className="px-6 py-4">
        <DeliveryStatusSelect
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        />
      </td>

      <td className="px-6 py-4">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-700"
        >
          <FaSave />

          Save
        </button>
      </td>
    </tr>
  );
}