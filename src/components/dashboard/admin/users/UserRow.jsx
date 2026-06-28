"use client";

import toast from "react-hot-toast";
import Swal from "sweetalert2";

import RoleSelect from "./RoleSelect";

export default function UserRow({ user, setUsers }) {
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Delete User?",
      text: "This user will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7c3aed",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Delete",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/user/${user._id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("User deleted successfully.");

        // Remove the deleted user from state
        setUsers((prev) =>
          prev.filter((u) => u._id !== user._id)
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
    <tr className="border-b hover:bg-gray-50">
      {/* Name */}
      <td className="px-6 py-4">
        {user.name}
      </td>

      {/* Email */}
      <td className="px-6 py-4">
        {user.email}
      </td>

      {/* Role */}
      <td className="px-6 py-4">
        <RoleSelect
          user={user}
          setUsers={setUsers}
        />
      </td>

      {/* Delete */}
      <td className="px-6 py-4 text-center">
        <button
          onClick={handleDelete}
          className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}