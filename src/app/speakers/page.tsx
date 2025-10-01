'use client'
import SpeakerCard from '../../components/SpeakerCard'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation' // use next/navigation in app dir

export default function SpeakersPage() {
  // Comprehensive speaker data - replace with real data
  const speakers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'AI Ethics Researcher',
      company: 'Stanford University',
      image: '/assets/2.png',
      bio: 'Leading researcher in artificial intelligence ethics and responsible AI development.',
      description: 'Dr. Sarah Johnson is a renowned AI ethics researcher at Stanford University, specializing in responsible artificial intelligence development. With over 15 years of experience, she has published numerous papers on AI safety and ethical considerations in machine learning. Her work focuses on ensuring AI systems are developed with human values and safety in mind.',
      expertise: ['AI Ethics', 'Machine Learning', 'Human-AI Interaction'],
      social: { linkedin: '#', twitter: '#', website: '#' }
    },
    {
      id: 2,
      name: 'Marcus Chen',
      title: 'Climate Innovation Expert',
      company: 'GreenTech Solutions',
      image: '/assets/6.png',
      bio: 'Pioneering sustainable technology solutions for climate change.',
      description: 'Marcus Chen is a climate innovation expert and founder of GreenTech Solutions, a company dedicated to developing sustainable technologies. He has led multiple successful projects in renewable energy and carbon capture technology, helping organizations reduce their environmental impact.',
      expertise: ['Climate Tech', 'Renewable Energy', 'Sustainability'],
      social: { linkedin: '#', twitter: '#', website: '#' }
    },
    {
      id: 3,
      name: 'Dr. Elena Rodriguez',
      title: 'Neuroscience Researcher',
      company: 'MIT Brain Research Institute',
      image: '/assets/hero-banner.png',
      bio: 'Exploring the mysteries of human consciousness and brain function.',
      description: 'Dr. Elena Rodriguez is a leading neuroscientist at MIT, focusing on understanding human consciousness and brain function. Her groundbreaking research has advanced our understanding of neural networks and cognitive processes.',
      expertise: ['Neuroscience', 'Cognitive Science', 'Brain Mapping'],
      social: { linkedin: '#', twitter: '#', website: '#' }
    },
    {
      id: 4,
      name: 'James Thompson',
      title: 'Social Impact Entrepreneur',
      company: 'ChangeMakers Inc.',
      image: '/assets/2.png',
      bio: 'Building businesses that create positive social change.',
      description: 'James Thompson is a social impact entrepreneur who has founded multiple successful businesses focused on creating positive social change. He believes in the power of business to solve societal problems.',
      expertise: ['Social Entrepreneurship', 'Business Strategy', 'Impact Investing'],
      social: { linkedin: '#', twitter: '#', website: '#' }
    },
    {
      id: 5,
      name: 'Dr. Priya Patel',
      title: 'Quantum Computing Scientist',
      company: 'Quantum Labs International',
      image: '/assets/6.png',
      bio: 'Advancing the frontiers of quantum computing technology.',
      description: 'Dr. Priya Patel is a quantum computing scientist working on the cutting edge of technology. Her research focuses on developing practical applications for quantum computers.',
      expertise: ['Quantum Computing', 'Physics', 'Computer Science'],
      social: { linkedin: '#', twitter: '#', website: '#' }
    },
    {
      id: 6,
      name: 'Alex Rivera',
      title: 'Digital Art Pioneer',
      company: 'Creative Digital Studios',
      image: '/assets/hero-banner.png',
      bio: 'Revolutionizing the intersection of art and technology.',
      description: 'Alex Rivera is a digital art pioneer who has revolutionized the intersection of art and technology. His innovative work has been exhibited in galleries worldwide.',
      expertise: ['Digital Art', 'Creative Technology', 'NFTs'],
      social: { linkedin: '#', twitter: '#', website: '#' }
    }
  ]

  const router = useRouter()

  const handleExploreClick = () => {
    router.push('/2024/speakers') // programmatic navigation works now
  }

  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
    //   {/* Hero Section */}
    //   <section className="relative min-h-screen flex flex-col justify-center py-20 px-4 overflow-hidden">
    //     {/* Background Elements */}
    //     <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10" />
    //     <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
    //     <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

    //     <div className="relative max-w-7xl mx-auto text-center">
    //       <h1
    //         className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in"
    //       >
    //         Meet Our
    //         <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
    //           Speakers
    //         </span>
    //       </h1>

    //       <p
    //         className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-delay-1"
    //       >
    //         Discover thought leaders, innovators, and visionaries who will share their insights,
    //         experiences, and groundbreaking ideas that will inspire and challenge your perspective.
    //       </p>

    //       <div
    //         className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 animate-fade-in-delay-2"
    //       >
    //         <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
    //           {speakers.length} Inspiring Speakers
    //         </span>
    //         <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
    //           Diverse Perspectives
    //         </span>
    //         <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
    //           Interactive Sessions
    //         </span>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Speakers Grid Section */}
    //   <section className="py-16 px-4 flex justify-center">
    //     <div className="w-full max-w-6xl">
    //       {/* Section Header */}
    //       <div
    //         className="text-center mb-16 animate-fade-in"
    //       >
    //         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    //           Featured Speakers
    //         </h2>
    //         <p className="text-lg text-gray-400 max-w-2xl mx-auto">
    //           Each speaker brings unique expertise and insights that will expand your horizons
    //           and inspire new ways of thinking.
    //         </p>
    //       </div>

    //       {/* Speakers Grid */}
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 justify-items-center">
    //         {speakers.map((speaker, index) => (
    //           <div
    //             key={speaker.id}
    //             className="w-[280px] md:w-[300px] lg:w-[320px] animate-fade-in-up"
    //             style={{ animationDelay: `${index * 100}ms` }}
    //           >
    //             <SpeakerCard speaker={speaker} />
    //           </div>
    //         ))}
    //       </div>

    //       {/* Call to Action */}
    //       <div
    //         className="text-center mt-16 animate-fade-in-delay-3"
    //       >
    //         <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
    //           <h3 className="text-2xl font-bold text-white mb-4">
    //             Ready to Be Inspired?
    //           </h3>
    //           <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
    //             Join us for an unforgettable experience where ideas come to life and
    //             inspiration meets action. Register now to secure your spot.
    //           </p>
    //           <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-red-600/25">
    //             Register for Event
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Background glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-red-600/20 rounded-full blur-[150px] sm:blur-[200px] animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow-500/10 rounded-full blur-[100px] sm:blur-[150px] animate-pulse"
        style={{ animationDuration: "5s" }}
      />
      <div className="absolute top-1/4 left-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-red-500/10 rounded-full blur-[80px] sm:blur-[100px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 mb-6 sm:mb-8 leading-tight"
        >
          Countdown to Brilliance: Speakers Coming Soon!
        </motion.h1>

        {/* Subtitle - First Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-5 px-2"
        >
          We&apos;re getting ready to unveil the incredible minds who will take
          the TEDxVJIT 2025 stage. This year&apos;s theme,{" "}
          <span className="font-semibold text-red-400">
            &quot;Metamorphosis&quot;
          </span>
          , is all about transformation, reinvention, and growth.
        </motion.p>

        {/* Subtitle - Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
        >
          Our upcoming lineup will feature changemakers and storytellers who
          have embraced change and turned it into something extraordinary. Their
          journeys will inspire you to turn challenges into opportunities and
          embrace your own transformation.
        </motion.p>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-red-600 to-slate-800 rounded-full mb-8 sm:mb-10 mx-auto"
        />

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 max-w-2xl mx-auto shadow-lg mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Stay tuned — the speaker reveal is just around the corner!
          </p>
        </motion.div>

        {/* Button */}
        <motion.button
          onClick={handleExploreClick}
          className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer bg-red-600 px-5 sm:px-6 pr-12 sm:pr-14 py-2.5 sm:py-3 shadow-lg hover:shadow-red-600/30 transition-shadow mx-auto"
          initial="initial"
          animate="initial"
          whileHover="hovered"
          whileTap={{ scale: 0.96 }}
        >
          <motion.span
            className="relative z-10 text-xs sm:text-sm md:text-base whitespace-nowrap"
            variants={{
              initial: { opacity: 1 },
              hovered: { opacity: 0 },
            }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            Explore Last Edition&apos;s Speakers
          </motion.span>

          <motion.div
            className="absolute top-0 right-0 h-full flex items-center justify-center bg-red-700 rounded-[0.9em]"
            variants={{
              initial: { width: "40px" },
              hovered: { width: "100%" },
            }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        </motion.button>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
          className="text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8"
        >
          Stay tuned for updates ✨
        </motion.p>
      </div>
    </section>
  )
}
