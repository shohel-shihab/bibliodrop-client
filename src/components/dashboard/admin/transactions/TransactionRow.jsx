"use client";

export default function TransactionRow({ transaction }) {
  return (
    <tr className="border-b transition hover:bg-violet-50">
      <td className="px-6 py-4 font-mono text-sm">
        {transaction.transactionId}
      </td>

      <td className="px-6 py-4">
        {transaction.readerEmail}
      </td>

      <td className="px-6 py-4">
        {transaction.librarianEmail}
      </td>

      <td className="px-6 py-4 font-semibold text-emerald-600">
        ৳{transaction.amount}
      </td>

      <td className="px-6 py-4">
        {transaction.date}
      </td>
    </tr>
  );
}