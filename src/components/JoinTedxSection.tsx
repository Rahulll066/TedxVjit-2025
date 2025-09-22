import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';

export default function JoinTedxSection() {
  return (
    <section id="join-tedx"
      className="relative w-full bg-gradient-to-b from-black via-red-950/30 to-black py-20 px-4 flex flex-col items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/30 blur-[180px] rounded-full" />
      </div>

      {/* Heading */}
      <div className="w-full max-w-4xl flex flex-col items-center mb-12 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Join <span className="text-red-500">TEDxVJIT 2025</span>
        </h1>
        <p className="text-red-400 text-lg md:text-2xl font-semibold mt-4">
          Unleash Ideas. Ignite Change. Experience Inspiration.
        </p>
      </div>

      {/* Event Info Row */}
      <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-16">
        <div className="flex items-center gap-3 bg-black/60 px-5 py-3 rounded-xl shadow-md border border-red-900/30">
          <CalendarDays className="text-red-400 w-6 h-6" />
          <span className="text-white text-lg font-medium">September 28, 2025</span>
        </div>
        <div className="flex items-center gap-3 bg-black/60 px-5 py-3 rounded-xl shadow-md border border-red-900/30">
          <MapPin className="text-red-400 w-6 h-6" />
          <span className="text-white text-lg font-medium">VJIT Campus, Hyderabad</span>
        </div>
      </div>

      {/* Main CTA Row */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch justify-center gap-12 md:gap-20">
        {/* Left: Buttons */}
        <div className="flex flex-col gap-8 flex-1 items-center md:items-start justify-center">
          {/* Speaker CTA */}
          <motion.button
            className="relative flex items-center justify-center font-bold text-white rounded-[1.2em] overflow-hidden cursor-pointer bg-gradient-to-r from-red-600 to-red-700 px-[2.5em] pr-[4em] py-[1em] h-[4em] shadow-[0_0_20px_rgba(220,38,38,0.5)] min-w-[220px] sm:min-w-[300px] text-lg sm:text-2xl"
            initial="initial"
            animate="initial"
            whileHover="hovered"
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://forms.gle/FWnPXLSi6E2PZuT47', '_blank')}
          >
            <motion.span
              className="relative z-10 text-base sm:text-2xl"
              variants={{
                initial: { opacity: 1 },
                hovered: { opacity: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Register as a Speaker
            </motion.span>
            <motion.div
              className="absolute top-0 right-0 h-full flex items-center justify-center bg-red-700 rounded-[1.2em]"
              variants={{
                initial: { width: 48 },
                hovered: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ArrowRight className="text-white w-6 h-6" />
            </motion.div>
          </motion.button>

          {/* Attendee CTA */}
          <motion.button
            className="relative flex items-center justify-center font-bold text-black rounded-[1.2em] overflow-hidden cursor-pointer bg-gradient-to-r from-white to-gray-100 px-[2.5em] pr-[4em] py-[1em] h-[4em] shadow-[0_0_20px_rgba(255,255,255,0.3)] min-w-[220px] sm:min-w-[300px] text-lg sm:text-2xl border border-gray-200"
            initial="initial"
            animate="initial"
            whileHover="hovered"
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://vpulse.campx.in/vpulse/ums/public/form/68c93a448c6af42941ea051b', '_blank')}
          >
            <motion.span
              className="relative z-10 text-base sm:text-2xl"
              variants={{
                initial: { opacity: 1 },
                hovered: { opacity: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Register as an Attendee
            </motion.span>
            <motion.div
              className="absolute top-0 right-0 h-full flex items-center justify-center bg-white rounded-[1.2em]"
              variants={{
                initial: { width: 48 },
                hovered: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ArrowRight className="text-black w-6 h-6" />
            </motion.div>
          </motion.button>
        </div>

        {/* Right: Persuasive Text */}
        <div className="flex-1 text-white flex flex-col items-center md:items-end justify-center">
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
                <span className="text-red-400 font-semibold">TEDxVJIT 2025</span>
                welcomes you.
              </p>
              <p>
                <span className="text-red-400 font-semibold">Connect, learn, and grow</span>
                with a community passionate about ideas worth spreading.
              </p>
              <p className="text-white/80">
                Don&apos;t miss out on a day of inspiration, networking, and transformative talks!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
