"use client";

import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaTruck,
  FaUserShield,
  FaCreditCard,
  FaClock,
  FaStar,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaBookOpen />,
    title: "Huge Book Collection",
    description:
      "Browse thousands of books including academic, fiction, programming, history, science, and more.",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    icon: <FaTruck />,
    title: "Fast Delivery",
    description:
      "Request books online and receive them quickly at your doorstep with affordable delivery fees.",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 3,
    icon: <FaUserShield />,
    title: "Verified Librarians",
    description:
      "Every library and book owner is verified to ensure a trusted and secure borrowing experience.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 4,
    icon: <FaCreditCard />,
    title: "Secure Payments",
    description:
      "Integrated Stripe payment system keeps every transaction safe and reliable.",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 5,
    icon: <FaClock />,
    title: "Quick Approval",
    description:
      "Book requests and delivery processes are handled efficiently to save your valuable time.",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 6,
    icon: <FaStar />,
    title: "Community Reviews",
    description:
      "Readers can rate and review books, helping others discover the best titles.",
    color: "from-yellow-400 to-yellow-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-violet-100 px-5 py-2 font-semibold text-violet-700">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-800 lg:text-5xl">
            Everything You Need
            <br />
            In One Library Platform
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            BiblioDrop makes borrowing books simple, secure,
            and enjoyable by combining modern technology with
            trusted local libraries and independent book owners.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => (

            <motion.div
              key={feature.id}
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
            >

              {/* Background Glow */}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition duration-500 group-hover:opacity-10`}
              />

              {/* Icon */}

              <div
                className={`mb-8 inline-flex rounded-2xl bg-gradient-to-br ${feature.color} p-5 text-4xl text-white shadow-lg`}
              >
                {feature.icon}
              </div>

              {/* Content */}

              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                {feature.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {feature.description}
              </p>

              {/* Bottom Line */}

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