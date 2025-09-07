import SpeakerCard from '../../components/SpeakerCard'

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
            Meet Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Speakers
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-delay-1"
          >
            Discover thought leaders, innovators, and visionaries who will share their insights,
            experiences, and groundbreaking ideas that will inspire and challenge your perspective.
          </p>

          <div
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 animate-fade-in-delay-2"
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              {speakers.length} Inspiring Speakers
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Diverse Perspectives
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Interactive Sessions
            </span>
          </div>
        </div>
      </section>

      {/* Speakers Grid Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className="text-center mb-16 animate-fade-in"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Speakers
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Each speaker brings unique expertise and insights that will expand your horizons
              and inspire new ways of thinking.
            </p>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className="text-center mt-16 animate-fade-in-delay-3"
          >
            <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Be Inspired?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join us for an unforgettable experience where ideas come to life and
                inspiration meets action. Register now to secure your spot.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-red-600/25">
                Register for Event
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
