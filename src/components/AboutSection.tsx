'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  useEffect(() => {
    // Animate image
    gsap.utils.toArray<HTMLElement>('.about-img').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'power2.out',
      })
    })

    // Animate heading
    gsap.utils.toArray<HTMLElement>('.about-heading').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        scale: 0.97,
        duration: 0.8,
        ease: 'power2.out',
      })
    })

    // Animate paragraphs
    gsap.utils.toArray<HTMLElement>('.about-para').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 25,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power2.out',
      })
    })
  }, [])

  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-black via-red-900 to-black flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-16 sm:py-24 gap-8">
      {/* Left Image */}
      <div className="about-img w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black/60 max-w-xl w-full aspect-video">
          <img
            src="https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/G-images-2.JPG?updatedAt=1759593304566"
            alt="TEDxVJIT event"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start max-w-2xl">
        <h2 className="about-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
          About <span className="text-white">Metamorphosis</span>
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mb-14" />

        {/* Paragraphs */}
        {[
          'Metamorphosis is about letting go of old ways and embracing something new. It is the quiet space between endings and beginnings, where challenges turn into opportunities and chaos becomes creation.',
          'Real change starts within us, whether through a shift in perspective, a struggle that reshapes us, or a dream that refuses to fade. These inner transformations ripple outward, touching lives and inspiring the world around us.'
        ].map((text, i) => (
          <p
            key={i}
            className="about-para text-lg sm:text-xl text-white mb-6 leading-relaxed tracking-wide"
          >
            {text}
          </p>
        ))}

        {/* Button */}
        <motion.button
          className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer bg-red-600 px-[1.2em] pr-[3em] py-[0.35em] h-[2.8em] shadow-[inset_0_0_1.6em_-0.6em_rgba(180,0,0,0.5)] min-w-[150px] sm:min-w-[200px] mt-4"
          initial="initial"
          animate="initial"
          whileHover="hovered"
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = '/about')}
        >
          <motion.span
            className="relative z-10 text-sm sm:text-base"
            variants={{
              initial: { opacity: 1 },
              hovered: { opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            Learn More About TEDx
          </motion.span>

          <motion.div
            className="absolute top-0 right-0 h-full flex items-center justify-center bg-red-600 rounded-[0.9em]"
            variants={{
              initial: { width: 44 },
              hovered: { width: '100%' },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ArrowRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
