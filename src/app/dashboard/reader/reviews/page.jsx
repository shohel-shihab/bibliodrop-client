import ReviewList from "@/components/dashboard/reader/reviews/ReviewList";

export const metadata = {
  title: "My Reviews | BiblioDrop",
};

export default function ReviewsPage() {
  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          My Reviews
        </h1>

        <p className="mt-2 text-gray-500">
          View, edit, or delete all the reviews you've shared on books.
        </p>
      </div>

      {/* Reviews */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <ReviewList />
      </div>
    </section>
  );
}