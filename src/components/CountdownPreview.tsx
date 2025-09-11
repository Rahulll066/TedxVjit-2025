"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import AnimatedNumberCountdown from "@/components/countdown-number";

const CountdownPreview = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-24"
      style={{
        background: "radial-gradient(circle at 50% 40%, #ff1b3c 0%, #1a0a0a 100%)"
      }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center drop-shadow-lg tracking-tight">
        Event Starts in
      </h2>
      <AnimatedNumberCountdown
        endDate={new Date("2025-10-25T00:00:00")}
        className="my-4 text-white text-6xl md:text-7xl font-extrabold gap-8"
      />
      <div className="flex flex-col items-center mt-8">
        <Badge
          variant="outline"
          className="rounded-[14px] border border-red-600 text-base text-white bg-black/80 mb-6 px-4 py-2 flex items-center gap-2 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#ff1b3c]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-lg font-semibold text-white">25th October 2025</span>
        </Badge>
        <a
          href="#book-tickets"
          className="inline-block px-8 py-4 rounded-full bg-[#ff1b3c] text-white font-bold text-lg shadow-lg hover:bg-[#e11d48] transition-all duration-200"
        >
          Book Your Ticket Now
        </a>
      </div>
    </section>
  );
};

export default CountdownPreview;
