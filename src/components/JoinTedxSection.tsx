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
        <p className="text-red-400 text-lg md:text-2xl font-semibold mt-4">
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
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        {/* Left: Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-row gap-5 flex-1 items-center md:items-start justify-center"
        >
          {/* Speaker CTA */}
          <motion.button
          onClick={() =>
              window.open("https://forms.gle/FWnPXLSi6E2PZuT47", "_blank")
            }
          className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer
             bg-red-600 px-[1.75em] pr-[3em] py-[0.55em] h-[2.8em] shadow-[inset_0_0_1.6em_-0.6em_rgba(180,0,0,0.5)]] min-w-[150px] sm:min-w-[200px]"
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
             bg-white px-[1.75em] pr-[3em] py-[0.55em] h-[2.8em] shadow-[inset_0_0_1.6em_-0.6em_rgba(180,0,0,0.5)]] min-w-[150px] sm:min-w-[200px]"
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
        </motion.div>

        {/* Right: Persuasive Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 text-white flex flex-col items-center md:items-end justify-center"
        >
          <div className="bg-gradient-to-br from-red-900/70 via-black/80 to-black rounded-2xl p-8 md:p-10 shadow-2xl max-w-lg w-full border border-red-800/30">
            <h2 className="text-xl md:text-2xl font-bold mb-5 text-center md:text-right">
              Be a Part of the Movement
            </h2>
            <div className="space-y-5 text-base md:text-lg text-center md:text-right leading-relaxed">
              <p>
                Whether you want to share your story as a{" "}
                <span className="text-red-400 font-semibold">speaker</span> or
                experience the event as an{" "}
                <span className="text-red-400 font-semibold">attendee</span>,{" "}
                <span className="text-red-400 font-semibold">TEDxVJIT 2025</span>{" "}
                welcomes you.
              </p>
              <p>
                <span className="text-red-400 font-semibold">
                  Connect, learn, and grow
                </span>{" "}
                with a community passionate about ideas worth spreading.
              </p>
              <p className="text-white/80">
                Don&apos;t miss out on a day of inspiration, networking, and
                transformative talks!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
