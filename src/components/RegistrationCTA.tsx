'use client'

import { Users, Mic } from 'lucide-react'

export default function RegistrationCTA() {
  return (
    <section id="register" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-red-800/5" />
      <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-red-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Join the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              TEDx Experience
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Choose your role and be part of this inspiring journey. Whether you want to listen, learn,
            or share your ideas, there&apos;s a place for you at TEDxVJIT.
          </p>
        </div>

        {/* Registration Sections Container */}
        <div className="relative">
          {/* Main Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">

            {/* Register as Audience Section */}
            <div
              id="register-audience"
              className="relative flex flex-col bg-gradient-to-br from-gray-600/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-red-500/30 hover:border-red-400/50 transition-all duration-300 group hover:scale-105"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:bg-red-500/30 transition-colors duration-300">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-red-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
                  Register as Audience
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed">
                  Join us as an attendee and immerse yourself in inspiring talks,
                  thought-provoking discussions, and meaningful connections.
                </p>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {[
                    'Access to all speaker sessions',
                    'Interactive workshops',
                    'Networking opportunities',
                    'Exclusive event materials'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button at bottom */}
                <div className="mt-auto text-center">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-b from-red-600 to-gray-900 text-white font-semibold rounded-full hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-600/25 hover:scale-105 text-sm">
                    Join as Audience
                  </button>
                </div>
              </div>
            </div>

            {/* Register as Speaker Section */}
            <div
              id="register-speaker"
              className="relative bg-gradient-to-br from-gray-600/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-red-500/30 hover:border-red-400/50 transition-all duration-300 group hover:scale-105"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:bg-red-500/30 transition-colors duration-300">
                  <Mic className="w-7 h-7 sm:w-8 sm:h-8 text-red-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
                  Register as Speaker
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed">
                  Share your innovative ideas, groundbreaking research, or inspiring stories
                  with a global audience of thinkers and innovators.
                </p>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {[
                    'Global platform exposure',
                    'Professional presentation coaching',
                    'Networking with industry leaders',
                    'TEDx speaker certification'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-b from-red-600 to-gray-900 text-white font-semibold rounded-full hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-600/25 hover:scale-105 text-sm">
                    Apply as Speaker
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* OR Divider (only mobile) */}
          <div className="lg:hidden text-center mt-6 sm:mt-8">
            <div className="inline-flex items-center text-gray-400">
              <div className="w-12 sm:w-16 h-px bg-gray-600 mr-3 sm:mr-4" />
              <span className="px-3 sm:px-4 py-2 bg-gray-800/50 rounded-full text-sm font-medium">OR</span>
              <div className="w-12 sm:w-16 h-px bg-gray-600 ml-3 sm:ml-4" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              Whether you&apos;re here to learn, inspire, or connect, your presence will make this
              TEDx event truly special. Join us in spreading ideas worth sharing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors duration-300 text-sm sm:text-base">
                Learn More
              </button>
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors duration-300 text-sm sm:text-base">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}