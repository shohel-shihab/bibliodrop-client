"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import DeliveryHistoryTable from "@/components/dashboard/reader/delivery/DeliveryHistoryTable";


export default function DeliveryHistoryPage() {
  const { data: session } = authClient.useSession();

  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchHistory = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/reader/delivery-history?email=${session.user.email}`,
          {
            credentials: "include",
          }
        );

        const data = await res.json();

        if (data.success) {
          setDeliveries(data.deliveries || []);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
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
          Delivery History
        </h1>

        <p className="mt-2 text-gray-500">
          View all your delivery requests and track their current status.
        </p>
      </div>

      {/* Empty State */}

      {deliveries.length === 0 ? (
        <div className="rounded-2xl bg-white py-20 text-center shadow">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Delivery History Found
          </h2>

          <p className="mt-3 text-gray-500">
            Your delivery requests will appear here after you request a book.
          </p>
        </div>
      ) : (
        <DeliveryHistoryTable
          deliveries={deliveries}
          setDeliveries={setDeliveries}
        />
      )}

    </section>
  );
}