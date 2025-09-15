'use client'

import { motion } from "framer-motion"
import MetamorphosisScene from "./MetamorphosisScene"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const title = "Metamorphosis"
  const tagline = "Embracing Change, Igniting Growth..✨"
  const paragraph = "Move, Transform, Evolve — witness the power of radical transformation"

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <MetamorphosisScene />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 gap-6 sm:gap-8 md:gap-10">

        {/* Main Title */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-8xl lg:text-8xl font-extrabold bg-clip-text text-transparent 
                     bg-gradient-to-r from-red-700 via-red-400 to-red-700 uppercase tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          className="text-lg sm:text-2xl md:text-4xl font-semibold text-white tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          {tagline}
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="hidden md:block text-xs  md:text-lg text-white/80 max-w-sm sm:max-w-md md:max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          {paragraph.split(" ").map((word, i) => (
            <span key={i} className={word.match(/Transform|Evolve/) ? "text-red-400 font-semibold" : ""}>
              {word}{" "}
            </span>
          ))}
        </motion.p>

        {/* Button */}
        <motion.button
          className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer
             bg-red-600 px-[1.2em] pr-[3em] py-[0.35em] h-[2.8em] shadow-[inset_0_0_1.6em_-0.6em_rgba(180,0,0,0.5)]] min-w-[150px] sm:min-w-[200px]"
          initial="initial"
          animate="initial"
          whileHover="hovered"
          whileTap={{ scale: 0.95 }}
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
            Register Now
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
  )
}
