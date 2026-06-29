"use client";

import { motion } from "framer-motion";

import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import MissionVision from "@/components/about/MissionVision";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import HowItWorks from "@/components/about/HowItWorks";
import StatsSection from "@/components/about/StatsSection";
import ValuesSection from "@/components/about/ValuesSection";
import FAQSection from "@/components/about/FAQSection";
import CTASection from "@/components/about/CTASection";

export default function AboutPage() {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="overflow-hidden bg-gray-50"
    >
      <AboutHero />

      <StorySection />

      <MissionVision />

      <WhyChooseUs />

      <HowItWorks />

      <StatsSection />

      <ValuesSection />

      <FAQSection />

      <CTASection />
    </motion.main>
  );
}