import AllBooksTable from "@/components/dashboard/admin/books/AllBooksTable";

export const metadata = {
  title: "Manage Books | BiblioDrop",
};

export default function ManageBooksPage() {
  return (
    <section className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Manage All Books
        </h1>

        <p className="mt-2 text-gray-500">
          View, unpublish or permanently delete books from the platform.
        </p>
      </div>

      <AllBooksTable />

    </section>
  );
}