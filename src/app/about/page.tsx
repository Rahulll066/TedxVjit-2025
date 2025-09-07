export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in"
          >
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Metamorphism
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-delay-1"
          >
            Discover the transformative power of ideas and the journey of change that defines 
            our TEDx event at VJIT. Where innovation meets inspiration, and transformation becomes reality.
          </p>
          
          <div 
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 animate-fade-in-delay-2"
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Innovation & Change
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Student-Led Initiative
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Global Impact
            </span>
          </div>
        </div>
      </section>

      {/* About Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* TEDx Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What is TEDx?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                TEDx is a grassroots initiative, created in the spirit of TED&apos;s overall mission to research and discover &quot;ideas worth spreading.&quot; TEDx brings the spirit of TED to local communities around the globe through TEDx events.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                These events are organized by passionate individuals who seek to uncover new ideas and to share the latest research in their local areas that spark conversations in their communities.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                  Ideas Worth Spreading
                </span>
                <span className="px-4 py-2 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                  Global Community
                </span>
                <span className="px-4 py-2 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                  Innovation Hub
                </span>
              </div>
            </div>
            
            <div className="relative animate-fade-in-delay-1">
              <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">TEDx Mission</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Foster meaningful conversations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Share innovative ideas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Build global connections</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Inspire positive change</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* VJIT Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-delay-2 lg:order-2">
              <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">VJIT Excellence</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Premier engineering institution</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Innovation-focused curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Industry partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Student-driven initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="animate-fade-in-delay-1 lg:order-1">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                VJIT - Our Host Institution
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                VJIT (Vidya Jyothi Institute of Technology) is a premier engineering institution committed to excellence in education, innovation, and research. Our institution provides the perfect backdrop for TEDx events.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                With state-of-the-art facilities, experienced faculty, and a vibrant student community, VJIT fosters an environment where ideas flourish and innovation thrives.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                  Academic Excellence
                </span>
                <span className="px-4 py-2 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                  Innovation Hub
                </span>
                <span className="px-4 py-2 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                  Student Leadership
                </span>
              </div>
            </div>
          </div>

          {/* Metamorphism Theme Section */}
          <div className="text-center animate-fade-in-delay-3">
            <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Metamorphism Theme
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Metamorphism represents the profound transformation that occurs when ideas take root, 
              when perspectives shift, and when individuals evolve through the power of shared knowledge and inspiration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Transformation</h3>
                <p className="text-gray-300">The journey from idea to impact, from inspiration to action</p>
              </div>
              <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Evolution</h3>
                <p className="text-gray-300">Continuous growth and adaptation in the face of change</p>
              </div>
              <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">Breaking boundaries and creating new possibilities</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-delay-3">
            <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Join the Transformation
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Be part of this incredible journey of change and discovery. 
                Experience the power of ideas that can transform lives and shape the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-red-600/25">
                  Register Now
                </button>
                <button className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors duration-300 border border-white/20">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
