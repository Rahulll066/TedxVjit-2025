"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import AnimatedNumberCountdown from "@/components/countdown-number";

const CountdownPreview = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-24"
      style={{
        background: "radial-gradient(circle at 50% 40%, #e11d48 0%, #000 80%)"
      }}
    >
      <Badge
        variant="outline"
        className="rounded-[14px] border border-red-600 text-lg md:text-xl text-white bg-black/80 mb-10 px-6 py-3 flex items-center gap-2 shadow-lg"
      >
  <img src="/assets/X-logo.png" alt="X Logo" className="w-6 h-6 mr-1" />
        <span className="text-white">Countdown to 2025</span>
      </Badge>
      <AnimatedNumberCountdown
        endDate={new Date("2025-10-25T00:00:00")}
        className="my-4 text-white text-6xl md:text-7xl font-extrabold gap-8"
      />
    </section>
  );
};

export default CountdownPreview;
