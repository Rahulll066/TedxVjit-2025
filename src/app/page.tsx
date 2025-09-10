"use client"

import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SpeakersPreview from '../components/SpeakersPreview'
import SchedulePreview from '../components/SchedulePreview'
import PreviousPreview from '../components/PreviousPreview'

export default function Home() {


  return (
    <>
      <Hero />
      <AboutSection />
      <SpeakersPreview />
      <SchedulePreview />
      <PreviousPreview />
    </>
  )
}
