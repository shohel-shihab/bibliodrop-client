import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center gap-3 group"
        >
            <div className="rounded-xl bg-violet-600 p-2 transition-transform duration-300 group-hover:rotate-6">
                <FaBookOpen className="text-white text-xl" />
            </div>

            <div>
                <h1 className="text-2xl font-extrabold tracking-wide text-gray-800">
                    BiblioDrop
                </h1>
                <p className="text-xs text-gray-500">
                    Read • Share • Deliver
                </p>
            </div>
        </Link>
    );
}