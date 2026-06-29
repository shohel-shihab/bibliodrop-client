"use client";

import ReviewRow from "./ReviewRow";

export default function ReviewTable({
  reviews,
  setReviews,
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">

      {/* Desktop Table */}

      <div className="hidden overflow-x-auto lg:block">
        <table className="min-w-full">

          <thead className="bg-violet-600 text-white">

            <tr>

              <th className="px-6 py-4 text-left">
                Book
              </th>

              <th className="px-6 py-4 text-center">
                Rating
              </th>

              <th className="px-6 py-4 text-left">
                Review
              </th>

              <th className="px-6 py-4 text-center">
                Date
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {reviews.map((review) => (
              <ReviewRow
                key={review._id}
                review={review}
                setReviews={setReviews}
              />
            ))}

          </tbody>

        </table>
      </div>

      {/* Mobile Cards */}

      <div className="space-y-5 p-5 lg:hidden">

        {reviews.map((review) => (
          <div
            key={review._id}
            className="rounded-2xl border p-5 shadow-sm"
          >

            <h2 className="text-lg font-bold text-gray-800">
              {review.bookTitle}
            </h2>

            <div className="mt-3">

              <p className="text-sm font-medium text-gray-500">
                Rating
              </p>

              <p className="font-semibold text-yellow-500">
                ⭐ {review.rating}/5
              </p>

            </div>

            <div className="mt-3">

              <p className="text-sm font-medium text-gray-500">
                Review
              </p>

              <p className="mt-1 text-gray-700">
                {review.comment}
              </p>

            </div>

            <div className="mt-3">

              <p className="text-sm font-medium text-gray-500">
                Date
              </p>

              <p className="text-gray-700">
                {new Date(
                  review.createdAt
                ).toLocaleDateString()}
              </p>

            </div>

            <div className="mt-5">

              <ReviewRow
                review={review}
                setReviews={setReviews}
                mobile
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}