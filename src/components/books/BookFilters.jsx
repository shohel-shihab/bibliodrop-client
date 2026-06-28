"use client";

const categories = [
  "All",
  "Programming",
  "Business",
  "Self Development",
  "Science",
  "History",
  "Novel",
  "Religion",
  "Biography",
];

export default function BookFilters({
  category,
  setCategory,
}) {
  return (
    <select
      value={category}
      onChange={(e) =>
        setCategory(
          e.target.value === "All"
            ? ""
            : e.target.value
        )
      }
      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600"
    >
      {categories.map((item) => (
        <option
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}
    </select>
  );
}