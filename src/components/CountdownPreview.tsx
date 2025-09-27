"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AnimatedNumberCountdown from "@/components/countdown-number";

const CountdownPreview = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-24 px-4 sm:px-8"
      style={{
        background: "radial-gradient(circle at 50% 40%, #ff1b3c 0%, #1a0a0a 100%)",
      }}
    >
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center drop-shadow-lg tracking-tight"
      >
        Event Starts in
      </motion.h2>

      {/* Countdown Numbers */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-center"
      >
        <AnimatedNumberCountdown
          endDate={new Date("2025-10-25T00:00:00")}
          className="my-4 text-white text-6xl md:text-7xl font-extrabold gap-8"
        />
      </motion.div>

      {/* Badge & Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col items-center mt-8"
      >
        <Badge
          variant="outline"
          className="rounded-[14px] border border-red-600 text-base text-white bg-black/80 mb-6 px-4 py-2 flex items-center gap-2 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#ff1b3c]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-lg font-semibold text-white">25th October 2025</span>
        </Badge>

        {/* Animated Button */}
        <motion.button
          onClick={() => {
            const section = document.getElementById('join-tedx')
            if (section) section.scrollIntoView({ behavior: 'smooth' })
          }}
          className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer
            bg-red-600 px-[1.2em] pr-[3em] py-[0.35em] h-[2.8em] min-w-[150px] sm:min-w-[200px]
            shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-300"
          initial="initial"
          animate="initial"
          whileHover="hovered"
          whileTap={{ scale: 0.96 }}
        >
          <motion.span
            className="relative z-10 text-sm sm:text-base"
            variants={{
              initial: { opacity: 1 },
              hovered: { opacity: 0 },
            }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            Book Your Ticket Now
          </motion.span>

          <motion.div
            className="absolute top-0 right-0 h-full flex items-center justify-center bg-red-600 rounded-[0.9em]"
            variants={{
              initial: { width: 44 },
              hovered: { width: '100%' },
            }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <ArrowRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CountdownPreview;
