import {
    HiOutlineHome,
    HiOutlineBookOpen,
} from "react-icons/hi";

import { FiInfo, FiPhone } from "react-icons/fi";

export const navItems = [
    {
        title: "Home",
        href: "/",
        icon: HiOutlineHome,
    },
    {
        title: "Browse Books",
        href: "/books",
        icon: HiOutlineBookOpen,
    },
    {
        title: "About",
        href: "/about",
        icon: FiInfo,
    },
    {
        title: "Contact",
        href: "/contact",
        icon: FiPhone,
    },
];