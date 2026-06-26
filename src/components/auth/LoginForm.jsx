"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function LoginForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries());

    try {
      setLoading(true);
      const { error } = await authClient.signIn.email({
        email: loginData.email,
        password: loginData.password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Login Successful");

      router.push("/");
      router.refresh();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    // const { error } = await authClient.signIn.social({
    //   provider: "google",
    //   callbackURL: "/",
    // });

    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* Google Login */}

      <button
        type="button"
        onClick={handleGoogle}
        className="mb-6 flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-3 font-semibold transition duration-300 hover:bg-gray-100"
      >
        <FaGoogle className="text-red-500" />
        Continue with Google
      </button>

      {/* Divider */}

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500">
            OR
          </span>
        </div>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Email */}

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Email Address
          </label>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

            <input
              type="email"
              name="email"
              required
              placeholder="example@email.com"
              className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition duration-300 focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
            />
          </div>
        </div>

        {/* Password */}

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="font-medium text-gray-700">
              Password
            </label>

            <Link
              href="/forgot-password"
              className="text-sm font-medium text-violet-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-12 outline-none transition duration-300 focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-4 text-gray-500 hover:text-violet-600"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>
        </div>

        {/* Remember Me */}

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 accent-violet-600"
            />

            Remember Me
          </label>
        </div>

        {/* Login Button */}

        <button
        type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition duration-300 hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
              Signing In...
            </span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
}