"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoCarouselProps {
  videos?: string[];
  autoplay?: boolean;
  autoplayDuration?: number;
}

export default function VideoCarousel({ 
  videos = [], 
  autoplay = true,
  autoplayDuration = 5000 
}: VideoCarouselProps) {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const hasVideos = videos && videos.length > 0;

  const handleNext = () => {
    if (!hasVideos) return;
    setActive((prev) => (prev + 1) % videos.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  // Run autoplay
  useEffect(() => {
    if (!hasVideos || !autoplay) return;
    const interval = setInterval(handleNext, autoplayDuration);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDuration, hasVideos, handleNext]);

  // Control video playback
  useEffect(() => {
    if (!hasVideos) return;
    Object.entries(videoRefs.current).forEach(([index, video]) => {
      if (video) {
        if (Number(index) === active) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [active, hasVideos]);

  if (!hasVideos) {
    return (
      <div className="relative w-full h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-white text-xl">No videos available</div>
      </div>
    );
  }

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 ">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-1">
        <div>
          <div className="relative h-90 w-full">
            <AnimatePresence>
              {videos.map((video, index) => (
                <motion.div
                  key={`${video}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : videos.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <video
                    ref={(el: HTMLVideoElement | null) => {
                      if (el) {
                        videoRefs.current[index] = el;
                      } else {
                        delete videoRefs.current[index];
                      }
                    }}
                    src={video}
                    muted
                    loop
                    playsInline
                    className="h-full w-full rounded-3xl object-cover object-center border-2 border-white"
                    style={{
                      filter: isActive(index) ? 'none' : 'brightness(0.7)',
                    }}
                  />
                  
                  {/* Video overlay for inactive videos */}
                  {!isActive(index) && (
                    <div className="absolute inset-0 bg-black/20 rounded-3xl" />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {videos.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full ${
              index === active ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
            animate={{
              width: index === active ? 32 : 8,
              backgroundColor: index === active ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)"
            }}
            transition={{ duration: 0.3 }}
          >
            {index === active && autoplay && (
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: autoplayDuration / 1000, 
                  ease: "linear",
                  repeat: 0
                }}
                key={active}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}