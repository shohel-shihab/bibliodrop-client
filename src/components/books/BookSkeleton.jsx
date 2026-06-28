"use client";

export default function BookSkeleton() {
  return (
    <section className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse overflow-hidden rounded-2xl border bg-white"
        >
          <div className="h-72 bg-gray-200"></div>

          <div className="space-y-4 p-5">
            <div className="h-5 w-20 rounded bg-gray-200"></div>

            <div className="h-6 rounded bg-gray-200"></div>

            <div className="h-5 w-3/4 rounded bg-gray-200"></div>

            <div className="flex justify-between">
              <div className="h-5 w-16 rounded bg-gray-200"></div>

              <div className="h-10 w-28 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}