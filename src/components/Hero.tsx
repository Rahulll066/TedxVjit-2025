'use client'

import { motion } from "framer-motion"
import MetamorphosisScene from "./MetamorphosisScene"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const title = "Metamorphosis"
  const tagline = "Embracing Change, Igniting Growth..✨"
  const paragraph = "Move, Transform, Evolve — witness the power of radical transformation"

  // Function to scroll to the JoinTedxSection
  const scrollToJoinSection = () => {
    const joinSection = document.getElementById('join-tedx')
    if (joinSection) {
      joinSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

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
     bg-gradient-to-r from-red-600 to-red-700 px-[1.2em] pr-[3em] py-[0.35em] h-[2.8em] min-w-[150px] sm:min-w-[200px]
     shadow-[0_0_20px_rgba(220,38,38,0.4)] border border-red-500/30"
          initial="initial"
          animate="pulse"
          whileHover="hovered"
          whileTap={{ scale: 0.95 }}
          onClick={scrollToJoinSection}
          variants={{
            initial: {
              opacity: 0,
              y: 30,
              scale: 0.9,
              transition: { duration: 0.8, delay: 1.5, ease: "easeOut" }
            },
            pulse: {
              opacity: 1,
              y: 0,
              scale: 1,
              boxShadow: [
                "0 0 20px rgba(220,38,38,0.4)",
                "0 0 40px rgba(220,38,38,0.6)",
                "0 0 20px rgba(220,38,38,0.4)"
              ],
              transition: {
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }
            },
            hovered: {
              scale: 1.05,
              boxShadow: "0 0 50px rgba(220,38,38,0.8)",
              background: "linear-gradient(45deg, #dc2626, #b91c1c, #991b1b)",
              transition: { duration: 0.2, ease: "easeOut" }
            }
          }}
        >

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 -top-1 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            variants={{
              initial: { x: "-100%" },
              hovered: { x: "200%" }
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {/* Button Text */}
          <motion.span
            className="relative z-10 text-sm sm:text-base font-bold tracking-wide"
            variants={{
              initial: { opacity: 1, x: 0 },
              pulse: { opacity: 1, x: 0 },
              hovered: {
                opacity: 0,
                x: -10,
                filter: "blur(2px)"
              },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Register Now
          </motion.span>

          {/* Arrow Container */}
          <motion.div
            className="absolute top-0 right-0 h-full flex items-center justify-center bg-red-700 rounded-[0.9em]"
            variants={{
              initial: { width: 44 },
              hovered: { width: "100%" },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div
              variants={{
                initial: { rotate: 0, scale: 1 },
                hovered: { rotate: 360, scale: 1.2 }
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ArrowRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </motion.div>

          {/* Particle Effects */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-300 rounded-full"
              variants={{
                initial: {
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 50 - 25
                },
                hovered: {
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.random() * 300 - 150,
                  y: Math.random() * 100 - 50
                }
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.button>

      </div>
    </section>
  )
}