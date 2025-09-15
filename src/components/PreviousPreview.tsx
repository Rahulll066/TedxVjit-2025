
"use client";

import React from "react";
import PreviousCarousel from "./PreviousCarousel";

export default function PreviousPreview() {
  const images = [
    "/gallery/_DSC7571.JPG",
    "/gallery/_DSC8353.JPG",
    "/gallery/KVK_3568.JPG",
    "/gallery/KVK_3670.JPG",
    "/gallery/TEDimage.JPG",
    "/gallery/TEDimage.JPG"
  ];

  return (
    <section className="relative w-full min-h-[90vh] bg-black flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-16 sm:py-24 gap-8">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0">
        <div className="relative max-w-xl w-full flex flex-col items-center">
          <PreviousCarousel images={images.map(src => ({ src }))} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          <span className="text-red-600">2024:</span> Power of Persistence
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-white rounded-full mb-14" />
        <p className="text-lg sm:text-xl text-white mb-8 text-justify">
          The 2024 edition of TEDxVJIT celebrated the unwavering spirit of persistence. Our speakers shared stories of resilience, innovation, and the relentless pursuit of dreams, inspiring everyone to push beyond boundaries.
        </p>
        <p className="text-lg sm:text-xl text-white mb-10 text-justify">
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
