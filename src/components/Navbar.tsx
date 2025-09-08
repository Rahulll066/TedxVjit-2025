'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ target: ref })
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 70)
  })

  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Speakers', href: '/speakers' },
    { text: 'Team', href: '/team' },
    { text: 'Schedule', href: '/schedule' },
  ];

  // Dropdown state for Previous Events
  const [prevEventsOpen, setPrevEventsOpen] = useState(false);
  const prevEventsLinks = [
    { text: '2024', href: '/2024' },
  ];

  return (
    <motion.header
      ref={ref}
      animate={{
        backgroundColor: scrolled ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0)',
        boxShadow: scrolled
          ? '0px 2px 6px rgba(225,29,72,0.4)'
          : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',

        padding: '0.8rem 1.5rem',
      }}
      transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      className="fixed  w-[100%] z-50"
    >
      <nav className="flex items-center justify-between w-full text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/navbar/navlogo.png"
            alt="TEDxVJIT Logo"
            width={180}
            height={180}
            className="object-contain "
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden xl:flex gap-8 text-md 2xl:text-2xl font-semibold tracking-wide relative">
          {navLinks.map((item, idx) => (
            <li key={idx} className="relative group px-3 py-1">
              <Link
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault()
                    const target = document.getElementById(item.href.replace('#', ''))
                    target?.scrollIntoView({ behavior: 'smooth' })
                  }
                  setDropdownOpen(false)
                }}
                className="relative z-10 text-white transition-colors duration-200 group-hover:text-red-400"
              >
                {item.text}
              </Link>
              {/* Removed gray background span for active/hovered nav option */}
            </li>
          ))}
          {/* Previous Events Dropdown (Desktop) */}
          <li
            className="relative group px-3 py-1"
            onMouseEnter={() => setPrevEventsOpen(true)}
            onMouseLeave={() => setPrevEventsOpen(false)}
          >
            <button
              className="relative z-10 text-white transition-colors duration-200 group-hover:text-red-400 flex items-center gap-1"
              type="button"
            >
              Previous Events
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {prevEventsOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-xl p-2 shadow-lg space-y-1 z-50"
                >
                  {prevEventsLinks.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-white hover:bg-red-600/20 rounded-lg"
                        onClick={() => setPrevEventsOpen(false)}
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Desktop CTA Dropdown */}
        <div className="relative hidden xl:block ml-4">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-transform duration-300
             bg-red-600 text-white shadow-md hover:scale-105 hover:shadow-red-600/40 flex items-center gap-2"
          >
            Register Now
            <motion.svg
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-xl p-3 shadow-lg space-y-2 z-50"
              >
                {/* Audience */}
                <Link
                  href="/#register-audience"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center px-4 py-3 text-white hover:bg-red-600/20 rounded-lg group"
                >
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-red-500/40">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Register as Audience</div>
                    <div className="text-xs text-gray-400">Join as an attendee</div>
                  </div>
                </Link>

                {/* Speaker */}
                <Link
                  href="/#register-speaker"
                  onClick={() => setDropdownOpen(false)}
                  className=" flex items-center px-4 py-3 text-white hover:bg-red-600/20 rounded-lg group"
                >
                  <div className=" w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-red-500/40">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.543 12.674a1 1 0 000 1.652l5.914 3.674a1 1 0 001.543-.868V8.738a1 1 0 00-1.543-.868l-5.914 3.674a1 1 0 000 1.652z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Register as Speaker</div>
                    <div className="text-xs text-gray-400">Share your ideas</div>
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Hamburger */}
        <div className="xl:hidden ml-5">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 flex flex-col justify-between items-center focus:outline-none z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 8 : 0,
                backgroundColor: menuOpen ? '#e11d48' : '#fff',
              }}
              className="block h-0.5 w-full rounded-full"
              transition={{ duration: 0.4 }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block h-0.5 w-full bg-white rounded-full"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -20 : 0,
                backgroundColor: menuOpen ? '#e11d48' : '#fff',
              }}
              className="block h-0.5 w-full rounded-full"
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] 
                   xl:hidden bg-black/95 backdrop-blur-lg 
                   rounded-t-2xl shadow-lg p-6 space-y-4 z-50 
                   overflow-y-auto md:pl-8"
            >
              {navLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="block text-white font-semibold text-lg hover:text-red-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.text}
                </Link>
              ))}

              {/* Previous Events Dropdown (Mobile) */}
              <div className="relative">
                <button
                  className="w-full flex items-center justify-between py-3 text-white font-semibold text-lg hover:text-red-500"
                  onClick={() => setPrevEventsOpen((open) => !open)}
                  type="button"
                >
                  Previous Events
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {prevEventsOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1 bg-black/90 backdrop-blur-md rounded-xl shadow-lg p-2 space-y-1 z-50"
                    >
                      {prevEventsLinks.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-white hover:bg-red-600/20 rounded-lg"
                            onClick={() => {
                              setPrevEventsOpen(false);
                              setMenuOpen(false);
                            }}
                          >
                            {item.text}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile CTA */}
              <div className="space-y-2">
                <Link
                  href="/#register-audience"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center px-0 py-2 text-white hover:bg-red-600/20 rounded-lg group transition-all duration-300"
                >
                  <div className=" w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-red-500/40">
                    <svg className="w-4 h-4 text-red-400 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Register as Audience</div>
                    <div className="text-xs text-gray-400">Join as an attendee</div>
                  </div>
                </Link>

                <Link
                  href="/#register-speaker"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center px-0 py-3 text-white hover:bg-red-600/20 rounded-lg group  transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-red-500/40">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.543 12.674a1 1 0 000 1.652l5.914 3.674a1 1 0 001.543-.868V8.738a1 1 0 00-1.543-.868l-5.914 3.674a1 1 0 000 1.652z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Register as Speaker</div>
                    <div className="text-xs text-gray-400">Share your ideas</div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </motion.header>
  )
}
