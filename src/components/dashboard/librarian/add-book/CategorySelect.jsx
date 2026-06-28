"use client";

const categories = [
  "Programming",
  "Science",
  "Technology",
  "History",
  "Novel",
  "Biography",
  "Business",
  "Self Development",
  "Psychology",
  "Religion",
];

export default function CategorySelect() {
  return (
    <div>
      <label className="mb-2 block font-medium">
        Category
      </label>

      <select
        name="category"
        required
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-violet-600"
      >
        <option value="">
          Select Category
        </option>

        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}