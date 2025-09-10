"use client"
import ButterflySwarm from "./ButterflySwarm"

export default function Hero() {
  return (
    <section className="grid min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Background butterflies */}
      <div className="row-start-1 col-start-1 z-0 opacity-60">
        <ButterflySwarm />
      </div>

      {/* Foreground content */}
      <div className="row-start-1 col-start-1 z-10 flex flex-col items-center justify-center text-center px-6">
        <h1 className="bg-gradient-to-r from-red-900 via-red-400 to-red-900 bg-clip-text text-transparent 
                       text-3xl md:text-8xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Metamorphosis
        </h1>

        <p className="text-xl md:text-2xl text-zinc-300 font-medium max-w-2xl mx-auto mb-10">
          Inspire, Transform, Evolve
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-4">
          <button className="px-8 py-4 bg-red-600 text-white rounded-xl font-semibold 
                             hover:bg-red-700 transition shadow-lg hover:shadow-red-600/40">
            Register Now →
          </button>
          <button className="px-8 py-4 bg-white/90 text-black rounded-xl font-semibold 
                             hover:bg-zinc-200 transition border border-zinc-400 shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
