"use client"

// ...existing code...
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SpeakersPreview from '../components/SpeakersPreview'
import SchedulePreview from '../components/SchedulePreview'
import RegistrationCTA from '../components/RegistrationCTA'

export default function Home() {


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
