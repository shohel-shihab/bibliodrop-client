"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import StripeLoader from "@/components/books/StripeLoader";
import PaymentSuccess from "@/components/books/PaymentSuccess";

export default function PaymentSuccessPage() {

    const searchParams =
        useSearchParams();

    const sessionId =
        searchParams.get("session_id");

    const bookId =
        searchParams.get("bookId");

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const verifyPayment = async () => {

            try {

                const res = await fetch(

                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/success`,

                    {

                        method: "POST",

                        credentials: "include",

                        headers: {
                            "Content-Type":
                                "application/json",
                        },

                        body: JSON.stringify({
                            sessionId,
                            bookId,
                        }),

                    }

                );

                const data = await res.json();

                if (data.success) {

                    toast.success(
                        "Payment Successful"
                    );

                } else {

                    toast.error(data.message);

                }

            } catch (error) {

                console.log(error);

                toast.error(
                    "Payment Verification Failed"
                );

            } finally {

                setLoading(false);

            }

        };

        if (sessionId && bookId) {

            verifyPayment();

        }

    }, [sessionId, bookId]);

    if (loading) {

        return <StripeLoader />;

    }

    return <PaymentSuccess />;
}