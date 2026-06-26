"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

import {
    FaGoogle,
    FaUser,
    FaEnvelope,
    FaLock,
    FaImage,
} from "react-icons/fa";

export default function RegisterForm() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState("reader");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        if (userData.password !== userData.confirmPassword) {
            return toast.error("Passwords do not match");
        }

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!passwordRegex.test(userData.password)) {
            return toast.error(
                "Password must be at least 8 characters and include uppercase, lowercase and a number."
            );
        }

        try {
            setLoading(true);
            const { error } = await authClient.signUp.email({
                email: userData.email,
                password: userData.password,
                name: userData.fullName,
                image: userData.image,
                callbackURL: "/",
            });

            if (error) {
                toast.error(error.message);
                return;
            }
            toast.success("Registration Successful");
            router.push("/");
            router.refresh();
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <>
            {/* Google */}

            <button
                onClick={handleGoogle}
                type="button"
                className="mb-6 flex w-full items-center justify-center gap-3 rounded-xl border py-3 font-semibold transition hover:bg-gray-100"
            >
                <FaGoogle className="text-red-500" />

                Continue with Google
            </button>

            <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                </div>

                <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-gray-500">
                        OR
                    </span>
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                {/* Full Name */}

                <div>
                    <label className="mb-2 block font-medium">
                        Full Name
                    </label>

                    <div className="relative">
                        <FaUser className="absolute left-4 top-4 text-gray-400" />

                        <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="John Doe"
                            className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-violet-600"
                        />
                    </div>
                </div>

                {/* Photo */}

                <div>
                    <label className="mb-2 block font-medium">
                        Photo URL
                    </label>

                    <div className="relative">
                        <FaImage className="absolute left-4 top-4 text-gray-400" />

                        <input
                            type="url"
                            name="image"
                            placeholder="https://..."
                            className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-violet-600"
                        />
                    </div>
                </div>

                {/* Email */}

                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="example@email.com"
                            className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-violet-600"
                        />
                    </div>
                </div>

                {/* Password */}

                <div>
                    <label className="mb-2 block font-medium">
                        Password
                    </label>

                    <div className="relative">
                        <FaLock className="absolute left-4 top-4 text-gray-400" />

                        <input
                            type="password"
                            name="password"
                            required
                            className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-violet-600"
                        />
                    </div>
                </div>

                {/* Confirm */}

                <div>
                    <label className="mb-2 block font-medium">
                        Confirm Password
                    </label>

                    <div className="relative">
                        <FaLock className="absolute left-4 top-4 text-gray-400" />

                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-violet-600"
                        />
                    </div>
                </div>

                {/* Role */}

                <div>
                    <label className="mb-3 block font-medium">
                        Choose Role
                    </label>

                    <div className="grid grid-cols-2 gap-4">
                        <label
                            className={`cursor-pointer rounded-xl border p-4 text-center transition ${role === "reader"
                                ? "border-violet-600 bg-violet-50"
                                : ""
                                }`}
                        >
                            <input
                                type="radio"
                                className="hidden"
                                checked={role === "reader"}
                                onChange={() => setRole("reader")}
                            />

                            📚 Reader
                        </label>

                        <label
                            className={`cursor-pointer rounded-xl border p-4 text-center transition ${role === "librarian"
                                ? "border-violet-600 bg-violet-50"
                                : ""
                                }`}
                        >
                            <input
                                type="radio"
                                className="hidden"
                                checked={role === "librarian"}
                                onChange={() => setRole("librarian")}
                            />

                            🏛 Librarian
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed"
                >
                    {loading ? "Creating Account..." : "Create Account"}
                </button>
            </form>
        </>
    );
}