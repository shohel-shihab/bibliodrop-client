"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import ReadingListGrid from "@/components/dashboard/reader/reading-list/ReadingListGrid";



export default function ReadingListPage() {
  const { data: session } = authClient.useSession();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchReadingList = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/reader/reading-list?email=${session.user.email}`,
          {
            credentials: "include",
          }
        );

        const data = await res.json();

        if (data.success) {
          setBooks(data.books || []);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReadingList();
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
          My Reading List
        </h1>

        <p className="mt-2 text-gray-500">
          Books you've successfully received and completed.
        </p>

      </div>

      {/* Empty State */}

      {books.length === 0 ? (
        <div className="rounded-2xl bg-white py-20 text-center shadow">

          <h2 className="text-2xl font-semibold text-gray-700">
            No Books Yet
          </h2>

          <p className="mt-3 text-gray-500">
            Delivered books will automatically appear here.
          </p>

        </div>
      ) : (
        <ReadingListGrid books={books} />
      )}

    </section>
  );
}