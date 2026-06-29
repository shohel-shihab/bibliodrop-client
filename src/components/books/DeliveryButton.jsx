"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { FaTruck } from "react-icons/fa";

export default function DeliveryButton({ book }) {
  const { data: session } = authClient.useSession();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const isOwner =
    session?.user?.email === book.librarianEmail;

  // Disable only for logged-in users
  const disabled =
    session?.user &&
    (
      book.status === "Checked Out" ||
      book.status === "Pending Delivery" ||
      isOwner
    );

  const handleCheckout = async () => {
    // User not logged in
    if (!session?.user) {
      toast.error("Please login to request delivery.", {
        duration: 2500,
      });

      setTimeout(() => {
        router.push("/login");
      }, 1500);

      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            bookId: book._id,
            title: book.title,
            deliveryFee: book.deliveryFee,
            librarianEmail: book.librarianEmail,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        window.location.href = data.url;
      } else {
        toast.error(data.message || "Checkout failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Checkout failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={disabled || loading}
      className="mt-6 w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-gray-400"
    >
      <div className="flex items-center justify-center gap-2">
        <FaTruck />

        {loading
          ? "Redirecting..."
          : disabled
          ? isOwner
            ? "Your Book"
            : book.status
          : "Request Delivery"}
      </div>
    </button>
  );
}