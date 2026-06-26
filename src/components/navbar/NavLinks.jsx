"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./navItems";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex items-center gap-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-violet-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-violet-50 hover:text-violet-600"
              }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}