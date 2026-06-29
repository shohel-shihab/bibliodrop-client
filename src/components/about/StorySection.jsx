"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaHandshake,
  FaTruck,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaBookOpen />,
    title: "Thousands of Books",
    description:
      "Explore a growing collection of academic, programming, fiction, and non-fiction books from trusted libraries.",
  },
  {
    id: 2,
    icon: <FaTruck />,
    title: "Doorstep Delivery",
    description:
      "Request your favorite book online and receive it quickly at your doorstep with affordable delivery.",
  },
  {
    id: 3,
    icon: <FaHandshake />,
    title: "Trusted Librarians",
    description:
      "All participating libraries and independent book owners are verified to ensure a reliable experience.",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Growing Community",
    description:
      "Join thousands of readers who share knowledge, discover books, and support local libraries.",
  },
];

export default function StorySection() {
  return (
    <section className="bg-white py-24">

      <div className="container mx-auto px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop"
                alt="Library"
                fill
                className="object-cover transition duration-700 hover:scale-110"
              />

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-10 left-8 rounded-3xl bg-white p-6 shadow-xl"
            >

              <h3 className="text-4xl font-bold text-violet-700">
                10K+
              </h3>

              <p className="mt-2 text-gray-600">
                Happy Readers
              </p>

            </motion.div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <span className="rounded-full bg-violet-100 px-5 py-2 font-semibold text-violet-700">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-800 lg:text-5xl">
              Building A Better Way
              <br />
              To Share Knowledge
            </h2>

            <p className="mt-8 leading-8 text-gray-600">
              BiblioDrop was founded with one simple mission:
              make books accessible to everyone.
              Instead of letting valuable books sit unused on
              shelves, we connect readers with local libraries
              and independent book owners through an easy,
              secure, and affordable delivery platform.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our goal is to inspire lifelong learning while
              supporting local libraries and encouraging a
              sustainable reading culture through book sharing.
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="rounded-2xl border bg-gray-50 p-5 transition hover:border-violet-500 hover:shadow-xl"
                >

                  <div className="mb-4 inline-flex rounded-2xl bg-violet-600 p-4 text-2xl text-white">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}