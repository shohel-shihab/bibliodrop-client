"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import BookDetails from "@/components/books/BookDetails";

export default function BookDetailsPage() {
  const { id } = useParams();

  const { data: session } = authClient.useSession();

  const [book, setBook] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/books/${id}`
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        setBook(data.book);
      } catch (err) {
        console.log(err);

        setError("Failed to load book.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBook();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="animate-pulse">
          <div className="h-96 rounded-2xl bg-gray-200"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          {error}
        </h2>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">
          Book Not Found
        </h2>
      </div>
    );
  }

  // Current user owns this book?
  const isOwner =
    session?.user?.email ===
    book.librarianEmail;

  // Book unavailable?
  const isUnavailable =
    book.available === false;

  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <BookDetails
        book={book}
        session={session}
        isOwner={isOwner}
        isUnavailable={isUnavailable}
      />
    </section>
  );
}