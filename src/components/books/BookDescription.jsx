"use client";

export default function BookDescription({
  description,
}) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">
        Description
      </h2>

      <p className="leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}