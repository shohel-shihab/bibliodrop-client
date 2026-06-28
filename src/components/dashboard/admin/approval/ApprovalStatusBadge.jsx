"use client";

export default function ApprovalStatusBadge({ status }) {
  const styles = {
    "Pending Approval":
      "bg-amber-100 text-amber-700",

    Published:
      "bg-emerald-100 text-emerald-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] ||
        "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}