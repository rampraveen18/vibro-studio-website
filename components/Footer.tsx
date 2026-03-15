"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/_vibro_production?igsh=MWI1YjMzNzczbHAyMQ%3D%3D&utm_source=qr", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@vibroagency?si=Pd8yxri2rJNNJejD", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-surface border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Vibro Productions"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              A creative studio specializing in photography, digital marketing,
              film production, and web design. We turn your vision into stunning
              visual stories.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent/20 hover:text-accent transition-colors duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-muted text-sm hover:text-accent transition-colors duration-200"
                >
                  Photography
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted text-sm hover:text-accent transition-colors duration-200"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted text-sm hover:text-accent transition-colors duration-200"
                >
                  Film Production
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted text-sm hover:text-accent transition-colors duration-200"
                >
                  Web Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted text-sm">
                <Mail size={16} className="text-accent shrink-0" />
                vibroagency@gmail.com
              </li>
              <li className="flex items-center gap-3 text-muted text-sm">
                <Phone size={16} className="text-accent shrink-0" />
                +91 80198 19841
              </li>
              <li className="flex items-start gap-3 text-muted text-sm">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                Vijayawada, Andhra Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Vibro Productions. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Designed and Developed by Rampraveen 😉
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
