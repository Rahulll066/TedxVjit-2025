'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const twinkleRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = twinkleRef.current
    if (!container) return

    // generate glowing amber dots
    for (let i = 0; i < 15; i++) {
      const dot = document.createElement('div')
      dot.className = 'absolute rounded-full w-2 h-2 bg-red-600/70 blur-[1px]'
      dot.style.top = `${Math.random() * 100}%`
      dot.style.left = `${Math.random() * 100}%`
      dot.style.opacity = `${Math.random() * 0.6 + 0.3}`
      dot.style.animation = `twinkle ${Math.random() * 6 + 2}s infinite alternate, float ${Math.random() * 8 + 4}s ease-in-out infinite alternate`
      container.appendChild(dot)
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden font-['Playfair Display',serif] text-white bg-gradient-to-br from-black">

      {/* Twinkle Layer */}
      <div ref={twinkleRef} className="absolute inset-0 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        <motion.h1
          className="relative text-xl md:text-4xl lg:text-6xl font-extrabold tracking-wider leading-tight 
  bg-clip-text text-transparent 
  bg-gradient-to-r from-red-800 via-red-500 to-red-800 
  
  uppercase"
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <span className="bg-clip-text text-transparent bg-[length:200%_200%]">
            Metamorphosis
          </span>
        </motion.h1>

        <motion.div
          className="mt-5 h-1.5 w-40 bg-gradient-to-t from-red-600 via-orange-500 to-red-700 rounded-full shadow-[0_0_25px_rgba(255,100,100,0.9)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1.5 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        <motion.p
          className="mt-10 text-lg sm:text-xl md:text-xl max-w-3xl font-medium text-white/95 leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          From <span className="text-red-400 font-bold">ashes</span> to <span className="text-orange-400 font-bold">awakening</span>,
          from <span className="text-red-400 font-bold">ideas</span> to <span className="text-orange-400 font-bold">impact</span> —
          a <span className="italic text-red-300">radical transformation</span> begins <span className="text-red-500 font-extrabold">here.</span>
        </motion.p>

      </div>
    </section>
  )
}
