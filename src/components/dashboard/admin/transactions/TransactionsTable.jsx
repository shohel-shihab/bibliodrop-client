"use client";

import TransactionRow from "./TransactionRow";

const transactions = [
  {
    id: 1,
    transactionId: "TXN-100001",
    readerEmail: "reader1@gmail.com",
    librarianEmail: "librarian1@gmail.com",
    amount: 120,
    date: "25 Jun 2026",
  },
  {
    id: 2,
    transactionId: "TXN-100002",
    readerEmail: "reader2@gmail.com",
    librarianEmail: "librarian2@gmail.com",
    amount: 80,
    date: "24 Jun 2026",
  },
  {
    id: 3,
    transactionId: "TXN-100003",
    readerEmail: "reader3@gmail.com",
    librarianEmail: "librarian3@gmail.com",
    amount: 150,
    date: "23 Jun 2026",
  },
  {
    id: 4,
    transactionId: "TXN-100004",
    readerEmail: "reader4@gmail.com",
    librarianEmail: "librarian4@gmail.com",
    amount: 95,
    date: "22 Jun 2026",
  },
];

export default function TransactionsTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b px-6 py-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Transaction History
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          View all completed platform transactions.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-violet-50">
            <tr>
              <th className="px-6 py-4 text-left">
                Transaction ID
              </th>

              <th className="px-6 py-4 text-left">
                Reader Email
              </th>

              <th className="px-6 py-4 text-left">
                Librarian Email
              </th>

              <th className="px-6 py-4 text-left">
                Amount
              </th>

              <th className="px-6 py-4 text-left">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}