"use client";

import Image from "next/image";

import BookInfo from "./BookInfo";
import BookMeta from "./BookMeta";
import BookDescription from "./BookDescription";
import DeliveryButton from "./DeliveryButton";

export default function BookDetails({
  book,
  session,
  isOwner,
  isUnavailable,
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* Left */}

      <div className="overflow-hidden rounded-3xl border bg-white shadow">
        <div className="relative h-[600px]">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right */}

      <div className="space-y-8">
        <BookInfo book={book} />

        <BookMeta book={book} />

        <BookDescription
          description={book.description}
        />

        <DeliveryButton
          book={book}
          session={session}
          isOwner={isOwner}
          isUnavailable={isUnavailable}
        />
      </div>
    </div>
  );
}