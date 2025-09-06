import SpeakerCard from './SpeakerCard';

const sampleSpeakers = [
  {
    id: 1,
    name: 'Alice Johnson',
    title: 'Transforming Ideas',
    company: 'Innovation Labs',
    image: '/assets/2.png',
    bio: 'Alice is a visionary leader in innovation and storytelling.',
    description: 'Alice Johnson is a visionary leader in innovation and storytelling, with over 15 years of experience in transforming ideas into reality. She has led numerous successful projects and inspired countless individuals to think creatively and act boldly.',
    expertise: ['Innovation', 'Storytelling', 'Leadership'],
    social: { linkedin: '#', twitter: '#', website: '#' }
  },
  {
    id: 2,
    name: 'Bob Smith',
    title: 'Shaping Futures',
    company: 'Future Tech Institute',
    image: '/assets/6.png',
    bio: 'Bob explores future tech and youth empowerment.',
    description: 'Bob Smith is a forward-thinking technologist who explores the intersection of future technology and youth empowerment. His work focuses on preparing the next generation for the challenges and opportunities of tomorrow.',
    expertise: ['Future Tech', 'Youth Empowerment', 'Technology Education'],
    social: { linkedin: '#', twitter: '#', website: '#' }
  },
  {
    id: 3,
    name: 'Catherine Lee',
    title: 'The Power of Change',
    company: 'Education Reform Foundation',
    image: '/assets/hero-banner.png',
    bio: 'Catherine is known for social reform through education.',
    description: 'Catherine Lee is a passionate advocate for social reform through education. She has dedicated her career to creating positive change in communities through innovative educational approaches and inclusive learning environments.',
    expertise: ['Education Reform', 'Social Change', 'Community Development'],
    social: { linkedin: '#', twitter: '#', website: '#' }
  },
];

export default function SpeakersPreview() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 text-center text-white px-2">
        Featured Speakers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
  {sampleSpeakers.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            speaker={speaker}
          />
        ))}
      </div>
    </section>
  );
}
