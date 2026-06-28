"use client";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

export default function DeliveryButton({
  book,
  session,
  isOwner,
  isUnavailable,
}) {
  const router = useRouter();

  const handleRequest = () => {
    if (!session) {
      toast.error(
        "Please login first."
      );

      router.push("/login");

      return;
    }

    // Stripe Checkout
    console.log(
      "Redirect to Stripe Checkout"
    );
  };

  let buttonText =
    "Request Delivery";

  let disabled = false;

  if (isOwner) {
    buttonText =
      "You Own This Book";

    disabled = true;
  }

  if (isUnavailable) {
    buttonText =
      "Currently Unavailable";

    disabled = true;
  }

  return (
    <button
      disabled={disabled}
      onClick={handleRequest}
      className={`w-full rounded-2xl py-4 text-lg font-semibold text-white transition ${
        disabled
          ? "cursor-not-allowed bg-gray-400"
          : "bg-violet-600 hover:bg-violet-700"
      }`}
    >
      {buttonText}
    </button>
  );
}