"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBookOpen,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  const pathname=usePathname();
  if(pathname.includes("dashboard")) {
    return null
  }

  return (
    <footer className="relative mt-24 overflow-hidden bg-slate-950 text-gray-300">
      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-600 p-3">
                <FaBookOpen className="text-xl text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  BiblioDrop
                </h2>
                <p className="text-sm text-gray-400">
                  Read • Share • Deliver
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-gray-400">
              Discover books from local libraries and independent
              book owners. Request doorstep delivery and enjoy
              reading without limits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-violet-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-violet-400"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-violet-400"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <Link
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-violet-600"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-violet-600"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-violet-600"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-violet-600"
              >
                <FaXTwitter />
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Join our growing reading community and stay connected.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Newsletter
            </h3>

            <p className="mb-5 text-sm text-gray-400">
              Subscribe to receive new arrivals, updates and reading
              tips.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none transition focus:border-violet-500"
              />

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700"
              >
                Subscribe

                <FiSend />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-400 md:flex-row">
            <p>
              © {year} BiblioDrop. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/about"
                className="transition hover:text-violet-400"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-violet-400"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="transition hover:text-violet-400"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}