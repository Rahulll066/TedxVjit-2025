import SpeakerRectangle from '../../../components/SpeakerRectangle'

export default function SpeakersPage() {
    const speakers = [
        {
            id: 1,
            name: 'JD Laxmi Narayana',
            title: 'Ex-Joint Director',
            company: 'CBI',
            description: 'VV (popularly known as) JD Lakshminarayana, a former Joint Director of the Central Bureau of Investigation (CBI) and the current president of the Jai Bharat National Party (JBNP), is a prominent figure in Indian law enforcement and politics. Currently pursuing a Ph.D. in Rural Development. A retired Indian Police Service (IPS) officer from Andhra Pradesh, he has served in key positions, including as the Additional Director General of Police in Mumbai.',
            expertise: ['AI Ethics', 'Machine Learning', 'Human-AI Interaction'],
            social: { linkedin: '#', twitter: '#', website: '#', instagram: 'https://www.instagram.com/jdlakshminarayana' },
            youtube: 'https://www.youtube.com/embed/paK_ifFEUTc',
        },
        {
            id: 2,
            name: 'Vanitha Datla',
            title: 'Vice Chairperson & Managing Director',
            company: 'ELICO Ltd.',
            description: 'Vanitha Datla is a highly accomplished professional with nearly three decades of experience in diverse sectors, including financial services, insurance, cement, power, security printing, instrumentation, BPO services, and healthcare in the USA and India. She serves as the Vice Chairperson of Elico and the Managing Director of Elico Healthcare Services Ltd, a Hyderabad-based company. She is a Chartered Financial Analyst and is pursuing a doctoral program at ISB on the Role of Women in Family Businesses. She also serves as treasurer of Women in Network, mentoring children from urban slums to enhance their education and quality of life.',
            expertise: ['Climate Tech', 'Renewable Energy', 'Sustainability'],
            social: { linkedin: 'https://www.linkedin.com/in/vanithadatla/', twitter: '#', website: '#' },
            youtube: 'https://www.youtube.com/embed/oQOF8LWywq8',
        },
        {
            id: 3,
            name: 'Dasaraj Centhimil Tarun',
            title: 'Food Blogger & Content Creator',
            company: 'DCT Eats',
            description: 'Dasaraj Centhamil Tarun is the creator of DCT Eats, a rapidly growing food channel with over 1 million subscribers. He holds a B.Com (H) from SRCC and an MBA from IIM Calcutta. DCT initially worked at leading companies like Zomato, Oyo, and Bain. After a brief return to Zomato, he decided to leave corporate life to pursue his passion for food content creation.His channel experienced explosive growth during IPL 2023, gaining 110,000 subscribers in just one month. Today, DCT Eats is celebrated for its engaging and flavorful culinarycontent, attracting food lovers from around the globe.',
            expertise: ['Neuroscience', 'Cognitive Science', 'Brain Mapping'],
            social: { linkedin: '#', twitter: '#', website: '#', instagram: 'https://www.instagram.com/dctarun/' },
            youtube: 'https://www.youtube.com/embed/nnKtPSt2Nbw',
        },
        {
            id: 4,
            name: 'Likitha Yalamanchili',
            title: 'Doctor',
            company: 'Miss India AP 2022 Finalist',
            description: 'Likhita Yalamanchili is Miss India Andhra Pradesh 2022 and has also earned the prestigious titles of Times Miss Beauty with a Purpose and Moj Miss Rising Star. She is an MBBS graduate and a successful model, who is now set to make her debut as an actor in the Telugu film industry with her upcoming movie Euphoria, slated for release in early 2025.',
            expertise: ['Social Entrepreneurship', 'Business Strategy', 'Impact Investing'],
            social: { linkedin: '#', twitter: '#', website: '#', instagram: 'https://www.instagram.com/likhita_yalamanchili/' },
            youtube: 'https://www.youtube.com/embed/uBPec2lCvNw',
        },
        {
            id: 5,
            name: 'Naveen Samala',
            title: 'Global Portfolio Management Leader - Diebold',
            company: 'Founder - The Guiding Voice',
            description: `Naveen Samala is a remarkable individual whose journey is a powerful testament to perseverance and the relentless pursuit of dreams. Rising from a modest background, he has become a first-generation post-graduate, showcasing his ambition and dedication. Now a Global Portfolio Manager for Business Transformation, Naveen is also an Udemy instructor, author, career coach, CXO resume writer, guest faculty at BITS Pilani, and podcast visionary. His podcast, The Guiding Voice, ranked in the Global Top 2.5%, is the world's only Quadrilingual podcast, inspiring millions. With expertise in leadership, productivity, and public speaking, his podcast recently won the Asia Podcast Award for Education, further amplifying his impact globally.`,
            expertise: ['Quantum Computing', 'Physics', 'Computer Science'],
            social: { linkedin: 'https://www.linkedin.com/in/naveensamala/', twitter: '#', website: '#' },
            youtube: 'https://www.youtube.com/embed/KOVImd72HRQ',
        },
        {
            id: 6,
            name: 'S Krithivasan',
            title: 'Career Catalyst & HR Innovator',
            company: '',
            description: `Krithivasan's impressive background highlights his extensive 17+ years of HR experience and leadership in team building and growth initiatives. His roles at Virtusa and Pickyourtrail demonstrate his global reach and strategic acumen in campus strategy and partnerships. As Vice President of HR at YourTribe, he effectively combines his expertise in talent acquisition and HR services with a passion for advising startups. His educational background with an Executive MBA from XLRI Jamshedpur further complements his professional experience. Additionally, his love for travel and commitment to advising academic institutions reflect a well-rounded individual dedicated to fostering innovation and a people-centric HR approach.`,
            expertise: ['Digital Art', 'Creative Technology', 'NFTs'],
            social: { linkedin: 'https://www.linkedin.com/in/krithivasans/', twitter: '#', website: '#' },
            youtube: 'https://www.youtube.com/embed/prFmUpk-Z7w',
        },
        {
            id: 7,
            name: 'Debabrata Sarkar',
            title: 'CMD',
            company: 'MicroAlgae Solutions',
            description: `Mr. Debabrata Sarkar, a TEDx speaker and accomplished C-level executive, boasts over 26 years of experience in the International Agriculture sector. An IIM Kolkata alumnus, he has held leadership roles at Monsanto, Chemtura, and Syngenta. Currently, he serves as CMD of MicroAlgae Solutions India Pvt Ltd, Director of AGMA Energy, and Vice President - APAC for AE Biologicals. Featured in top publications like Forbes and Fortune, Mr. Sarkar won back-to-back Best Bio Ag CEO Awards in 2022 and 2023, presented by Central Agriculture Minister Mr. Narendra Singh Tomar, recognizing his contributions to sustainable agriculture.`,
            expertise: ['Digital Art', 'Creative Technology', 'NFTs'],
            social: { linkedin: 'https://www.linkedin.com/in/debabrata-sarkar-ds-20772415/', twitter: '#', website: '#' },
            youtube: 'https://www.youtube.com/embed/xv7THSQRyHk',
        },
        {
            id: 8,
            name: 'Dr. S. Bakhtiar',
            title: 'Sports Medicine specialist',
            company: '',
            description: `Prof. Major Dr. S. Bakhtiar Choudhary (Retd.) is a renowned war veteran and sports medicine specialist with over 40 years of experience, having served both the Indian Army and Apollo Hospitals for a decade each. He has been a visiting faculty member at top institutions, training IPS, IAS, and IRS officers, and advising MNCs and universities. A pioneer in occupational health, he identified and described conditions such as Straight Spine Syndrome and Urban Neck Syndrome. His groundbreaking research has saved thousands from undergoing spinal surgeries. Dr. Choudhary has made significant contributions to sports medicine, advising international athletes, and has been an active promoter of environmental conservation. Additionally, he is a martial artist, an award-winning researcher, an author, and a passionate advocate for ecological education`,
            expertise: ['Digital Art', 'Creative Technology', 'NFTs'],
            social: { linkedin: 'https://www.linkedin.com/in/bakhtiar-choudhary-4203b015/', twitter: '#', website: '#' },
            youtube: 'https://www.youtube.com/embed/DZjDzbiGLcQ',
        },
        {
            id: 9,
            name: 'Nikhil Desai',
            title: 'International motivator speaker',
            company: '',
            description: `Nikhil Desai is dedicated to empowering individuals and organizations to unlock their true potential. Known for his energetic speaking style, he inspires and motivates participants to create lasting change in their lives and work environments. With over 33 years of experience, Nikhil has positively impacted more than a quarter-million participants across 42 countries, including India, the USA, Canada, Sweden, the UAE, and Singapore. His programs are designed to foster personal growth and organizational development. Nikhil has been featured in the media across multiple countries and has appeared on television and radio in India, the USA, the Philippines, South Africa, and Oman, making a global impact with his work.`,
            expertise: ['Digital Art', 'Creative Technology', 'NFTs'],
            social: { linkedin: 'https://www.linkedin.com/in/nikhilpdesai/', twitter: '#', website: '#' },
            youtube: 'https://www.youtube.com/embed/aN7AlwtupHc',
        },
        {
            id: 10,
            name: 'Hasvi Muriki',
            title: 'Passionate Photographer | Cyclist and Runner |',
            company: 'Badminton player | National Skater',
            description: `I am Muriki Pulakita Hasvi, a 16-year-old DexSchool graduate, sports enthusiast, avid cyclist, runner, blogger, MUNer, and TEDx speaker. I have already climbed 3 of the 7 summits and dream of conquering all seven before I turn 19. I hold records as the youngest girl to climb Mt. UT Kangri, Mt. Kang Yatse, and Mt. Dzo Jongo within 70 hours. Additionally, I am the youngest girl to have climbed Mt. Elbrus (the highest mountain in Europe) West and East within 24 hours, as well as Island Peak in Nepal (6,189m). To date, I have completed a total of 12 expeditions. I plan to become a lawyer in the future, as I love reading books and conducting research.`,
            expertise: ['Digital Art', 'Creative Technology', 'NFTs'],
            social: { linkedin: 'https://www.linkedin.com/in/hasvi-muriki-9088b5225/', twitter: '#', website: '#' },
            youtube: 'https://www.youtube.com/embed/XedQiMYXkhA',
        },
        {
            id: 11,
            name: 'Kraveenthar Kamal',
            title: 'Director & Founder - Maker Global',
            company: 'Maker Global',
            description: `Kraveenthar Kamal is the Founder and Director of MAKER GLOBAL, an 8-year-old bootstrapped startup that has become one of India's rapidly growing companies in 3D printing technology. He holds a degree in Mechanical Engineering from the renowned Loyola College, Chennai, and completed an exchange program at ICAM University in Toulouse, France, where he first encountered 3D printing technology. Inspired by a vision to make this technology accessible to the masses in India, he began his entrepreneurial journey at just 21 years old. Through determination and perseverance, he has grown MAKER GLOBAL into Hyderabad's leading 3D printing company. The company's notable clients include Tata Aerospace, Boeing, the Indian Army, and Procter & Gamble. Additionally, MAKER GLOBAL is a key provider of high-tech, intricately detailed props for the art and costumes departments of Telugu cinema through 3D printing.`,
            expertise: ['Digital Art', 'Creative Technology', 'NFTs'],
            social: { linkedin: 'https://www.linkedin.com/in/krithivasans/', twitter: '#', website: '#' },
            youtube: 'https://www.youtube.com/embed/xhZWPpxjCCo',
        },
    ];

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
                    <h2 className="text-2xl md:text-3xl font-semibold text-red-400 mb-10">Power of Persistence - 2024</h2>
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

            {/* Speakers - Power of Persistence (2024) Section */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Speakers - Power of Persistence <span className="text-red-400">(2024)</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Each speaker brings unique expertise and insights that will expand your horizons and inspire new ways of thinking.
                        </p>
                    </div>

                    {/* Speakers Rectangle List */}
                    <div className="flex flex-col gap-10">
                        {speakers.map((speaker, index) => (
                            <div
                                key={speaker.id}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <SpeakerRectangle speaker={speaker} />
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16 animate-fade-in-delay-3">
                        <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Ready to Be Inspired?
                            </h3>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Join us for an unforgettable experience where ideas come to life and inspiration meets action. Register now to secure your spot.
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
