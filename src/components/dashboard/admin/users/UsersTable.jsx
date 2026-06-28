"use client";

import UserRow from "./UserRow";

const users = [
  {
    id: 1,
    name: "Shohel Rana",
    email: "shohel@gmail.com",
    role: "admin",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@gmail.com",
    role: "reader",
  },
  {
    id: 3,
    name: "Alice Smith",
    email: "alice@gmail.com",
    role: "librarian",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@gmail.com",
    role: "reader",
  },
];

export default function UsersTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b px-6 py-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Registered Users
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Manage user roles and platform access.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-violet-50">
            <tr>
              <th className="px-6 py-4 text-left">
                Name
              </th>

              <th className="px-6 py-4 text-left">
                Email
              </th>

              <th className="px-6 py-4 text-left">
                Role
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}