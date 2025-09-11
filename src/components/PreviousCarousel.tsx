"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface PreviousCarouselProps {
  images: { src: string; alt?: string; width?: number; height?: number; priority?: boolean }[];
  autoplaySpeed?: number;
  className?: string;
}

export default function PreviousCarousel({
  images,
  autoplaySpeed = 3500,
  className = ""
}: PreviousCarouselProps) {
  const [active, setActive] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
    arrows: false,
    beforeChange: (_: number, next: number) => setActive(next),
    adaptiveHeight: false,
  };

  return (
    <div className={`relative w-full ${className}`}>      
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-red-800 bg-black/80 aspect-video w-full flex items-center relative">
        <Slider ref={sliderRef} {...settings} className="w-full h-full">
          {images.map((img, idx) => (
            <div key={idx} className="relative w-full h-full flex items-center justify-center">
              <Image
                src={img.src}
                alt={img.alt || `Previous event image ${idx + 1}`}
                // Provide width/height to leverage responsive image optimization
                width={img.width || 1280}
                height={img.height || 720}
                className="w-full h-full object-cover"
                priority={img.priority || idx === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full flex justify-center z-30 mt-6 relative">
        <ul className="flex gap-4">
          {images.map((_, i) => (
            <li key={i}>
              <button
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                className={`w-4 h-4 rounded-full border-2 border-red-600 focus:outline-none cursor-pointer ${
                  i === active ? "bg-red-600" : "bg-black"
                } transition-all duration-300`}
                style={{ boxShadow: i === active ? "0 0 0 2px #fff" : undefined }}
                onClick={() => sliderRef.current?.slickGoTo(i)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
