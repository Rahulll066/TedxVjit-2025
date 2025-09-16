
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';

export default function JoinTedxSection() {
  return (
    <section className="w-full bg-black py-20 px-4 flex flex-col items-center">
      {/* Top Heading & Subtitle */}
      <div className="w-full max-w-4xl flex flex-col items-center mb-8">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide text-center drop-shadow-lg">Join TEDx VJIT</h1>
        <p className="text-red-400 text-lg md:text-xl font-semibold text-center mt-4">Unleash Ideas. Ignite Change. Experience Inspiration.</p>
      </div>
      {/* Event Info Row */}
      <div className="w-full max-w-3xl flex flex-row items-center justify-center gap-8 mb-12">
        <div className="flex items-center gap-2 bg-black/70 px-4 py-2 rounded-lg">
          <CalendarDays className="text-red-400 w-6 h-6" />
          <span className="text-white text-lg font-medium">September 28, 2025</span>
        </div>
        <div className="flex items-center gap-2 bg-black/70 px-4 py-2 rounded-lg">
          <MapPin className="text-red-400 w-6 h-6" />
          <span className="text-white text-lg font-medium">VJIT Campus, Hyderabad</span>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-stretch justify-center gap-12 md:gap-20">
        {/* Left: Buttons */}
        <div className="flex flex-col gap-8 md:gap-10 flex-1 items-center md:items-start justify-center md:pl-8">
          {/* Register as a Speaker Button */}
          <motion.button
            className="relative flex items-center justify-center font-semibold text-white rounded-[1.2em] overflow-hidden cursor-pointer bg-red-600 px-[2em] pr-[4em] py-[1em] h-[4em] shadow-[inset_0_0_2em_-0.6em_rgba(180,0,0,0.5)] min-w-[220px] sm:min-w-[300px] text-lg sm:text-2xl mt-4"
            initial="initial"
            animate="initial"
            whileHover="hovered"
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://forms.gle/FWnPXLSi6E2PZuT47', '_blank')}
          >
            {/* Button Text */}
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

          {/* Register as an Attendee Button */}
          <motion.button
            className="relative flex items-center justify-center font-semibold text-black rounded-[1.2em] overflow-hidden cursor-pointer bg-white px-[2em] pr-[4em] py-[1em] h-[4em] shadow-[inset_0_0_2em_-0.6em_rgba(180,0,0,0.15)] min-w-[220px] sm:min-w-[300px] text-lg sm:text-2xl mt-4 border border-gray-300"
            initial="initial"
            animate="initial"
            whileHover="hovered"
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://forms.gle/attendee-external-link', '_blank')}
          >
            {/* Button Text */}
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
            {/* Arrow Container */}
            <motion.div
              className="absolute top-0 right-0 h-full flex items-center justify-center bg-white rounded-[0.9em]"
              variants={{
                initial: { width: 44 },
                hovered: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ArrowRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </motion.button>
        </div>
        {/* Right: Content */}
        <div className="flex-1 text-white flex flex-col items-center md:items-end justify-center md:pr-8">
          <div className="bg-gradient-to-br from-red-900/60 via-black/80 to-black/90 rounded-2xl p-8 md:p-10 shadow-xl max-w-lg w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-right">Be a Part of the Movement</h2>
            <p className="text-lg md:text-xl text-right leading-relaxed">
              Whether you want to share your story as a speaker or experience the event as an attendee, <span className="text-red-400 font-semibold">TEDxVJIT 2025</span> welcomes you.<br className="hidden md:block" />
              <span className="text-red-400 font-semibold">Connect, learn, and grow</span> with a community passionate about ideas worth spreading.<br className="hidden md:block" />
              <span className="text-white/70">Don&apos;t miss out on a day of inspiration, networking, and transformative talks!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
