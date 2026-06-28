"use client";

export default function BookStatusBadge({ status }) {
  const styles = {
    Published: "bg-green-100 text-green-700",
    Unpublished: "bg-gray-100 text-gray-700",
    "Pending Approval": "bg-amber-100 text-amber-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}