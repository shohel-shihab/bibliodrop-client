"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaQuestionCircle,
} from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "What is BiblioDrop?",
    answer:
      "BiblioDrop is an online book-sharing platform that connects readers with local libraries and independent book owners. Users can browse books, request doorstep delivery, and enjoy reading without purchasing every book.",
  },
  {
    id: 2,
    question: "How do I request a book?",
    answer:
      "Simply browse our collection, open a book's details page, click 'Request Delivery', complete the payment, and your request will be sent to the librarian.",
  },
  {
    id: 3,
    question: "How are delivery fees calculated?",
    answer:
      "Each librarian sets a delivery fee for their books. You only pay this delivery charge during checkout through our secure Stripe payment system.",
  },
  {
    id: 4,
    question: "Can I become a librarian?",
    answer:
      "Yes. During registration you can choose the Librarian role and start listing your own books after logging in.",
  },
  {
    id: 5,
    question: "Is my payment secure?",
    answer:
      "Absolutely. BiblioDrop uses Stripe for secure online payments, ensuring your payment information is protected.",
  },
  {
    id: 6,
    question: "How do I return borrowed books?",
    answer:
      "Once you've finished reading, follow the return instructions provided by the librarian. The delivery status will be updated in your dashboard.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">

      {/* Background */}

      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />

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
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-violet-100 px-5 py-2 font-semibold text-violet-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-800 lg:text-5xl">
            Got Questions?
            <br />
            We've Got Answers
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to the most commonly asked questions about
            borrowing books, payments, deliveries, and becoming a
            librarian.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="mx-auto max-w-4xl space-y-5">

          {faqs.map((faq, index) => {

            const open = active === index;

            return (

              <motion.div
                key={faq.id}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  delay: index * 0.08,
                }}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >

                {/* Question */}

                <button
                  onClick={() =>
                    setActive(open ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >

                  <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-violet-600 p-3 text-white">
                      <FaQuestionCircle />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>

                  </div>

                  <motion.div
                    animate={{
                      rotate: open ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="text-violet-600"
                  >
                    <FaChevronDown />
                  </motion.div>

                </button>

                {/* Answer */}

                <AnimatePresence>

                  {open && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >

                      <div className="border-t bg-gray-50 px-8 py-6">

                        <p className="leading-8 text-gray-600">
                          {faq.answer}
                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}