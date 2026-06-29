"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import ReviewTable from "@/components/dashboard/reader/reviews/ReviewTable";


export default function ReaderReviewsPage() {
  const { data: session } = authClient.useSession();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/reader/reviews?email=${session.user.email}`,
          {
            credentials: "include",
          }
        );

        const data = await res.json();

        if (data.success) {
          setReviews(data.reviews || []);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [session]);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <section className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          My Reviews
        </h1>

        <p className="mt-2 text-gray-500">
          Manage all the reviews and comments you've shared on books.
        </p>
      </div>

      {reviews.length === 0 ? (
        <div className="rounded-2xl bg-white py-20 text-center shadow">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Reviews Yet
          </h2>

          <p className="mt-3 text-gray-500">
            Reviews you leave on books will appear here.
          </p>
        </div>
      ) : (
        <ReviewTable
          reviews={reviews}
          setReviews={setReviews}
        />
      )}

    </section>
  );
}