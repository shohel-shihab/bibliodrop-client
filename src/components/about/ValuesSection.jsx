"use client";

import { motion } from "framer-motion";
import {
  FaHeart,
  FaLeaf,
  FaHandshake,
  FaBookReader,
  FaGlobeAsia,
  FaLightbulb,
} from "react-icons/fa";

const values = [
  {
    id: 1,
    title: "Passion for Reading",
    description:
      "We believe books have the power to educate, inspire, and transform lives. Every reader deserves easy access to knowledge.",
    icon: <FaBookReader />,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "Community First",
    description:
      "BiblioDrop connects readers, librarians, and book owners to build a stronger reading community across Bangladesh.",
    icon: <FaHandshake />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Trust & Transparency",
    description:
      "Verified librarians, secure payments, and honest reviews ensure a safe experience for every user.",
    icon: <FaHeart />,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "Sustainability",
    description:
      "Sharing books instead of buying every copy helps reduce waste and encourages a more sustainable future.",
    icon: <FaLeaf />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Innovation",
    description:
      "We continuously improve our platform using modern technologies to provide the best borrowing experience.",
    icon: <FaLightbulb />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 6,
    title: "Accessible Knowledge",
    description:
      "Our vision is to make books accessible to everyone, regardless of location or background.",
    icon: <FaGlobeAsia />,
    color: "from-indigo-500 to-violet-600",
  },
];

export default function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background Blur */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-100 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-pink-100 blur-3xl" />

      <div className="container relative mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-violet-100 px-5 py-2 font-semibold text-violet-700">
            Our Core Values
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-800 lg:text-5xl">
            The Principles That
            <br />
            Guide Everything We Do
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every feature we build and every decision we make is
            guided by these core values, helping us create a better
            experience for readers and librarians.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {values.map((value, index) => (

            <motion.div
              key={value.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border bg-white p-8 shadow-lg transition hover:shadow-2xl"
            >

              {/* Hover Background */}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 transition duration-500 group-hover:opacity-10`}
              />

              {/* Icon */}

              <div
                className={`mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${value.color} text-4xl text-white shadow-lg`}
              >
                {value.icon}
              </div>

              {/* Content */}

              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                {value.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {value.description}
              </p>

              {/* Animated Bottom Line */}

              <motion.div
                whileHover={{
                  width: "100%",
                }}
                className="mt-8 h-1 w-16 rounded-full bg-violet-600"
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}