"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const eventOptions = [
  {
    group: "Photography Services",
    options: [
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
    group: "Digital Marketing",
    options: ["Social Media Marketing", "Meta Ads", "Graphic Design"],
  },
  {
    group: "Production House",
    options: ["Short Films", "Web Series", "Video Production"],
  },
  {
    group: "Web Design",
    options: [
      "Business Websites",
      "Portfolio Websites",
      "E-commerce Websites",
      "Landing Pages",
      "Website Redesign",
    ],
  },
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, eventType, message }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setName("");
      setPhone("");
      setEventType("");
      setMessage("");

      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleOverlayClick = () => {
    if (status !== "sending") {
      setStatus("idle");
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-surface border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleOverlayClick}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-white mb-1">Book a Shoot</h2>
            <p className="text-muted text-sm mb-6">
              Fill in your details and we&apos;ll get back to you shortly.
            </p>

            {/* Success Message */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg">Thank you!</p>
                <p className="text-muted text-sm mt-1">Our team will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="booking-name" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label htmlFor="booking-event" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Event Type <span className="text-accent">*</span>
                  </label>
                  <select
                    id="booking-event"
                    required
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {eventOptions.map((group) => (
                      <optgroup key={group.group} label={group.group} className="bg-surface text-gray-300">
                        {group.options.map((opt) => (
                          <option key={opt} value={opt} className="bg-surface text-white">
                            {opt}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="booking-message" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Message <span className="text-gray-500">(optional)</span>
                  </label>
                  <textarea
                    id="booking-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 bg-accent text-black font-semibold rounded-full hover:bg-accent-hover transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Submit Booking"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
