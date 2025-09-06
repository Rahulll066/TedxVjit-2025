'use client'


import TypingText from '../components/TypingText'
import { Ticket } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden font-['Montserrat',sans-serif] text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/10 to-black/30 z-10" />

      {/* Hero Content with Framer Motion */}
      <motion.div
        className="relative z-30 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-[0_4px_30px_rgba(255,0,0,0.7)] px-2"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-red-600">TEDx</span>VJIT 2025
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <TypingText
            prefix="Metamorphosis"
            text=" — The Evolution of Thought. The Power of Change."
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl text-white/90 leading-relaxed px-2"
          />
        </motion.div>

        <motion.a
          href="#register"
          className="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold bg-red-600 text-white transition-all duration-300 shadow-lg inline-flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center max-w-xs sm:max-w-none hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 hover:bg-red-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <Ticket size={18} strokeWidth={2.5} className="text-white sm:w-5 sm:h-5" />
          Reserve Your Seat
        </motion.a>
      </motion.div>
    </section>
  )
}
