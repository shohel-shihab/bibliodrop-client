"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function RoleSelect({
  user,
  setUsers,
}) {
  const [role, setRole] = useState(user.role);

  const handleRoleChange = async (e) => {
    const newRole = e.target.value;

    setRole(newRole);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/user/${user._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role: newRole,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Role Updated");

        setUsers((prev) =>
          prev.map((u) =>
            u._id === user._id
              ? {
                ...u,
                role: newRole,
              }
              : u
          )
        );
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong.");
    }
  };

  return (
    <select
      value={role}
      onChange={handleRoleChange}
      className="rounded-lg border px-3 py-2"
    >
      <option value="reader">
        Reader
      </option>

      <option value="librarian">
        Librarian
      </option>

      <option value="admin">
        Admin
      </option>
    </select>
  );
}