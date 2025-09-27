"use client";

import React, { useState, useEffect } from "react";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
function NextArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-8 top-1/2 -translate-y-1/2 
                 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 
                 shadow-lg shadow-red-600/40 transition-all duration-300 z-20"
      style={{ outline: "none" }}
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -left-8 top-1/2 -translate-y-1/2 
                 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 
                 shadow-lg shadow-red-600/40 transition-all duration-300 z-20"
      style={{ outline: "none" }}
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

// Sample Speakers Data (keep your full data here)
const sampleSpeakers = [
  {
    id: 1,
    name: 'JD Laxmi Narayana',
    title: 'Ex-Joint Director, CBI',
    company: '',
    image: 'https://ik.imagekit.io/tedxvjit/public/speakers/jd_laxmi_narayana.png?updatedAt=1729522774797',
    bio: 'Alice is a visionary leader in innovation and storytelling.',
    description: 'VV (popularly known as) JD Lakshminarayana, a former Joint Director of the Central Bureau of Investigation (CBI) and the current president of the Jai Bharat National Party (JBNP), is a prominent figure in Indian law enforcement and politics. Currently pursuing a Ph.D. in Rural Development. A retired Indian Police Service (IPS) officer from Andhra Pradesh, he has served in key positions, including as the Additional Director General of Police in Mumbai.',
    expertise: [],
    social: { 
      linkedin: '',
      instagram: 'https://www.instagram.com/jdlakshminarayana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', 
      twitter: 'https://x.com/VVL_Official?t=3S_xt5j8dePVlVmVsf_2wA&s=08', 
      website: '' 
    }
  },
  {
    id: 2,
    name: 'Vanitha Datla',
    title: 'Vice Chairperson & MD',
    company: 'ELICO Ltd.',
    image: 'https://ik.imagekit.io/tedxvjit/public/speakers/vanitha_datla.png?updatedAt=1729522782340',
    bio: 'Vice Chairperson & Managing Director of ELICO Ltd.',
    description: 'Vanitha Datla is a highly accomplished professional with nearly three decades of experience in diverse sectors, including financial services, insurance, cement, power, security printing, instrumentation, BPO services, and healthcare in the USA and India. She serves as the Vice Chairperson of Elico and the Managing Director of Elico Healthcare Services Ltd, a Hyderabad-based company. She is a Chartered Financial Analyst and is pursuing a doctoral program at ISB on the Role of Women in Family Businesses. She also serves as treasurer of Women in Network, mentoring children from urban slums to enhance their education and quality of life.',
    expertise: [],
    social: { 
      linkedin: 'https://www.linkedin.com/in/vanithadatla/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BantXG80GSYyhoQ%2BRvXbfPg%3D%3D',
      instagram: '',
      twitter: 'https://twitter.com/vanitha_datla', 
      website: ''
    }
  },
  {
    id: 3,
    name: 'Dasaraj Centhimil Tarun',
    title: 'DCT Eats food blogger',
    company: '',
    image: 'https://ik.imagekit.io/tedxvjit/public/speakers/dasaraj_centhamli_tarun.png?updatedAt=1729522774024',
    bio: 'MBA graduate from IIM Calcutta DCT Eats food blogger',
    description: 'Dasaraj Centhamil Tarun is the creator of DCT Eats, a rapidly growing food channel with over 1 million subscribers. He holds a B.Com (H) from SRCC and an MBA from IIM Calcutta. DCT initially worked at leading companies like Zomato, Oyo, and Bain. After a brief return to Zomato, he decided to leave corporate life to pursue his passion for food content creation.His channel experienced explosive growth during IPL 2023, gaining 110,000 subscribers in just one month. Today, DCT Eats is celebrated for its engaging and flavorful culinarycontent, attracting food lovers from around the globe.',
    expertise: [],
    social: { 
      linkedin: '',
      instagram: 'https://www.instagram.com/dctarun/?utm_source=ig_web_button_share_sheet',
      twitter: '',
      website: ''
    }
  },
  {
    id: 4,
    name: 'S Krithivasan',
    title: 'Career Catalyst & HR Innovator',
    company: '',
    image: 'https://ik.imagekit.io/tedxvjit/public/speakers/krithivasam_s.png?updatedAt=1729522774110',
    bio: 'Career Catalyst & HR Innovator.',
    description: 'Krithivasan impressive background highlights his extensive 17+ years of HR experience and leadership in team building and growth initiatives. His roles at Virtusa and Pickyourtrail demonstrate his global reach and strategic acumen in campus strategy and partnerships. As Vice President of HR at YourTribe, he effectively combines his expertise in talent acquisition and HR services with a passion for advising startups. His educational background with an Executive MBA from XLRI Jamshedpur further complements his professional experience. Additionally, his love for travel and commitment to advising academic institutions reflect a well-rounded individual dedicated to fostering innovation and a people-centric HR approach.',
    expertise: [],
    social: { 
      linkedin: 'https://www.linkedin.com/in/krithivasans/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BVfIq0H%2FZRu2ooWW76Z2lAg%3D%3D',
      instagram: '',
      twitter: '',
      website: ''
    }
  },
  {
    id: 5,
    name: 'Dr. S. Bakhtiar',
    title: 'ports Medicine specialist',
    company: '',
    image: 'https://ik.imagekit.io/tedxvjit/public/speakers/BAKHTIAR.png?updatedAt=1729522766052',
    bio: 'Frank pioneers health tech solutions.',
    description: 'Prof. Major Dr. S. Bakhtiar Choudhary (Retd.) is a renowned war veteran and sports medicine specialist with over 40 years of experience, having served both the Indian Army and Apollo Hospitals for a decade each. He has been a visiting faculty member at top institutions, training IPS, IAS, and IRS officers, and advising MNCs and universities. A pioneer in occupational health, he identified and described conditions such as Straight Spine Syndrome and Urban Neck Syndrome. His groundbreaking research has saved thousands from undergoing spinal surgeries. Dr. Choudhary has made significant contributions to sports medicine, advising international athletes, and has been an active promoter of environmental conservation. Additionally, he is a martial artist, an award-winning researcher, an author, and a passionate advocate for ecological education',
    expertise: [],
    social: { 
      linkedin: 'https://www.linkedin.com/in/bakhtiar-choudhary-4203b015/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BfJHkPaAPTQOYS%2Beh759S0A%3D%3D',
      instagram: '',
      twitter: '',
      website: ''
    }
  },
  {
    id: 6,
    name: 'Debabrata Sarkar',
    title: 'CMD at MicroAlgae Solutions',
    company: '',
    image: 'https://ik.imagekit.io/tedxvjit/public/speakers/debabrata_sarkar.png?updatedAt=1729522774116',
    bio: 'Elena is a creative designer and futurist.',
    description: 'Mr. Debabrata Sarkar, a TEDx speaker and accomplished C-level executive, boasts over 26 years of experience in the International Agriculture sector. An IIM Kolkata alumnus, he has held leadership roles at Monsanto, Chemtura, and Syngenta. Currently, he serves as CMD of MicroAlgae Solutions India Pvt Ltd, Director of AGMA Energy, and Vice President - APAC for AE Biologicals. Featured in top publications like Forbes and Fortune, Mr. Sarkar won back-to-back Best Bio Ag CEO Awards in 2022 and 2023, presented by Central Agriculture Minister Mr. Narendra Singh Tomar, recognizing his contributions to sustainable agriculture.',
    expertise: [],
    social: { 
      linkedin: 'https://www.linkedin.com/in/debabrata-sarkar-r-20772415/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3ByqHQFwhBQ9iDk16AszGFSA%3D%3D',
      instagram: '',
      twitter: '',
      website: ''
    }
  },
  {
    id: 7,
    name: 'Hasvi Muriki',
    title: 'Mountaineer - World Record holder*4 ',
    company: '',
    image: 'https://ik.imagekit.io/tedxvjit/public/speakers/hasvi.png?updatedAt=1729522771831',
    bio: 'Passionate Photographer l Cyclist and Runner l Badminton player l National Skater',
    description: 'I am Muriki Pulakita Hasvi, a 16-year-old DexSchool graduate, sports enthusiast, avid cyclist, runner, blogger, MUNer, and TEDx speaker. I have already climbed 3 of the 7 summits and dream of conquering all seven before I turn 19. I hold records as the youngest girl to climb Mt. UT Kangri, Mt. Kang Yatse, and Mt. Dzo Jongo within 70 hours. Additionally, I am the youngest girl to have climbed Mt. Elbrus (the highest mountain in Europe) West and East within 24 hours, as well as Island Peak in Nepal (6,189m). To date, I have completed a total of 12 expeditions. I plan to become a lawyer in the future, as I love reading books and conducting research.',
    expertise: [],
    social: { 
      linkedin: 'https://www.linkedin.com/in/hasvi-muriki-9088b5225/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BlYcQwuotREWZEQzHJrY%2Bxg%3D%3D',
      instagram: '',
      twitter: '',
      website: ''
    }
  },
  {
    id: 8,
    name: 'Likitha Yalamanchili',
    title: 'Miss India AP 2022 Finalist and Doctor',
    company: 'EcoPower',
    image: 'https://ik.imagekit.io/tedxvjit/public/speakers/likitha.png?updatedAt=1729522773211',
    bio: 'Doctor and Miss India AP 2022 Finalist',
    description: 'Likhita Yalamanchili is Miss India Andhra Pradesh 2022 and has also earned the prestigious titles of Times Miss Beauty with a Purpose and Moj Miss Rising Star. She is an MBBS graduate and a successful model, who is now set to make her debut as an actor in the Telugu film industry with her upcoming movie Euphoria, slated for release in early 2025.',
    expertise: [],
    social: { 
      linkedin: '',
      instagram: 'https://www.instagram.com/likhita_yalamanchili?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      twitter: '',
      website: ''
    }
  },
  {
    id: 9,
    name: 'Nikhil Desai',
    title: 'International motivator speaker',
    company: '',
    image: 'https://ik.imagekit.io/tedxvjit/public/speakers/nikhil_desai.png?updatedAt=1729522775652',
    bio: 'International motivator speaker',
    description: 'Nikhil Desai is dedicated to empowering individuals and organizations to unlock their true potential. Known for his energetic speaking style, he inspires and motivates participants to create lasting change in their lives and work environments. With over 33 years of experience, Nikhil has positively impacted more than a quarter-million participants across 42 countries, including India, the USA, Canada, Sweden, the UAE, and Singapore. His programs are designed to foster personal growth and organizational development. Nikhil has been featured in the media across multiple countries and has appeared on television and radio in India, the USA, the Philippines, South Africa, and Oman, making a global impact with his work.',
    expertise: [],
    social: { 
      linkedin: 'https://www.linkedin.com/in/nikhilpdesai/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BCdiy%2BXh0RFKeBgjnHYhcuA%3D%3D',
      instagram: '',
      twitter: '',
      website: ''
    }
  },
  {
    id: 10,
    name: 'Naveen Samala',
    title: 'Founder-The Guiding Voice"',
    company: '',
    image: 'https://ik.imagekit.io/tedxvjit/public/speakers/naveen_samala.png?updatedAt=1729522774666',
    bio: 'Global Portfolio Management Leader-Diebold, Founder-The Guiding Voice',
    description: 'Naveen Samala is a remarkable individual whose journey is a powerful testament to perseverance and the relentless pursuit of dreams. Rising from a modest background, he has become a first-generation post-graduate, showcasing his ambition and dedication. Now a Global Portfolio Manager for Business Transformation, Naveen is also an Udemy instructor, author, career coach, CXO resume writer, guest faculty at BITS Pilani, and podcast visionary. His podcast, The Guiding Voice, ranked in the Global Top 2.5%, is the worlds only Quadrilingual podcast, inspiring millions. With expertise in leadership, productivity, and public speaking, his podcast recently won the Asia Podcast Award for Education, further amplifying his impact globally.',
    expertise: [],
    social: { 
      linkedin: 'https://www.linkedin.com/in/naveensamala/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BT4wuo2idQOKI7rUPra%2FnIw%3D%3D',
      instagram: '',
      twitter: '',
      website: ''
    }
  },
  {
    id: 11,
    name: 'Kraveenthar Kamal',
    title: 'Director & Founder Maker Global',
    company: '',
    image: 'https://ik.imagekit.io/tedxvjit/public/speakers/kamal.png?updatedAt=1729522775238',
    bio: 'Kavya transforms digital learning.',
    description: '',
    expertise: [],
    social: { 
      linkedin: 'https://www.linkedin.com/in/kraveentharkamal/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BVu4Ve0irR2SJXUdTcw5GyQ%3D%3D',
      instagram: '',
      twitter: '',
      website: ''
    }
  },
];


