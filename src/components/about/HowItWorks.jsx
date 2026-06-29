"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaBookOpen,
  FaCreditCard,
  FaTruck,
  FaStar,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch />,
    title: "Browse Books",
    description:
      "Explore thousands of books from trusted libraries and independent book owners.",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    icon: <FaBookOpen />,
    title: "Request a Book",
    description:
      "Choose your favorite book and submit a delivery request with a single click.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    icon: <FaCreditCard />,
    title: "Secure Payment",
    description:
      "Pay the delivery fee securely through our Stripe-powered payment gateway.",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    icon: <FaTruck />,
    title: "Fast Delivery",
    description:
      "Your selected book is carefully packed and delivered directly to your doorstep.",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    icon: <FaStar />,
    title: "Read & Review",
    description:
      "Enjoy reading and share your review to help other readers discover great books.",
    color: "from-yellow-400 to-orange-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="container relative mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="rounded-full bg-violet-100 px-5 py-2 font-semibold text-violet-700">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-800 lg:text-5xl">
            Borrow Books
            <br />
            In Just Five Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our streamlined process makes borrowing books easy,
            secure, and convenient from anywhere.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Desktop Timeline Line */}

          <div className="absolute left-0 right-0 top-16 hidden h-1 bg-gradient-to-r from-violet-500 via-blue-500 via-green-500 to-yellow-500 lg:block" />

          <div className="grid gap-14 lg:grid-cols-5">

            {steps.map((step, index) => (

              <motion.div
                key={step.id}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="relative text-center"
              >

                {/* Step Number */}

                <motion.div
                  whileHover={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-4xl text-white shadow-2xl`}
                >
                  {step.icon}
                </motion.div>

                <div className="mt-6">

                  <span className="rounded-full bg-violet-100 px-4 py-1 text-sm font-bold text-violet-700">
                    Step {step.id}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-gray-800">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {step.description}
                  </p>

                </div>

                {/* Mobile Connector */}

                {index !== steps.length - 1 && (
                  <div className="mx-auto mt-8 h-14 w-1 rounded-full bg-violet-300 lg:hidden" />
                )}

              </motion.div>

            ))}

          </div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.6,
          }}
          className="mt-24 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 p-10 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold">
            Start Your Reading Journey Today
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-violet-100">
            Join thousands of readers who discover, borrow, and
            enjoy books with BiblioDrop every day.
          </p>

          <motion.a
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="/books"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-violet-700 shadow-lg transition"
          >
            Explore Books
          </motion.a>
        </motion.div>

      </div>

    </section>
  );
}