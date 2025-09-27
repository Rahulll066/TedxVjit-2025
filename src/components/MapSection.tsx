"use client";

import React from "react";

function MapSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-24 px-4"
      style={{
        background: "radial-gradient(circle at 50% 40%, #421e1eff 0%, #ff1b3c 100%)"
      }}
    >
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center drop-shadow-lg tracking-tight">
        Venue Location
      </h2>

      {/* Map Container */}
      <div className="w-full max-w-6xl h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(255,27,60,0.4)] border-2 border-red-600 bg-black/20 relative">
        
        {/* Optional: Gradient Overlay for depth */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-red-700/30 via-black/20 to-transparent pointer-events-none"></div>

        {/* Google Map iframe */}
        <iframe
          src="https://www.google.com/maps?q=Vidya+Jyothi+Institute+of+Technology&hl=en&z=16&output=embed"
          className="w-full h-full rounded-3xl"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vidya Jyothi Institute of Technology Location"
        />
      </div>
    </section>
  );
}

export default MapSection;
