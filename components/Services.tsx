"use client";

import { motion } from "framer-motion";
import { Camera, Megaphone, Film, Globe } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description:
      "From timeless wedding moments to striking product imagery, we capture it all with precision and artistry.",
    items: [
      "Wedding Photography",
      "Candid Photography",
      "Birthday Photography",
      "Product Photography",
      "Model Photography",
      "Event Photography",
      "Commercial Photography",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Amplify your brand presence with strategic digital marketing solutions tailored to your business goals.",
    items: ["Social Media Marketing", "Meta Ads", "Graphic Design"],
  },
  {
    icon: Film,
    title: "Production House",
    description:
      "Cinematic storytelling brought to life through professional film and video production.",
    items: ["Short Films", "Web Series", "Video Production"],
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "We design and build modern, responsive, and high-performance websites for businesses, creators, and brands. Our goal is to create visually appealing websites that convert visitors into customers.",
    items: [
      "Business Websites",
      "Portfolio Websites",
      "E-commerce Websites",
      "Landing Pages",
      "Website Redesign"
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 px-4 bg-background">
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
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h2>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-surface rounded-2xl p-8 border border-white/5 hover:border-accent/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Service Items */}
              <ul className="space-y-2 mb-8">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#services"
                className="text-accent text-sm font-semibold hover:underline"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
