"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Avatar } from "@heroui/react";


import {
  FaBookOpen,
  FaHome,
  FaPlusCircle,
  FaSignOutAlt,
  FaTruck,
} from "react-icons/fa";


import { MdDashboard, MdLibraryBooks, MdOutlineApproval, MdOutlineInventory, MdOutlinePayments, MdOutlineRateReview, MdPeopleOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function DashboardSidebar({ session }) {
  const pathname = usePathname();
  const router = useRouter()

  const user = session?.user;
  const role = user?.role

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      return toast.error(error.message);
    }
    toast.success("Logout Successful");
    router.push("/");
    router.refresh();
  };

  const dashboardItem = {
    reader: [
      {
        title: "Overview",
        href: "/dashboard/reader",
        icon: MdDashboard,
      },
      {
        title: "My Reading List",
        href: "/dashboard/reader/reading-list",
        icon: FaBookOpen,
      },
      {
        title: "Delivery History",
        href: "/dashboard/reader/delivery-history",
        icon: FaTruck,
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
      
    ],

    librarian: [
      {
        title: "Overview",
        href: "/dashboard/librarian",
        icon: MdDashboard,
      },
      {
        title: "Add Book",
        href: "/dashboard/librarian/add-book",
        icon: FaPlusCircle,
      },
      {
        title: "Manage Inventory",
        href: "/dashboard/librarian/inventory",
        icon: MdOutlineInventory,
      },
      {
        title: "Manage Deliveries",
        href: "/dashboard/librarian/deliveries",
        icon: FaTruck,
      },
      {
        title: "Profile",
        href: "/profile",
        icon: CgProfile,
      },
     
    ],

    admin: [
      {
        title: "Overview",
        href: "/dashboard/admin",
        icon: MdDashboard,
      },
      {
        title: "Approval Queue",
        href: "/dashboard/admin/approval-queue",
        icon: MdOutlineApproval,
      },
      {
        title: "Manage Users",
        href: "/dashboard/admin/users",
        icon: MdPeopleOutline,
      },
      {
        title: "Manage Books",
        href: "/dashboard/admin/books",
        icon: MdLibraryBooks,
      },
      {
        title: "Transactions",
        href: "/dashboard/admin/transactions",
        icon: MdOutlinePayments,
      },
      {
        title: "Profile",
        href: "/profile",
        icon: CgProfile,
      },
     
    ],
  };

  const menus = dashboardItem[role] || "reader"



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
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${active
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

      <div className="border-t p-4">
        {/* Home */}

        <Link
          href="/"
          className="mb-2 flex items-center gap-4 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-violet-50 hover:text-violet-700"
        >
          <FaHome size={20} />

          <span className="font-medium">
            Home
          </span>
        </Link>

        {/* Logout */}

        <button
        type="submit"
          onClick={handleLogout}
          className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50"
        >
          <FaSignOutAlt size={20} />

          <span className="font-medium cursor-pointer">
            Sign Out
          </span>
        </button>
      </div>
    </aside>
  );
}