"use client";

import React from "react";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PreviousCarousel from "./PreviousCarousel";

export default function PreviousPreview() {
  const images = [
    "/gallery/_DSC7571.JPG",
    "/gallery/_DSC8353.JPG",
    "/gallery/KVK_3568.JPG",
    "/gallery/KVK_3670.JPG",
    "/gallery/DSC00943.JPG",
    "/gallery/_DSC7474.JPG"
  ];

  return (
    <section className="relative w-full min-h-[90vh] bg-black flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-16 sm:py-24 gap-8">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0">
        <div className="relative max-w-xl w-full flex flex-col items-center">
          <PreviousCarousel images={images.map(src => ({ src }))} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          <span className="text-red-600">2024:</span> Power of Persistence
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mb-14" />
        <p className="text-lg sm:text-xl text-white mb-8 text-justify">
          The 2024 edition of TEDxVJIT celebrated the unwavering spirit of persistence. Our speakers shared stories of resilience, innovation, and the relentless pursuit of dreams, inspiring everyone to push beyond boundaries.
        </p>
        <p className="text-lg sm:text-xl text-white mb-10 text-justify">
          From breakthrough ideas to personal journeys, the event was a testament to the power of never giving up. Relive the highlights and discover what made TEDxVJIT 2024 unforgettable.
        </p>
        <motion.button
          className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer bg-red-600 px-[1.2em] pr-[3em] py-[0.35em] h-[2.8em] shadow-[inset_0_0_1.6em_-0.6em_rgba(180,0,0,0.5)] min-w-[150px] sm:min-w-[200px] mt-4"
          initial="initial"
          animate="initial"
          whileHover="hovered"
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/gallery'}
        >
          {/* Button Text */}
          <motion.span
            className="relative z-10 text-sm sm:text-base"
            variants={{
              initial: { opacity: 1 },
              hovered: { opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            View 2024 Highlights
          </motion.span>

          {/* Arrow Container */}
          <motion.div
            className="absolute top-0 right-0 h-full flex items-center justify-center bg-red-600 rounded-[0.9em]"
            variants={{
              initial: { width: 44 },
              hovered: { width: "100%" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ArrowRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </motion.button>

      </div>
    </section>
  );
}
