'use client'

import { Clock, Calendar, ArrowRight } from 'lucide-react'

const eventSchedule = [
  {
    time: '09:00 AM',
    title: 'Opening Ceremony & Welcome',
    description: 'Kickstarting the journey of transformation',
    duration: '45 min',
    type: 'Opening'
  },
  {
    time: '09:45 AM',
    title: 'Keynote: The Power of Metamorphosis',
    description: 'How ideas transform into revolutionary actions',
    duration: '60 min',
    type: 'Keynote'
  },
  {
    time: '11:00 AM',
    title: 'Innovation Showcase',
    description: 'Groundbreaking projects and breakthrough technologies',
    duration: '90 min',
    type: 'Showcase'
  },
  {
    time: '12:30 PM',
    title: 'Networking & Lunch Break',
    description: 'Connect with fellow visionaries and change-makers',
    duration: '60 min',
    type: 'Break'
  },
  {
    time: '01:30 PM',
    title: 'Breakout Sessions',
    description: 'Deep-dive discussions on emerging trends',
    duration: '120 min',
    type: 'Interactive'
  },
  {
    time: '03:30 PM',
    title: 'Panel: Future of Transformation',
    description: 'Experts discuss tomorrow\'s challenges and opportunities',
    duration: '75 min',
    type: 'Panel'
  },
  {
    time: '04:45 PM',
    title: 'Closing & Call to Action',
    description: 'Transforming inspiration into action',
    duration: '45 min',
    type: 'Closing'
  }
]

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Opening':
      return 'from-red-500 to-red-600'
    case 'Keynote':
      return 'from-red-500 to-red-600'
    case 'Showcase':
      return 'from-red-600 to-red-700'
    case 'Break':
      return 'from-red-500 to-red-600'
    case 'Interactive':
      return 'from-red-600 to-red-700'
    case 'Panel':
      return 'from-red-500 to-red-600'
    case 'Closing':
      return 'from-red-600 to-red-700'
    default:
      return 'from-gray-500 to-gray-600'
  }
}

export default function SchedulePreview() {
  return (
    <section className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,0,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,0,0,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent animate-fade-in-delay-1">
            Event Schedule
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full mb-4 sm:mb-6 animate-fade-in-delay-2" />
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-delay-3">
            Experience a day of transformation, innovation, and inspiration. 
            Each session is carefully crafted to spark change and ignite new possibilities.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 px-4 animate-fade-in-delay-2">
          {eventSchedule.map((event, idx) => (
            <div
              key={idx}
              className="group relative animate-fade-in-delay-3"
              style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
            >
              <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 sm:p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10">
                <div className="flex flex-col gap-4">
                  {/* Top Row - Time and Type */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${getTypeColor(event.type)} flex items-center justify-center shadow-lg`}>
                          <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <span className="text-xl sm:text-2xl font-bold text-white">{event.time}</span>
                          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTypeColor(event.type)} text-white w-fit`}>
                            {event.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            {event.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Indicator - Hidden on mobile */}
                    <div className="hidden lg:block flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Content Row */}
                  <div className="sm:ml-20">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 px-4 animate-fade-in-delay-3">
          <a
            href="#register"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 w-full sm:w-auto justify-center"
          >
            <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Reserve Your Spot Now
          </a>
          <p className="text-gray-400 mt-4 text-sm">
            Limited seats available • Early bird pricing ends soon
          </p>
        </div>
      </div>
    </section>
  )
}
