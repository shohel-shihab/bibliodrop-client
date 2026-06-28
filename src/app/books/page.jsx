"use client";

import { useEffect, useState } from "react";

import BookGrid from "@/components/books/BookGrid";
import BookSearch from "@/components/books/BookSearch";
import BookFilters from "@/components/books/BookFilters";
import BookSort from "@/components/books/BookSort";
import BookSkeleton from "@/components/books/BookSkeleton";
import EmptyState from "@/components/books/EmptyState";

export default function BooksPage() {
    const [books, setBooks] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("");

    const [sort, setSort] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);

                setError("");

                const params = new URLSearchParams();

                if (search) {
                    params.append("search", search);
                }

                if (category) {
                    params.append("category", category);
                }

                if (sort) {
                    params.append("sort", sort);
                }

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/books?${params.toString()}`
                );

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.message || "Failed to fetch books.");
                }

                setBooks(data.books || []);
            } catch (err) {
                console.log(err);

                setError("Failed to load books.");
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [search, category, sort]);

    return (
        <section className="mx-auto max-w-7xl px-4 py-10">
            {/* Header */}

            <div className="mb-10">
                <h1 className="text-4xl font-bold text-gray-900">
                    Browse Books
                </h1>

                <p className="mt-2 text-gray-500">
                    Discover thousands of books shared by our librarians.
                </p>
            </div>

            {/* Search + Filter + Sort */}

            <div className="mb-8 grid gap-4 lg:grid-cols-3">
                <BookSearch
                    search={search}
                    setSearch={setSearch}
                />

                <BookFilters
                    category={category}
                    setCategory={setCategory}
                />

                <BookSort
                    sort={sort}
                    setSort={setSort}
                />
            </div>

            {/* Loading */}

            {loading && (
                <BookSkeleton />
            )}

            {/* Error */}

            {!loading && error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
                    {error}
                </div>
            )}

            {/* Empty */}

            {!loading &&
                !error &&
                books.length === 0 && (
                    <EmptyState />
                )}

            {/* Books */}

            {!loading &&
                !error &&
                books.length > 0 && (
                    <BookGrid books={books} />
                )}
        </section>
    );
}