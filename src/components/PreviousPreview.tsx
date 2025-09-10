
"use client";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PreviousPreview() {
  const images = [
    "/gallery/_DSC7571.JPG",
    "/gallery/_DSC8353.JPG",
    "/gallery/KVK_3568.JPG",
    "/gallery/KVK_3670.JPG",
    "/gallery/TEDimage.JPG",
    "/gallery/TEDimage.JPG" // duplicate for demo, replace with unique if available
  ];

  const [active, setActive] = useState(0);
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: false, // We'll render our own dots below
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    beforeChange: (_: number, next: number) => setActive(next),
  };

  return (
    <section className="relative w-full min-h-[90vh] bg-black flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-16 sm:py-24 gap-8">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0">
        <div className="relative max-w-xl w-full flex flex-col items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-red-800 bg-black/80 aspect-video w-full flex items-center">
            <Slider ref={sliderRef} {...settings} className="w-full h-full">
              {images.map((src, idx) => (
                <div key={idx} className="w-full h-full flex items-center justify-center">
                  <img
                    src={src}
                    alt={`TEDxVJIT 2024 event ${idx + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </Slider>
          </div>
          {/* Custom Dots */}
          <div className="w-full flex justify-center z-30 mt-6" style={{ position: 'relative' }}>
            <ul className="flex gap-4">
              {images.map((_, i) => (
                <li key={i}>
                  <button
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-4 h-4 rounded-full border-2 border-red-600 focus:outline-none cursor-pointer ${
                      i === active ? "bg-red-600" : "bg-black"
                    } transition-all duration-300`}
                    style={{ boxShadow: i === active ? '0 0 0 2px #fff' : undefined }}
                    onClick={() => sliderRef.current?.slickGoTo(i)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          <span className="text-red-600">2024:</span> Power of Persistence
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-white rounded-full mb-14" />
        <p className="text-lg sm:text-xl text-white mb-8">
          The 2024 edition of TEDxVJIT celebrated the unwavering spirit of persistence. Our speakers shared stories of resilience, innovation, and the relentless pursuit of dreams, inspiring everyone to push beyond boundaries.
        </p>
        <p className="text-lg sm:text-xl text-white mb-10">
          From breakthrough ideas to personal journeys, the event was a testament to the power of never giving up. Relive the highlights and discover what made TEDxVJIT 2024 unforgettable.
        </p>
        <a
          href="/gallery"
          className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-red-600 to-white text-black font-semibold rounded-[10px] text-base sm:text-lg transition-all duration-300 hover:from-white hover:to-red-700 hover:text-white hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 mt-4"
        >
          View 2024 Highlights
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
//
}
