import ReadingGallery from "@/components/dashboard/reader/reading-list/ReadingGallery";

export const metadata = {
  title: "My Reading List | BiblioDrop",
};

export default function ReadingListPage() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          My Reading List
        </h1>

        <p className="mt-2 text-gray-500">
          Browse all the books you've successfully received or returned.
        </p>
      </div>

      {/* Gallery */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <ReadingGallery />
      </div>
    </section>
  );
}