"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { navItems } from "./navItems";

import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

import { Button } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu({
    isOpen,
    setIsOpen,
    user,
    handleLogout,
}) {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col bg-white shadow-2xl lg:hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b px-5 py-5">
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

                        {/* User Info */}
                        {user && (
                            <div className="border-b px-5 py-4">
                                <h3 className="font-semibold">
                                    {user.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {user.email}
                                </p>
                            </div>
                        )}

                        {/* Navigation */}
                        <div className="flex-1 px-5 py-6">
                            <ul className="space-y-2">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${pathname === item.href
                                                ? "bg-violet-100 text-violet-700"
                                                : "hover:bg-violet-50"
                                                }`}
                                        >
                                            <item.icon size={20} />
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}

                                {user && (
                                    <>
                                        <li>
                                            <Link
                                                href="/dashboard"
                                               onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium hover:bg-violet-50"
                                            >
                                                <MdDashboard size={20} />
                                                Dashboard
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="/profile"
                                              onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium hover:bg-violet-50"
                                            >
                                                <CgProfile size={20} />
                                                Profile
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>

                        {/* Bottom */}
                        <div className="border-t p-5">
                            {!user ? (
                                <div className="space-y-3">
                                    <Link href="/login">
                                        <Button
                                            variant="bordered"
                                            radius="full"
                                            className="w-full"
                                            onPress={() => setIsMenuOpen(false)}
                                        >
                                            Login
                                        </Button>
                                    </Link>

                                    <Link href="/register">
                                        <Button
                                            radius="full"
                                            className="w-full bg-violet-600 text-white"
                                            onPress={() => setIsMenuOpen(false)}
                                        >
                                            Register
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <Button
                                    color="danger"
                                    radius="full"
                                    className="w-full"
                                    onPress={() => {
                                        setIsMenuOpen(false);
                                        handleLogout();
                                    }}
                                    startContent={<BiLogOut />}
                                >
                                    Logout
                                </Button>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}