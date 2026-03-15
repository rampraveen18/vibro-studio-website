"use client";

import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

export default function OwnerVideo() {
  const { openBooking } = useBooking();

  return (
    <section id="about" className="py-24 sm:py-32 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Meet the Creator Behind the Lens <p className="text-accent text-sm">Katam Pramod Reddy</p>
          </h2>
          
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-[280px] sm:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden bg-black">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/vjkCSA4xMak"
                title="Meet the Creator"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Passionate About Visual Storytelling
            </h3>
            <p className="text-muted leading-relaxed text-lg">
              With over a 2years of experience in photography, digital marketing,
              and film production, our founder has shaped Vibro Productions into a
              creative powerhouse that transforms visions into stunning visual
              narratives.
            </p>
            <p className="text-muted leading-relaxed">
              Every project is approached with a commitment to excellence,
              creativity, and attention to detail. From intimate weddings to
              large-scale productions, we bring the same passion and
              professionalism to every frame we capture.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-accent">15+</p>
                <p className="text-sm text-muted">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">2+</p>
                <p className="text-sm text-muted">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">20+</p>
                <p className="text-sm text-muted">Happy Clients</p>
              </div>
            </div>
            <button
              onClick={openBooking}
              className="inline-block mt-4 px-8 py-3.5 bg-accent text-black font-semibold rounded-full hover:bg-accent-hover transition-colors duration-200"
            >
              Book Your Shoot
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
