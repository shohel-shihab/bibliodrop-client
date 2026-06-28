"use client";

import { useEffect, useState } from "react";

import { authClient } from "@/lib/auth-client";

import InventoryTable from "@/components/dashboard/librarian/inventory/InventoryTable";

export default function InventoryPage() {
  const { data: session } = authClient.useSession();

  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/books/my-books?email=${session.user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);

        setLoading(false);
      });
  }, [session]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <InventoryTable books={books} />;
}