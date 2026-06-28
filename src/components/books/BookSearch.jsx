"use client";

import { FaSearch } from "react-icons/fa";

export default function BookSearch({
  search,
  setSearch,
}) {
  return (
    <div className="relative">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search books..."
        className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-violet-600"
      />
    </div>
  );
}