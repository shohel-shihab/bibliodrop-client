"use client";

import { authClient } from "@/lib/auth-client";
import {
  FaUser,
  FaEnvelope,
  FaUserShield,
  FaCalendarAlt,
  FaCrown,
} from "react-icons/fa";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          User not found
        </h2>
      </div>
    );
  }

  const user = session.user;

  return (
    <section className="space-y-8">

      {/* Page Title */}

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          My Profile
        </h1>

        <p className="mt-2 text-gray-500">
          View your account information.
        </p>
      </div>

      {/* Profile Card */}

      <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

        {/* Header */}

        <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-10 text-center">

          <img
            src={
              user.image ||
              "https://i.pravatar.cc/200"
            }
            alt={user.name}
            className="mx-auto h-32 w-32 rounded-full border-4 border-white object-cover"
          />

          <h2 className="mt-5 text-3xl font-bold text-white">
            {user.name}
          </h2>

          <p className="mt-2 text-violet-100">
            {user.email}
          </p>

        </div>

        {/* Details */}

        <div className="grid gap-6 p-8 md:grid-cols-2">

          {/* Name */}

          <div className="rounded-xl border p-5">

            <div className="mb-3 flex items-center gap-3">

              <FaUser className="text-violet-600" />

              <h3 className="font-semibold">
                Full Name
              </h3>

            </div>

            <p className="text-gray-600">
              {user.name}
            </p>

          </div>

          {/* Email */}

          <div className="rounded-xl border p-5">

            <div className="mb-3 flex items-center gap-3">

              <FaEnvelope className="text-violet-600" />

              <h3 className="font-semibold">
                Email Address
              </h3>

            </div>

            <p className="text-gray-600">
              {user.email}
            </p>

          </div>

          {/* Role */}

          <div className="rounded-xl border p-5">

            <div className="mb-3 flex items-center gap-3">

              <FaUserShield className="text-violet-600" />

              <h3 className="font-semibold">
                Role
              </h3>

            </div>

            <span className="rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-700 capitalize">
              {user.role || "Reader"}
            </span>

          </div>

          {/* Plan */}

          <div className="rounded-xl border p-5">

            <div className="mb-3 flex items-center gap-3">

              <FaCrown className="text-yellow-500" />

              <h3 className="font-semibold">
                Plan
              </h3>

            </div>

            <span className="rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700 capitalize">
              {user.plan || "Free"}
            </span>

          </div>

          {/* Joined */}

          <div className="rounded-xl border p-5 md:col-span-2">

            <div className="mb-3 flex items-center gap-3">

              <FaCalendarAlt className="text-violet-600" />

              <h3 className="font-semibold">
                Member Since
              </h3>

            </div>

            <p className="text-gray-600">
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "N/A"}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}