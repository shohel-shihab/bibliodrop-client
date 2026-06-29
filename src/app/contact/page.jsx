"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-violet-100 px-5 py-2 font-semibold text-violet-700">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold text-gray-800">
            We'd Love to Hear From You
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Have a question, suggestion, or need help?
            Fill out the form below or contact us directly.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-xl bg-violet-600 p-4 text-white">
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    support@bibliodrop.com
                  </p>
                </div>
              </div>

              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-xl bg-violet-600 p-4 text-white">
                  <FaPhoneAlt size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    +880 1700-000000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-violet-600 p-4 text-white">
                  <FaMapMarkerAlt size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Social */}

              <div className="mt-10 flex gap-4">

                <a
                  href="#"
                  className="rounded-full bg-violet-600 p-4 text-white transition hover:scale-110"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="rounded-full bg-violet-600 p-4 text-white transition hover:scale-110"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="rounded-full bg-violet-600 p-4 text-white transition hover:scale-110"
                >
                  <FaGithub />
                </a>

              </div>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form className="rounded-3xl bg-white p-8 shadow-lg space-y-6">

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border p-4 outline-none focus:border-violet-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border p-4 outline-none focus:border-violet-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border p-4 outline-none focus:border-violet-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border p-4 outline-none focus:border-violet-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-700"
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}