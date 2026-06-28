"use client";

export default function RoleSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-violet-600"
    >
      <option value="reader">Reader</option>
      <option value="librarian">Librarian</option>
      <option value="admin">Admin</option>
    </select>
  );
}