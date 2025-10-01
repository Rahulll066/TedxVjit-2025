'use client'

import React, { useState } from 'react'
import { FaLinkedin, FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa';
import Image from 'next/image'
import { motion } from 'framer-motion'

interface SpeakerCardProps {
  speaker: {
    id: number;
    name: string;
    title: string;
    company: string;
    image: string;
    bio: string;
    description: string;
    expertise: string[];
    social: {
      linkedin: string;
      instagram?: string;
      twitter: string;
      website: string;
    };
  };
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
    const checkDevice = () => {
      if (window.innerWidth < 640) {
        setDevice('mobile');
      } else if (window.innerWidth < 1024) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleCardClick = () => {
    if (mounted && window.innerWidth < 768) {
      setActive((prev) => !prev);
    }
  };

  // Responsive values - only apply after mount to avoid hydration mismatch
  let imgSize = 176, imgClass = 'w-44 h-44', circleClass = 'w-44 h-44 top-8', yOffset = -35;
  let nameClass = 'text-[1.35rem]';
  let titleClass = 'text-lg';
  let companyClass = 'text-sm';
  let iconClass = 'text-xl';
  
  if (mounted) {
    if (device === 'mobile') {
      imgSize = 120;
      imgClass = 'w-30 h-30';
      circleClass = 'w-28 h-28 top-6';
      yOffset = -20;
      nameClass = 'text-[1.7rem]';
      titleClass = 'text-[1.25rem]';
      companyClass = 'text-base';
      iconClass = 'text-2xl';
    } else if (device === 'tablet') {
      imgSize = 145;
      imgClass = 'w-36 h-36';
      circleClass = 'w-36 h-36 top-7';
      yOffset = -28;
      nameClass = 'text-[1.5rem]';
      titleClass = 'text-[1.1rem]';
      companyClass = 'text-base';
      iconClass = 'text-[1.6rem]';
    }
  }

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end relative group border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 w-full max-w-[280px] sm:max-w-[320px] h-[340px] sm:h-[420px] cursor-pointer ${active ? 'active' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={speaker.image}
        alt={speaker.name}
        fill
        className={`object-cover w-full h-full absolute inset-0 z-0 transition-transform duration-300 filter grayscale${(active || hovered ? ' opacity-0' : '')}`}
        sizes="(max-width:640px) 90vw, 320px"
      />
      <div className={`absolute left-1/2 -translate-x-1/2 ${circleClass} z-10 rounded-full overflow-hidden border-4 border-red-500 transition-all duration-500${(active || hovered ? ' opacity-100 scale-100' : ' opacity-0 scale-0')}`}
        style={{ pointerEvents: 'none' }}
      >
        <Image
          src={speaker.image}
          alt={speaker.name}
          width={imgSize}
          height={imgSize}
          className={`object-cover rounded-full ${imgClass} ${!(active || hovered) ? 'grayscale' : ''}`}
        />
      </div>
      <div
        className={`relative z-10 px-4 py-4 sm:py-6 flex flex-col items-start`}
        style={{ minHeight: '130px' }}
      >
        {/* Black overlay behind text */}
        <div className="absolute inset-x-0 bottom-0 h-[130px] bg-black/80 rounded-b-2xl"></div>
        <motion.div
          className={`relative z-10 w-full flex flex-col${(active || hovered ? ' items-center' : ' items-start')}`}
          initial={false}
          animate={{ y: (active || hovered) ? yOffset : 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        >
          <motion.h3
            className={`${nameClass} font-bold text-red-500 mb-1 truncate w-full text-center`}
            layout
          >
            {speaker.name}
          </motion.h3>
          <motion.p
            className={`${titleClass} text-white font-semibold mb-1 truncate w-full text-center`}
            layout
          >
            {speaker.title}
          </motion.p>
          <motion.p
            className={`${companyClass} text-white/80 truncate w-full text-center`}
            layout
          >
            {speaker.company}
          </motion.p>
        </motion.div>
        {/* Social Icons: only show on hover (desktop) or active (mobile) */}
        {(hovered || active) && (
          <div className={`relative z-10 flex flex-row gap-4 w-full justify-center mt-2 ${iconClass}`}>
            {speaker.social?.linkedin && (
              <a
                href={speaker.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-red-500 transition-colors"
              >
                <FaLinkedin />
              </a>
            )}
            {speaker.social?.instagram && (
              <a
                href={speaker.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-red-500 transition-colors"
              >
                <FaInstagram />
              </a>
            )}
            {speaker.social?.twitter && (
              <a
                href={speaker.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-red-500 transition-colors"
              >
                <FaTwitter />
              </a>
            )}
            {speaker.social?.website && (
              <a
                href={speaker.social.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="hover:text-red-500 transition-colors"
              >
                <FaGlobe />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}