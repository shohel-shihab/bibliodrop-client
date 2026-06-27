"use client";

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    bookTitle: "Atomic Habits",
    rating: 5,
    comment:
      "This book completely changed my daily habits. Highly recommended!",
    date: "25 Jun 2026",
  },
  {
    id: 2,
    bookTitle: "Clean Code",
    rating: 4,
    comment:
      "A must-read for every software developer. Very practical and easy to understand.",
    date: "20 Jun 2026",
  },
  {
    id: 3,
    bookTitle: "Deep Work",
    rating: 5,
    comment:
      "Excellent insights on productivity and focused work. One of my favorite books.",
    date: "15 Jun 2026",
  },
];

export default function ReviewList() {
  if (reviews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          No Reviews Yet
        </h2>

        <p className="mt-2 text-gray-500">
          You haven't reviewed any books yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
}