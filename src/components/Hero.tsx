"use client"
import { motion } from "framer-motion"
import ButterflySwarm from "./ButterflySwarm"
import TypingText from "./TypingText"

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      {/* Background butterflies */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <ButterflySwarm />
      </motion.div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 text-center">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
                     font-extrabold leading-snug sm:leading-tight mb-4 sm:mb-6 
                     bg-gradient-to-r from-red-900 via-red-400 to-red-900 
                     bg-clip-text text-transparent 
                     drop-shadow-[0_0_12px_rgba(255,0,0,0.5)]"
        >
          <span className="animate-text-shimmer bg-gradient-to-r from-red-700 via-red-300 to-red-700 bg-clip-text text-transparent">
            Metamorphosis
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-full"
        >
          <TypingText
            text="Embracing Change, Igniting Growth..✨"
            className="text-base sm:text-lg md:text-xl lg:text-2xl 
                       text-zinc-300 font-medium 
                       max-w-md sm:max-w-xl md:max-w-2xl 
                       mx-auto mb-8 sm:mb-10 animate-glow px-2"
            speed={70}
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, delayChildren: 1 },
            },
          }}
          className="flex items-center justify-center gap-4 sm:gap-5 mt-2 sm:mt-4 w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 16px rgba(220,38,38,0.7)" }}
            className="px-6 sm:px-8 py-3 sm:py-4 
                       bg-red-600 text-white rounded-lg sm:rounded-xl font-semibold 
                       hover:bg-red-700 transition shadow-lg hover:shadow-red-600/40 text-xs sm:text-base"
          >
            Register Now →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
