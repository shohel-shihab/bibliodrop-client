"use client";

import { useState } from "react";
import { FaSave, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

import RoleSelect from "./RoleSelect";

export default function UserRow({ user }) {
  const [role, setRole] = useState(user.role);

  const handleSave = () => {
    // Backend Later

    console.log({
      id: user.id,
      role,
    });

    toast.success("User role updated.");
  };

  const handleDelete = () => {
    // Backend Later

    console.log(user.id);

    toast.success("User deleted.");
  };

  return (
    <tr className="border-b transition hover:bg-violet-50">
      <td className="px-6 py-4 font-medium">
        {user.name}
      </td>

      <td className="px-6 py-4">
        {user.email}
      </td>

      <td className="px-6 py-4">
        <RoleSelect
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        />
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm text-white transition hover:bg-violet-700"
          >
            <FaSave />
            Save
          </button>

          <button
            onClick={handleDelete}
            className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-700"
          >
            <FaTrash />
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}