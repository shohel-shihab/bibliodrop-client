"use client";

export default function StripeLoader() {
  return (
    <div className="flex h-[300px] items-center justify-center">

      <div className="text-center">

        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-violet-600 border-t-transparent"></div>

        <p className="mt-6 text-lg font-medium">
          Redirecting to Stripe...
        </p>

      </div>

    </div>
  );
}