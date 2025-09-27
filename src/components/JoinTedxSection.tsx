"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

export default function JoinTedxSection() {
  return (
    <section
      id="join-tedx"
      className="relative w-full bg-gradient-to-b from-black via-red-950/30 to-black py-24 px-4 flex flex-col items-center overflow-hidden"
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
          Unleash Ideas. Ignite Change. Experience Inspiration.
        </p>
      </motion.div>

      {/* Event Info Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-16"
      >
        <div className="flex items-center gap-3 bg-black/60 px-5 py-3 rounded-xl shadow-md border border-red-900/30">
          <CalendarDays className="text-red-400 w-6 h-6" />
          <span className="text-white text-lg font-medium">October 25, 2025</span>
        </div>
        <div className="flex items-center gap-3 bg-black/60 px-5 py-3 rounded-xl shadow-md border border-red-900/30">
          <MapPin className="text-red-400 w-6 h-6" />
          <span className="text-white text-lg font-medium">VJIT Campus, Hyderabad</span>
        </div>
      </motion.div>

      {/* Main CTA Row */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch justify-center gap-12 md:gap-20">
        {/* Left: Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-8 flex-1 items-center md:items-start justify-center"
        >
          {/* Speaker CTA */}
          <motion.button
            className="relative flex items-center justify-center font-bold text-white rounded-[1.2em] overflow-hidden cursor-pointer bg-gradient-to-r from-red-600 to-red-700 px-[2.5em] pr-[4em] py-[1em] h-[4em] shadow-[0_0_20px_rgba(220,38,38,0.5)] min-w-[220px] sm:min-w-[300px] text-lg sm:text-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "https://forms.gle/FWnPXLSi6E2PZuT47",
                "_blank"
              )
            }
          >
            Register as a Speaker
            <ArrowRight className="ml-3 w-6 h-6" />
          </motion.button>

          {/* Attendee CTA */}
          <motion.button
            className="relative flex items-center justify-center font-bold text-black rounded-[1.2em] overflow-hidden cursor-pointer bg-gradient-to-r from-white to-gray-100 px-[2.5em] pr-[4em] py-[1em] h-[4em] shadow-[0_0_20px_rgba(255,255,255,0.3)] min-w-[220px] sm:min-w-[300px] text-lg sm:text-2xl border border-gray-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "https://vpulse.campx.in/vpulse/ums/public/form/68c93a448c6af42941ea051b",
                "_blank"
              )
            }
          >
            Register as an Attendee
            <ArrowRight className="ml-3 w-6 h-6" />
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-right">
              Be a Part of the Movement
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-center md:text-right leading-relaxed">
              <p>
                Whether you want to share your story as a{" "}
                <span className="text-red-400 font-semibold">speaker</span> or
                experience the event as an{" "}
                <span className="text-red-400 font-semibold">attendee</span>,{" "}
                <span className="text-red-400 font-semibold">TEDxVJIT 2025</span>{" "}
                welcomes you.
              </p>
              <p>
                <span className="text-red-400 font-semibold">Connect, learn, and grow</span>{" "}
                with a community passionate about ideas worth spreading.
              </p>
              <p className="text-white/80">
                Don&apos;t miss out on a day of inspiration, networking, and transformative talks!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
