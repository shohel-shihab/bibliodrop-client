"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar } from "@heroui/react";

import {
  MdDashboard,
  MdOutlineRateReview,
} from "react-icons/md";

import {
  FaBookOpen,
  FaTruck,
} from "react-icons/fa";

import {
  CgProfile,
} from "react-icons/cg";

import {
  IoSettingsOutline,
} from "react-icons/io5";

export default function DashboardSidebar({
  session,
}) {
  const pathname = usePathname();

  const menus = [
    {
      title: "Overview",
      href: "/dashboard/reader",
      icon: MdDashboard,
    },
    {
      title: "Delivery History",
      href: "/dashboard/reader/delivery-history",
      icon: FaTruck,
    },
    {
      title: "My Reading List",
      href: "/dashboard/reader/reading-list",
      icon: FaBookOpen,
    },
    {
      title: "My Reviews",
      href: "/dashboard/reader/reviews",
      icon: MdOutlineRateReview,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: CgProfile,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: IoSettingsOutline,
    },
  ];

  return (
    <aside className="hidden min-h-screen w-72 border-r border-gray-200 bg-white lg:block">
      {/* Logo */}

      <div className="flex h-20 items-center border-b px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div>
            <h2 className="text-xl font-black text-violet-700">
              BiblioDrop
            </h2>

            <p className="text-xs text-gray-500">
              Dashboard
            </p>
          </div>
        </Link>
      </div>

      {/* User */}

      <div className="border-b p-6">
        <div className="flex items-center gap-4">
          <Avatar size="lg">
            <Avatar.Image
              src={session.user.image}
            />

            <Avatar.Fallback>
              {session.user.name?.charAt(0)}
            </Avatar.Fallback>
          </Avatar>

          <div>
            <h3 className="font-semibold">
              {session.user.name}
            </h3>

            <p className="text-sm text-gray-500">
              {session.user.email}
            </p>

            <span className="mt-2 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-medium capitalize text-violet-700">
              {session.user.role}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <nav className="space-y-2 p-4">
        {menus.map((menu) => {
          const Icon = menu.icon;

          const active =
            pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                active
                  ? "bg-violet-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-violet-50 hover:text-violet-700"
              }`}
            >
              <Icon size={22} />

              <span className="font-medium">
                {menu.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}