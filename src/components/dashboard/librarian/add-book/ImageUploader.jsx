"use client";

export default function ImageUploader() {
  return (
    <div>
      <label className="mb-2 block font-medium">
        Book Cover
      </label>

      <input
        type="file"
        name="image"
        accept="image/*"
        required
        className="block w-full rounded-xl border border-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-violet-600 file:px-4 file:py-2 file:text-white file:hover:bg-violet-700"
      />
    </div>
  );
}