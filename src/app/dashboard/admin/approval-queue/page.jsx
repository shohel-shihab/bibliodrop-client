import ApprovalQueueTable from "@/components/dashboard/admin/approval/ApprovalQueueTable";

export const metadata = {
  title: "Book Approval Queue | BiblioDrop",
};

export default function ApprovalQueuePage() {
  return (
    <section className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Book Approval Queue
        </h1>

        <p className="text-gray-500 mt-2">
          Review newly submitted books before publishing.
        </p>
      </div>

      <ApprovalQueueTable />

    </section>
  );
}