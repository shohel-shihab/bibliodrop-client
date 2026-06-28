"use client";

import { useEffect, useState } from "react";

import UserRow from "./UserRow";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/users`
        );

        const data = await res.json();

        setUsers(data.users || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
      <table className="min-w-full">
        <thead className="bg-violet-50">
          <tr>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-center">Role</th>
            <th className="px-6 py-4 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow
              key={user._id}
              user={user}
              setUsers={setUsers}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}