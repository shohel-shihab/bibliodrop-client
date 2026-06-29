"use client";

import { motion } from "framer-motion";
import {
  FaBullseye,
  FaRocket,
  FaBookOpen,
  FaUsers,
  FaLeaf,
  FaShieldAlt,
} from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="bg-gray-50 py-24">

      <div className="container mx-auto px-6">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-violet-100 px-5 py-2 font-semibold text-violet-700">
            Mission & Vision
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-800 lg:text-5xl">
            Inspiring Every Reader,
            <br />
            Empowering Every Library
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission is to make reading easier and more accessible,
            while building a trusted community where readers and
            librarians grow together.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Mission Card */}

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
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 to-purple-700 p-10 text-white shadow-2xl"
          >

            {/* Background Circle */}

            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />

            <div className="relative">

              <div className="mb-8 inline-flex rounded-2xl bg-white/20 p-5 text-4xl backdrop-blur-md">
                <FaBullseye />
              </div>

              <h3 className="text-3xl font-bold">
                Our Mission
              </h3>

              <p className="mt-6 leading-8 text-violet-100">
                To connect readers with trusted libraries and
                independent book owners through an easy,
                affordable, and reliable delivery platform,
                encouraging knowledge sharing and lifelong
                learning.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <FaBookOpen className="text-yellow-300" />

                  <span>
                    Improve access to quality books.
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaUsers className="text-yellow-300" />

                  <span>
                    Build a stronger reading community.
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaLeaf className="text-yellow-300" />

                  <span>
                    Promote sustainable book sharing.
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Vision Card */}

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
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-2xl"
          >

            <div className="absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-violet-100 blur-3xl" />

            <div className="relative">

              <div className="mb-8 inline-flex rounded-2xl bg-violet-600 p-5 text-4xl text-white">
                <FaRocket />
              </div>

              <h3 className="text-3xl font-bold text-gray-800">
                Our Vision
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                To become Bangladesh's leading digital library
                ecosystem where every reader can discover,
                borrow, and enjoy books effortlessly while
                supporting local libraries and independent
                book owners.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <FaShieldAlt className="text-violet-600" />

                  <span className="text-gray-700">
                    Trusted and secure platform.
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaUsers className="text-violet-600" />

                  <span className="text-gray-700">
                    Connect thousands of readers.
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaRocket className="text-violet-600" />

                  <span className="text-gray-700">
                    Expand across every district in Bangladesh.
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}