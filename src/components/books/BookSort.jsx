"use client";

export default function BookSort({
  sort,
  setSort,
}) {
  return (
    <select
      value={sort}
      onChange={(e) =>
        setSort(e.target.value)
      }
      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600"
    >
      <option value="">
        Sort By
      </option>

      <option value="newest">
        Newest
      </option>

      <option value="oldest">
        Oldest
      </option>

      <option value="fee-asc">
        Delivery Fee: Low → High
      </option>

      <option value="fee-desc">
        Delivery Fee: High → Low
      </option>
    </select>
  );
}