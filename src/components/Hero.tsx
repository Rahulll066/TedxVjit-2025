'use client'

import Lottie from 'lottie-react'
import butterfly from '../../public/lottie/butterfly.json'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden font-['Playfair Display',serif] bg-gradient-to-br from-black to-zinc-900 flex items-center justify-center">
      {/* Subtle Butterfly Lottie Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <Lottie 
          animationData={butterfly} 
          loop={false} 
          autoplay={true}
          style={{ width: '120vw', height: '120vw', maxWidth: 1100, maxHeight: 1100, minWidth: 350, minHeight: 350, opacity: 0.5, filter: 'blur(0.1px)' }}
        />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight mb-6 drop-shadow-lg text-center px-2">
          Metamorphosis
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-zinc-200 font-medium tracking-wide mt-2 text-center px-2">
          Inspire, Transform, Evolve
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
          <button
            className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-[10px] text-base md:text-lg transition-colors duration-200 shadow-md"
          >
            Register Now
            <span className="ml-2 text-xl">→</span>
          </button>
          <button
            className="flex items-center justify-center bg-white hover:bg-zinc-300 text-black font-semibold px-7 py-3 rounded-[10px] text-base md:text-lg transition-colors duration-200 shadow-md border border-zinc-700"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
