"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Selection",
    description:
      "We have more than 13 million titles to choose from, from the earliest board books to the all-time classics.",
    image: "/Home04_imb.jpg",
  },
  {
    id: 2,
    title: "Purchasing Power",
    description:
      "With Wish Lists you can choose to be notified the instant we find a copy, see how often we find rare titles.",
    image: "/Home04_imb1.jpg",
  },
  {
    id: 3,
    title: "Used & New Books",
    description:
      "If there is no demand for a book, we will donate it to charity, or we'll recycle it.",
    image: "/Home04_imb2.jpg",
  },
  {
    id: 4,
    title: "Shipping & More",
    description:
      "When you've found the books you want we'll ship qualifying orders to your door for FREE.",
    image: "/Home04_imb3.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-10"
        >
          {features.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-center group"
            >
              {/* Same Image Size */}
              <div className="relative w-[170px] h-[120px] mx-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-7 text-2xl md:text-[34px] font-bold text-gray-900 leading-tight">
                {item.title}
              </h3>

              <p className="mt-5 max-w-[280px] mx-auto text-gray-500 text-base md:text-lg leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}