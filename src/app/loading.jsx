import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <Spinner
          size="lg"
          color="secondary"
        />

        <h2 className="text-lg font-semibold text-gray-700">
          Loading BiblioDrop...
        </h2>
      </div>
    </div>
  );
}