"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

export default function JoinTedxSection() {
  return (
    <section
      id="join-tedx"
      className="relative w-full bg-gradient-to-b from-black via-red-950/30 to-black py-20 px-6 flex flex-col items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/30 blur-[180px] rounded-full" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl flex flex-col items-center mb-12 text-center"
      >
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Join <span className="text-red-500">TEDxVJIT 2025</span>
        </h1>
        <p className="text-white text-lg md:text-2xl font-semibold mt-4">
          Metamorphosis: The Journey of Becoming
        </p>
      </motion.div>

      {/* Event Info Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 mb-14"
      >
        <div className="flex items-center gap-3 bg-black/60 px-5 py-3 rounded-xl shadow-md border border-red-900/30">
          <CalendarDays className="text-red-400 w-5 h-5" />
          <span className="text-white text-base md:text-lg font-medium">
            October 25, 2025
          </span>
        </div>
        <div className="flex items-center gap-3 bg-black/60 px-5 py-3 rounded-xl shadow-md border border-red-900/30">
          <MapPin className="text-red-400 w-5 h-5" />
          <span className="text-white text-base md:text-lg font-medium">
            VJIT Campus, Hyderabad
          </span>
        </div>
      </motion.div>

      {/* Main CTA Row */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Left: Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-5 flex-1 items-center justify-center w-full max-w-2xl"
        >
          <div className="flex flex-col md:flex-row gap-5 w-full">
            {/* Speaker CTA */}
            <motion.button
              onClick={() =>
                window.open("https://forms.gle/FWnPXLSi6E2PZuT47", "_blank")
              }
              className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer
               bg-red-600 px-[1.75em] pr-[3em] py-[0.55em] h-[2.8em] shadow-[inset_0_0_1.6em_-0.6em_rgba(180,0,0,0.5)] w-full md:w-auto md:flex-1"
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
                Register as a Speaker
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

            {/* Attendee CTA */}
            <motion.button
              onClick={() =>
                window.open(
                  "https://vpulse.campx.in/vpulse/ums/public/form/68c93a448c6af42941ea051b",
                  "_blank"
                )
              }
              className="relative flex items-center justify-center font-semibold text-black rounded-[0.9em] overflow-hidden cursor-pointer
               bg-white px-[1.75em] pr-[3em] py-[0.55em] h-[2.8em] shadow-[inset_0_0_1.6em_-0.6em_rgba(180,0,0,0.5)] w-full md:w-auto md:flex-1"
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
                Register as an Attendee
              </motion.span>

              <motion.div
                className="absolute top-0 right-0 h-full flex items-center justify-center bg-white rounded-[0.9em]"
                variants={{
                  initial: { width: 44 },
                  hovered: { width: '100%' },
                }}
                transition={{ duration: 0.28, ease: 'easeInOut' }}
              >
                <ArrowRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
            </motion.button>
          </div>

          {/* Urgency Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative text-white text-sm md:text-lg font-semibold flex items-center justify-center gap-2 text-center mt-6"
          >
            {/* Glowing background */}
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-red-600/10 via-yellow-500/20 to-red-600/10 blur-2xl animate-pulse-slow rounded-full"></span>

            {/* Gradient animated text */}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-[length:200%_200%] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]"
            >
              Your ticket is golden worthy – Grab your seat before it's too late! 
            </motion.span>
          </motion.p>

        </motion.div>

        {/* Right: Persuasive Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 text-white flex items-center justify-center md:justify-end w-full max-w-lg"
        >
          <div className="bg-gradient-to-br from-red-900/60 via-black/70 to-black/90 rounded-2xl p-6 md:p-8 shadow-2xl w-full border border-red-800/40 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Join the <span className="text-red-500">Movement</span>
            </h2>
            <p className="text-gray-100 text-sm md:text-base leading-relaxed">
              Step into a space where bold ideas, powerful stories, and meaningful conversations come together to spark real change.
              At <span className="text-red-500">TEDxVJIT 2025</span>, whether you're taking the stage or watching from the audience, you become part of a global community driven by curiosity and purpose.
              Experience a day of inspiration, connection, and transformation designed to challenge your thinking, fuel your passion, and empower you to make a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}