export default function SpeakersPreview() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: isMobile || isTablet ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: !isMobile && !isTablet,
    nextArrow: !isMobile && !isTablet ? <NextArrow /> : undefined,
    prevArrow: !isMobile && !isTablet ? <PrevArrow /> : undefined,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "-30px", left: 0, right: 0 }}>
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-600 hover:bg-red-400 transition-all duration-300"></div>
    ),
  };

  const handleViewAllClick = () => router.push("/2024/speakers");

  return (
    <section className="w-full mx-auto px-2 xs:px-3 sm:px-6 py-12 sm:py-16 md:py-20 relative bg-black">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 text-center text-white px-2">
        Last Edition Speakers
      </h2>

      <Slider {...settings} className="max-w-6xl pb-6 mx-auto relative px-0 sm:px-4 md:px-12">
        {sampleSpeakers.map((speaker) => (
          <motion.div
            key={speaker.id}
            className="flex justify-center items-stretch px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`flex items-stretch ${
                isMobile || isTablet
                  ? "w-full mx-auto py-2 justify-center"
                  : "w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-xs mx-4"
              }`}
            >
              <SpeakerCard speaker={speaker} />
            </div>
          </motion.div>
        ))}
      </Slider>

      <div className="flex justify-center mt-8 sm:mt-12">
        <motion.button
          className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer
             bg-red-600 px-[1.2em] pr-[3em] py-[0.35em] h-[2.8em] shadow-[inset_0_0_1.6em_-0.6em_rgba(180,0,0,0.5)]] min-w-[150px] sm:min-w-[200px]"
          initial="initial"
          animate="initial"
          whileHover="hovered"
          whileTap={{ scale: 0.96 }}
          onClick={handleViewAllClick}
        >
          <motion.span
            className="relative z-10 text-sm sm:text-base"
            variants={{
              initial: { opacity: 1 },
              hovered: { opacity: 0 },
            }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            View All Speakers
          </motion.span>

          <motion.div
            className="absolute top-0 right-0 h-full flex items-center justify-center bg-red-600 rounded-[0.9em]"
            variants={{
              initial: { width: 44 },
              hovered: { width: '100%' },
            }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <ArrowRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
