"use client";

import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

export default function CTA() {
  const { openBooking } = useBooking();

  return (
    <section className="py-24 sm:py-32 px-4 bg-background relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Get Started
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Capture Your Story?
        </h2>
        <p className="text-muted text-lg mb-10">
          Let&apos;s create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={openBooking}
            className="px-8 py-3.5 bg-accent text-black font-semibold rounded-full hover:bg-accent-hover transition-colors duration-200"
          >
            Book a Shoot
          </button>
          <a
            href="#contact"
            className="px-8 py-3.5 border-2 border-white/20 text-white font-semibold rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
