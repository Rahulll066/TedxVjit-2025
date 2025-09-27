'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MetamorphosisScene from './MetamorphosisScene'
import { ArrowRight } from 'lucide-react'
import TypingText from './TypingText'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const title = 'METAMORPHOSIS'
  const tagline = 'The Journey of Becoming..'
  const paragraph =
    'Move, Transform, Evolve — witness the power of radical transformation'

  const heroRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const tagWrapRef = useRef<HTMLDivElement | null>(null)
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const btnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return

    const letters = titleRef.current.querySelectorAll<HTMLSpanElement>('.char')
    const inners = titleRef.current.querySelectorAll<HTMLSpanElement>('.charInner')
    gsap.set([letters, inners], { willChange: 'transform, opacity' })
    gsap.set(letters, { opacity: 0, y: 80, rotateX: -85, transformOrigin: '50% 50% -40px', perspective: 800 })
    gsap.set(inners, { xPercent: -100 })

    const tl = gsap.timeline({ defaults: { duration: 0.9, ease: 'expo.out' } })
    tl.to(inners, { xPercent: 0, duration: 0.85, stagger: 0.04, ease: 'power2.out' }, 0)
      .to(letters, { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.06, ease: 'back.out(1.6)' }, 0.06)
      .to(titleRef.current, { scale: 1.03, duration: 0.28, yoyo: true, repeat: 1, ease: 'power1.inOut' }, '>-0.15')
      .fromTo(
        heroRef.current,
        { filter: 'drop-shadow(0 0 0 rgba(255,0,0,0))' },
        { filter: 'drop-shadow(0 18px 40px rgba(255,80,80,0.12))', duration: 0.5 },
        '<0.1'
      )

    tl.fromTo(tagWrapRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.25')
    tl.fromTo(btnRef.current, { opacity: 0, y: 8, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'elastic.out(1,0.6)' }, '-=0.2')

    if (paragraphRef.current) {
      gsap.from(paragraphRef.current, {
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 25,
        duration: 1,
        ease: 'power3.out',
      })
    }
  }, [])

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Background Scene */}
      <MetamorphosisScene />

      {/* Layered Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/30 blur-[180px] rounded-full animate-pulse-slow" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-yellow-500/20 blur-[150px] rounded-full animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 gap-6 sm:gap-8 md:gap-10">
        {/* Title */}
        <h1
          ref={titleRef}
          className="text-lg sm:text-xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-wide flex flex-wrap justify-center gap-x-2"
          aria-label={title}
        >
          {title.split('').map((char, i) => (
            <span key={i} className="char inline-block overflow-hidden leading-[0.85]">
              <span
                className="charInner inline-block bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-400 to-yellow-400 animate-gradient-x"
                style={{ backgroundSize: '200% 100%' }}
              >
                {char}
              </span>
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <div ref={tagWrapRef}>
          <TypingText
            prefix=""
            text={tagline}
            className="text-lg sm:text-2xl md:text-5xl font-semibold text-white tracking-wide drop-shadow-xl animate-pulse-slow"
            speed={100}
          />
        </div>

        {/* Paragraph */}
        <motion.p
          ref={paragraphRef}
          className="hidden md:block text-md md:font-bold text-white/80 max-w-sm sm:max-w-md md:max-w-3xl leading-relaxed text-center"
        >
          {paragraph.split(' ').map((word, i) => (
            <span
              key={i}
              className={word.match(/Transform|Evolve/) ? 'text-red-400 font-semibold' : ''}
            >
              {word}{' '}
            </span>
          ))}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          ref={btnRef}
          onClick={() => {
            const section = document.getElementById('join-tedx')
            if (section) section.scrollIntoView({ behavior: 'smooth' })
          }}
          className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer
            bg-red-600 px-[1.2em] pr-[3em] py-[0.35em] h-[2.8em] min-w-[150px] sm:min-w-[200px]
            shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-300"
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
            Register Now
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
      </div>
    </section>
  )
}
