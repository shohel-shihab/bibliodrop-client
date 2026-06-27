"use client";

import { Avatar, Input } from "@heroui/react";
import {
  FaBell,
  FaSearch,
} from "react-icons/fa";

export default function DashboardHeader({ session }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Left Side */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome back,
            <span className="ml-2 text-violet-600">
              {session.user.name}
            </span>
            👋
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            {today}
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden w-72 lg:block">
            <Input
              placeholder="Search books..."
              startContent={
                <FaSearch className="text-gray-400" />
              }
              radius="lg"
            />
          </div>

          {/* Notification */}
          <button className="relative rounded-xl bg-gray-100 p-3 transition hover:bg-violet-100">
            <FaBell className="text-lg text-gray-700" />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
          </button>

          {/* Avatar */}
          <div className="flex items-center gap-3">
            <Avatar size="md">
              <Avatar.Image
                src={session.user.image}
              />

              <Avatar.Fallback>
                {session.user.name?.charAt(0)}
              </Avatar.Fallback>
            </Avatar>

            <div className="hidden lg:block">
              <h3 className="text-sm font-semibold">
                {session.user.name}
              </h3>

              <p className="text-xs capitalize text-gray-500">
                {session.user.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}