"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar, FaTimes } from "react-icons/fa";

export default function ReviewModal({
    open,
    setOpen,
    review,
    setReviews,
}) {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (review) {
            setRating(review.rating);
            setComment(review.comment);
        }
    }, [review]);

    const handleSave = async () => {
        if (!comment.trim()) {
            toast.error("Review cannot be empty.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews/${review._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        rating,
                        comment,
                    }),
                }
            );

            const data = await res.json();

            if (data.success) {
                toast.success("Review updated successfully.");

                setReviews((prev) =>
                    prev.map((item) =>
                        item._id === review._id
                            ? {
                                ...item,
                                rating,
                                comment,
                            }
                            : item
                    )
                );

                setOpen(false);
            } else {
                toast.error(data.message || "Failed to update review.");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

            <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">

                {/* Header */}

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-2xl font-bold text-gray-800">
                        Edit Review
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100"
                    >
                        <FaTimes size={18} />
                    </button>

                </div>

                {/* Book */}

                <div className="mb-6">

                    <label className="mb-2 block font-semibold text-gray-700">
                        Book
                    </label>

                    <input
                        type="text"
                        value={review.bookTitle}
                        readOnly
                        className="w-full rounded-xl border bg-gray-100 px-4 py-3"
                    />

                </div>

                {/* Rating */}

                <div className="mb-6">

                    <label className="mb-3 block font-semibold text-gray-700">
                        Rating
                    </label>

                    <div className="flex gap-2">

                        {[1, 2, 3, 4, 5].map((star) => (

                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                            >
                                <FaStar
                                    size={30}
                                    className={
                                        star <= rating
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                    }
                                />
                            </button>

                        ))}

                    </div>

                </div>

                {/* Comment */}

                <div className="mb-8">

                    <label className="mb-2 block font-semibold text-gray-700">
                        Review
                    </label>

                    <textarea
                        rows={5}
                        value={comment}
                        onChange={(e) =>
                            setComment(e.target.value)
                        }
                        className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-violet-600"
                        placeholder="Write your review..."
                    />

                </div>

                {/* Footer */}

                <div className="flex justify-end gap-3">

                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-xl border px-6 py-3 font-semibold hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        onClick={handleSave}
                        disabled={loading}
                        className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                        {loading ? "Saving..." : "Save Changes"}
                    </button>

                </div>

            </div>

        </div>
    );
}