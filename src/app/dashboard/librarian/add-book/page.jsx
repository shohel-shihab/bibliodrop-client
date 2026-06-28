import AddBookForm from "@/components/dashboard/librarian/add-book/AddBookForm";

export const metadata = {
  title: "Add Book | BiblioDrop",
};

export default function AddBookPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Add New Book
        </h1>

        <p className="mt-2 text-gray-500">
          Add a new book to your library. Every newly added book is submitted as
          <span className="font-semibold text-amber-600">
            {" "}
            Pending Approval
          </span>{" "}
          until approved by an administrator.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <AddBookForm />
      </div>
    </section>
  );
}