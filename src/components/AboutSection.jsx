'use client'

export default function AboutSection() {
  return (
  <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-black via-red-900 to-black flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-16 sm:py-24 gap-8">
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black/60 max-w-xl w-full aspect-video">
          <img
            src="/gallery/_DSC7571.JPG"
            alt="TEDxVJIT event"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
          About <span className="text-white">TEDxVJIT</span>
        </h2>
  <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mb-14" />
  <p className="text-lg sm:text-xl text-white mb-8">
          TEDxVJIT is an independently organized TED event that brings together innovators, thinkers, and doers from various fields to share ideas worth spreading. In the spirit of TED’s mission, our goal is to spark deep discussions and connections in our community.
        </p>
  <p className="text-lg sm:text-xl text-white mb-10">
          Organized by the students of VJIT, TEDxVJIT showcases innovative ideas and inspiring stories that challenge conventional thinking and spark meaningful conversations.
        </p>

        <a
          href="#register"
          className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-[10px] text-base sm:text-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 mt-4"
        >
          Learn More About TEDx
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
}