"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PreviousCarousel from "./PreviousCarousel";

export default function PreviousPreview() {
  const images = [
    "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/_DSC7474.JPG?updatedAt=1759593301174",
    "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/Screenshot%202025-10-04%20213202.png?updatedAt=1759593832115",
    "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/G-images-1.JPG?updatedAt=1759593298737",
    "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/G-images-2.JPG?updatedAt=1759593304566",
    "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/G-images-3.JPG?updatedAt=1759593295760",
    "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/Screenshot%202025-10-04%20213144.png?updatedAt=1759593832587",
  ];

  return (
    <section className="relative w-full min-h-[90vh] bg-black flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-16 sm:py-24 gap-8">
      
      {/* Left Carousel with slide-in */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative max-w-xl w-full flex flex-col items-center">
          <PreviousCarousel images={images.map((src) => ({ src }))} />
        </div>
      </motion.div>

      {/* Right Content with fade-up */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center items-start max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          <span className="text-red-600">2024:</span> Power of Persistence
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mb-10" />

        <div className="space-y-6 sm:space-y-8 text-white text-lg sm:text-xl text-justify">
          <p>
            The 2024 edition of TEDxVJIT celebrated the unwavering spirit of persistence. 
            Our speakers shared stories of resilience, innovation, and the relentless pursuit 
            of dreams, inspiring everyone to push beyond boundaries.
          </p>
          <p>
            From breakthrough ideas to personal journeys, the event was a testament to the 
            power of never giving up. Relive the highlights and discover what made TEDxVJIT 
            2024 unforgettable.
          </p>
        </div>

        {/* View Highlights Button */}
        <motion.button
          onClick={() => (window.location.href = "/gallery")}
          className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer
          mt-4   bg-red-600 px-[1.2em] pr-[3em] py-[0.35em] h-[2.8em] shadow-[inset_0_0_1.6em_-0.6em_rgba(180,0,0,0.5)]] min-w-[150px] sm:min-w-[200px]"
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
            View 2024 Highlights
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
}
