"use client"

import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SpeakersPreview from '../components/SpeakersPreview'
import SchedulePreview from '../components/SchedulePreview'
import PreviousPreview from '../components/PreviousPreview'
import CountdownPreview from '@/components/CountdownPreview'
import SponsorsPreview from '@/components/SponsorsPreview'
import MapSection from '@/components/MapSection'
import JoinTedxSection from '../components/JoinTedxSection'
import InstagramModal from '../components/InstagramModal'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('source') === 'card') {
        setShowModal(true);
      }
    }
  }, []);

  return (
    <>
      <InstagramModal open={showModal} onClose={() => setShowModal(false)} />
      <Hero />
      <AboutSection />
      <SpeakersPreview />
      <SchedulePreview />
      <PreviousPreview />
      <CountdownPreview />
      <JoinTedxSection />
      <SponsorsPreview />
      <MapSection />
    </>
  )
}
