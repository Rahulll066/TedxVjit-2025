"use client"

import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import butterfly from '../../public/lottie/butterfly.json'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SpeakersPreview from '../components/SpeakersPreview'
import SchedulePreview from '../components/SchedulePreview'
import RegistrationCTA from '../components/RegistrationCTA'

export default function Home() {
  const [showPage, setShowPage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowPage(true), 3500)
    return () => clearTimeout(timer)
  }, [])

  if (!showPage) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <Lottie animationData={butterfly} loop={false} style={{ width: 400, height: 400 }} />
      </div>
    )
  }

  return (
    <>
      <Hero />
      <AboutSection />
      <SpeakersPreview />
      <SchedulePreview />
      <RegistrationCTA />
    </>
  )
}
