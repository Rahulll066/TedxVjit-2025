'use client'

import { useState } from 'react'
import Image from 'next/image'

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
      twitter: string;
      website: string;
    };
  };
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="w-[320px] h-[420px] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end relative group border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
      <Image
        src={speaker.image}
        alt={speaker.name}
        fill
        className="object-cover w-full h-full absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-300 filter grayscale"
        sizes="320px"
      />
      <div className="relative z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-6">
        <h3 className="text-xl font-bold text-red-500 mb-1 truncate">{speaker.name}</h3>
        <p className="text-white text-base font-semibold mb-1 truncate">{speaker.title}</p>
        <p className="text-xs text-white/80 truncate">{speaker.company}</p>
      </div>
    </div>
  )
}
