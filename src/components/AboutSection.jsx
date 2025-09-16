'use client'

export default function AboutSection() {
  return (
  <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-black via-red-900 to-black flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-16 sm:py-24 gap-8">
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black/60 max-w-xl w-full aspect-video">
          <img
            src="/gallery/G-images-2.JPG"
            alt="TEDxVJIT event"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
          About <span className="text-white">Metamorphosis</span>
        </h2>
  <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mb-14" />
  <p className="text-lg sm:text-xl text-white mb-8 text-justify">
    Metamorphosis is about letting go of old ways and embracing something new. It is the quiet space between endings and beginnings, where challenges turn into opportunities and chaos becomes creation. 
  </p>
  <p className="text-lg sm:text-xl text-white mb-10 text-justify">
    Real change starts within us, whether through a shift in perspective, a struggle that reshapes us, or a dream that refuses to fade. These inner transformations ripple outward, touching lives and inspiring the world around us.
  </p>

        <a
          href="/about"
          className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-[10px] text-base sm:text-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 mt-4"
        >
          Learn More About TEDx
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
}