"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import {
    Avatar,
    Button,
    Dropdown,
    Label,
} from "@heroui/react";

import toast from "react-hot-toast";

import {
    HiOutlineMenuAlt3,
} from "react-icons/hi";

import {
    MdDashboard,
} from "react-icons/md";

import {
    CgProfile,
} from "react-icons/cg";

import {
    BiLogOut,
} from "react-icons/bi";

import MobileMenu from "./MobileMenu";
import { navItems } from "./navItems";

export default function Navbar() {
    const pathname = usePathname();

    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { data: session } =
        authClient.useSession();

    const user = session?.user;

    const handleLogout = async () => {
        const { error } =
            await authClient.signOut();

        if (error) {
            return toast.error(error.message);
        }
        toast.success("Logout Successful");
        router.push("/");
        router.refresh();
    };

    return (
        <>
            <nav className="sticky top-0 z-50 border-b border-violet-100 bg-white/90 shadow-sm backdrop-blur-xl">
                <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
                    {/* Logo */}

                    <Link
                        href="/"
                        className="flex items-center gap-3"
                    >
                        <div>
                            <h2 className="text-xl font-black text-violet-700">
                                BiblioDrop
                            </h2>

                            <p className="-mt-1 text-xs text-gray-500">
                                Read • Share • Deliver
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}

                    <ul className="hidden items-center gap-8 lg:flex">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`font-medium transition ${pathname === item.href
                                        ? "text-violet-600"
                                        : "hover:text-violet-600"
                                        }`}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side */}

                    <div className="hidden items-center gap-4 lg:flex">
                        {!user ? (
                            <>
                                <Link href="/login">
                                    <Button
                                        variant="bordered"
                                        radius="full"
                                    >
                                        Login
                                    </Button>
                                </Link>

                                <Link href="/register">
                                    <Button
                                        color="secondary"
                                        radius="full"
                                        className="bg-violet-600 text-white"
                                    >
                                        Register
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <Avatar
                                        as="button"
                                        size="md"
                                        className="cursor-pointer ring-2 ring-violet-200 transition hover:scale-105"
                                    >
                                        <Avatar.Image
                                            src={user.image}
                                        />

                                        <Avatar.Fallback>
                                            {user?.name?.charAt(0)}
                                        </Avatar.Fallback>
                                    </Avatar>
                                </Dropdown.Trigger>

                                <Dropdown.Popover className="w-64 rounded-2xl">
                                    <div className="border-b px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <Avatar.Image
                                                    src={user.image}
                                                />

                                                <Avatar.Fallback>
                                                    {user?.name?.charAt(0)}
                                                </Avatar.Fallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-semibold">
                                                    {user.name}
                                                </h3>

                                                <p className="text-xs text-gray-500">
                                                    {user.email}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <Link
                                                href="/dashboard"
                                                className="flex items-center gap-3"
                                            >
                                                <MdDashboard />

                                                <Label>
                                                    Dashboard
                                                </Label>
                                            </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item>
                                            <Link
                                                href="/profile"
                                                className="flex items-center gap-3"
                                            >
                                                <CgProfile />

                                                <Label>
                                                    Profile
                                                </Label>
                                            </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item
                                            variant="danger"
                                            onClick={
                                                handleLogout
                                            }
                                        >
                                            <BiLogOut />

                                            <Label>
                                                Logout
                                            </Label>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>
                        )}
                    </div>

                    {/* Mobile */}

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden"
                    >
                        <HiOutlineMenuAlt3
                            size={28}
                        />
                    </button>
                </header>
            </nav>

            <MobileMenu
                user={user}
                isOpen={isMenuOpen}
                setIsOpen={setIsMenuOpen}
                handleLogout={handleLogout}
            />
        </>
    );
}