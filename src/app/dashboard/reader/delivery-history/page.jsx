"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import DeliveryHistoryTable from "@/components/dashboard/reader/delivery/DeliveryHistoryTable";



export default function DeliveryHistoryPage() {

    const { data: session } =
        authClient.useSession();

    const [deliveries, setDeliveries] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        if (!session?.user?.email) return;

        const fetchHistory = async () => {

            try {

                const res = await fetch(

                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/delivery-history?email=${session.user.email}`

                );

                const data = await res.json();

                if (data.success) {

                    setDeliveries(
                        data.deliveries
                    );

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

            <div className="py-20 text-center">

                Loading...

            </div>

        );

    }

    return (

        <section className="space-y-8">

            <div>

                <h1 className="text-3xl font-bold">

                    Delivery History

                </h1>

                <p className="mt-2 text-gray-500">

                    Track all your book delivery requests.

                </p>

            </div>

            <DeliveryHistoryTable
                deliveries={deliveries}
            />

        </section>

    );

}