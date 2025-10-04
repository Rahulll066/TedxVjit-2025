"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const sponsors = [
  { id: 1, logo: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/TEDimage.JPG?updatedAt=1759593279876" },
  { id: 2, logo: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/TEDimage.JPG?updatedAt=1759593279876" },
  { id: 3, logo: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/TEDimage.JPG?updatedAt=1759593279876" },
  { id: 4, logo: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/TEDimage.JPG?updatedAt=1759593279876" },
  { id: 5, logo: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/TEDimage.JPG?updatedAt=1759593279876" },
  { id: 6, logo: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/TEDimage.JPG?updatedAt=1759593279876" },
];

export default function SponsorsPreview() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2; // half because we duplicate
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });
    tl.to(el, { x: -totalWidth, duration: 20 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="w-full mx-auto px-8 py-12 bg-black overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-white">
        Sponsors
      </h2>

      <div className="relative overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex space-x-10 w-max"
        >
          {/* original + duplicate */}
          {[...sponsors, ...sponsors].map((sponsor, idx) => (
            <div
              key={idx}
              className="border-2 border-red-600 rounded-xl flex items-center justify-center p-4 bg-black min-w-[260px] h-40 sm:h-48 md:h-52"
            >
              <img
                src={sponsor.logo}
                alt={`Sponsor ${sponsor.id}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
