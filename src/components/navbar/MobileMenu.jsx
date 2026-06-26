"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./navItems";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function MobileMenu({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 z-50 flex h-screen w-72 flex-col bg-white shadow-xl lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-xl font-bold text-violet-600">
                BiblioDrop
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <IoClose size={28} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 p-5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-lg px-4 py-3 font-medium transition-all ${
                      isActive
                        ? "bg-violet-600 text-white"
                        : "text-gray-700 hover:bg-violet-50 hover:text-violet-600"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Bottom Buttons */}
            <div className="mt-auto border-t p-5 space-y-3">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg border border-violet-600 py-3 text-center font-medium text-violet-600 transition hover:bg-violet-50"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg bg-violet-600 py-3 text-center font-medium text-white transition hover:bg-violet-700"
              >
                Register
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}