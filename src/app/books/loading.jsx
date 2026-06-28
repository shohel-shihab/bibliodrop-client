import BookSkeleton from "@/components/books/BookSkeleton";

export default function Loading() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <BookSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}