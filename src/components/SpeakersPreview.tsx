"use client";

import SpeakerCard from "./SpeakerCard";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Settings, CustomArrowProps } from "react-slick";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🔴 Custom Arrow Components
function NextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-8 top-1/2 -translate-y-1/2 
                 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 
                 shadow-lg shadow-red-600/40 transition-all duration-300 z-20"
      style={{ outline: 'none' }}
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-8 top-1/2 -translate-y-1/2 
                 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 
                 shadow-lg shadow-red-600/40 transition-all duration-300 z-20"
      style={{ outline: 'none' }}
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

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
  {
    id: 4,
    name: 'David Kim',
    title: 'AI for Good',
    company: 'AI Impact',
    image: '/assets/2.png',
    bio: 'David leverages AI for social impact.',
    description: 'David Kim is a data scientist focused on leveraging artificial intelligence for social good, working on projects that address real-world problems.',
    expertise: ['AI', 'Data Science', 'Social Impact'],
    social: { linkedin: '#', twitter: '#', website: '#' }
  },
  {
    id: 5,
    name: 'Elena Garcia',
    title: 'Designing the Future',
    company: 'NextGen Design',
    image: '/assets/6.png',
    bio: 'Elena is a creative designer and futurist.',
    description: 'Elena Garcia is a creative designer and futurist, passionate about blending technology and art to create meaningful experiences.',
    expertise: ['Design', 'Futurism', 'Art'],
    social: { linkedin: '#', twitter: '#', website: '#' }
  },
  {
    id: 6,
    name: 'Frank Wu',
    title: 'Health Innovator',
    company: 'Wellness Tech',
    image: '/assets/hero-banner.png',
    bio: 'Frank pioneers health tech solutions.',
    description: 'Frank Wu pioneers health tech solutions that improve patient outcomes and healthcare accessibility.',
    expertise: ['Health Tech', 'Innovation', 'Wellness'],
    social: { linkedin: '#', twitter: '#', website: '#' }
  },
  {
    id: 7,
    name: 'Grace Patel',
    title: 'Women in STEM',
    company: 'STEM Forward',
    image: '/assets/2.png',
    bio: 'Grace advocates for women in STEM fields.',
    description: 'Grace Patel is a passionate advocate for women in STEM, working to close the gender gap and inspire future generations.',
    expertise: ['STEM', 'Advocacy', 'Education'],
    social: { linkedin: '#', twitter: '#', website: '#' }
  },
  {
    id: 8,
    name: 'Hassan Ali',
    title: 'Green Energy Visionary',
    company: 'EcoPower',
    image: '/assets/6.png',
    bio: 'Hassan drives green energy initiatives.',
    description: 'Hassan Ali is a green energy visionary, leading projects that promote sustainability and renewable energy adoption.',
    expertise: ['Green Energy', 'Sustainability', 'Leadership'],
    social: { linkedin: '#', twitter: '#', website: '#' }
  },
  {
    id: 9,
    name: 'Isabella Rossi',
    title: 'Cultural Connector',
    company: 'Global Voices',
    image: '/assets/hero-banner.png',
    bio: 'Isabella connects cultures through dialogue.',
    description: 'Isabella Rossi connects cultures through dialogue and storytelling, fostering understanding and collaboration.',
    expertise: ['Culture', 'Dialogue', 'Storytelling'],
    social: { linkedin: '#', twitter: '#', website: '#' }
  },
  {
    id: 10,
    name: 'Jin Park',
    title: 'Urban Innovator',
    company: 'CityLab',
    image: '/assets/2.png',
    bio: 'Jin reimagines urban spaces.',
    description: 'Jin Park is an urban innovator, reimagining city spaces for better living and community engagement.',
    expertise: ['Urban Design', 'Innovation', 'Community'],
    social: { linkedin: '#', twitter: '#', website: '#' }
  },
  {
    id: 11,
    name: 'Kavya Singh',
    title: 'Digital Educator',
    company: 'EdTech Now',
    image: '/assets/6.png',
    bio: 'Kavya transforms digital learning.',
    description: 'Kavya Singh transforms digital learning with innovative tools and inclusive teaching strategies.',
    expertise: ['EdTech', 'Digital Learning', 'Inclusion'],
    social: { linkedin: '#', twitter: '#', website: '#' }
  },
  {
    id: 12,
    name: 'Liam O’Connor',
    title: 'Entrepreneurship Catalyst',
    company: 'Startup Hub',
    image: '/assets/hero-banner.png',
    bio: 'Liam empowers entrepreneurs.',
    description: 'Liam O’Connor empowers entrepreneurs to launch and scale impactful startups.',
    expertise: ['Entrepreneurship', 'Startups', 'Mentorship'],
    social: { linkedin: '#', twitter: '#', website: '#' }
  },
];

export default function SpeakersPreview() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkTablet = () => setIsTablet(window.innerWidth <= 1024);
    checkTablet();
    window.addEventListener("resize", checkTablet);
    return () => window.removeEventListener("resize", checkTablet);
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
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    arrows: !isMobile && !isTablet,
    nextArrow: !isMobile && !isTablet ? <NextArrow /> : undefined,
    prevArrow: !isMobile && !isTablet ? <PrevArrow /> : undefined,
    appendDots: (dots: React.ReactNode) => (
      <div 
        style={{ bottom: "-30px", right: "0px", left: "0px" }}
      >
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-600 hover:bg-red-400 transition-all duration-300"></div>
    ),
  };

  return (
    <section className="w-full mx-auto px-2 xs:px-3 sm:px-6 py-12 sm:py-16 md:py-20 relative">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 text-center text-white px-2">
        Featured Speakers
      </h2>
      <Slider {...settings} className="max-w-6xl pb-6 mx-auto relative px-0 sm:px-4 md:px-8">
        {sampleSpeakers.map((speaker) => (
          <div key={speaker.id} className="flex justify-center items-stretch">
            <div
              className={`flex items-stretch ${
                isMobile || isTablet
                  ? "w-full mx-auto px-2 py-2 justify-center"
                  : "w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-xs mx-4"
              }`}
            >
              <SpeakerCard speaker={speaker} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}