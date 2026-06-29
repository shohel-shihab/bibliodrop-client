"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBookOpen,
  FaUsers,
  FaUniversity,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Books Available",
    value: 12000,
    suffix: "+",
    icon: <FaBookOpen />,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "Active Readers",
    value: 8500,
    suffix: "+",
    icon: <FaUsers />,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Partner Libraries",
    value: 320,
    suffix: "+",
    icon: <FaUniversity />,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 4,
    title: "Positive Reviews",
    value: 99,
    suffix: "%",
    icon: <FaStar />,
    color: "from-yellow-400 to-orange-500",
  },
];

function Counter({ end }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;

    const duration = 2000;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-violet-600 to-purple-700 py-24 text-white">

      {/* Background Blur */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl"
      />

      <div className="container relative mx-auto px-6">

        {/* Heading */}

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
            duration: 0.8,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full bg-white/20 px-5 py-2 font-semibold backdrop-blur-md">
            Platform Statistics
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Growing Every Day
          </h2>

          <p className="mt-6 text-lg text-violet-100">
            Thousands of readers trust BiblioDrop to discover,
            borrow, and enjoy books from libraries and
            independent book owners.
          </p>

        </motion.div>

        {/* Stats Grid */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={item.id}
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
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.04,
              }}
              className="group rounded-3xl bg-white/10 p-8 text-center shadow-xl backdrop-blur-xl"
            >

              <div
                className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-4xl shadow-lg`}
              >
                {item.icon}
              </div>

              <h3 className="text-5xl font-extrabold">

                <Counter end={item.value} />

                {item.suffix}

              </h3>

              <p className="mt-4 text-lg text-violet-100">
                {item.title}
              </p>

              <motion.div
                whileHover={{
                  width: "100%",
                }}
                className="mx-auto mt-6 h-1 w-16 rounded-full bg-white"
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}