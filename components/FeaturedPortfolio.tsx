"use client";

import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Wedding Elegance",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  },
  {
    title: "Brand Identity",
    category: "Product",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  },
  {
    title: "Fashion Forward",
    category: "Model",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
  },
  {
    title: "Corporate Events",
    category: "Event",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    title: "Cinematic Frames",
    category: "Film",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
  },
  {
    title: "Product Showcase",
    category: "Product",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
  {
    title: "Storytelling",
    category: "Film",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
  },
  {
    title: "Portrait Series",
    category: "Portrait",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturedPortfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 bg-background">
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
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Featured Portfolio
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-1">
                  {item.category}
                </p>
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#portfolio"
            className="inline-block px-8 py-3.5 border-2 border-white/20 text-white font-semibold rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Explore Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
