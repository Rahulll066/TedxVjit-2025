"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import { useRouter } from "next/navigation";


export default function AboutPage() {
   const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center py-20 px-4 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
        <source src="/animations/Tedxvjit.mp4"  type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-14 animate-fade-in"
          >
          About <span className="text-red-600">TEDx</span>VJIT
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-delay-1"
          >
            TEDxVJIT is an independently organized TED event at Vidya Jyothi Institute of Technology, Hyderabad, bringing together innovators, leaders, and changemakers to share ideas worth spreading.
          </p>

          {/* Know More Button */}
          <button
          onClick={() =>
            document.getElementById("about-section")?.scrollIntoView({ behavior:"smooth"})
          }
          className="px-8 py-3 bg-red-600 text-white font-semibold rounded-md transition-colors duration-300"
          >
          Know More
          </button>    
        </div>
      </section>

      {/* About Content Sections */}
      <section id="about-section" className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* TEDx Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What is <span className="text-red-600">TEDx</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed text-justify">
                TEDx is a grassroots initiative, created in the spirit of TED&apos;s overall mission to research and discover &quot;ideas worth spreading.&quot; TEDx brings the spirit of TED to local communities around the globe through TEDx events.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed text-justify">
                These events are organized by passionate individuals who seek to uncover new ideas and to share the latest research in their local areas that spark conversations in their communities.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed text-justify">
               At a TEDx event, speakers combine live talks and recorded TED Talks to inspire deep reflection and discussion. These events are fully planned and coordinated independently by volunteers, under a free license granted by TED. 
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed text-justify">
                While the format follows TED&apos;s principles, the content and design are unique to each community,giving every TEDx event its own identity and local relevance. 
              </p>
            </div>
            
            <div className="relative animate-fade-in-delay-1">
              <Image 
                src="/gallery/TEDimage.JPG"
                alt="TEDxVJIT Event"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg border border-red-500/30"
              />
            </div>
          </div>

          {/* Previous Theme Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-delay-2">
              <Image
                src="/gallery/_DSC8353.JPG"
                alt="TEDxVJIT Event"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg border border-red-500/30"
              />
            </div>
            <div className="animate-fade-in-delay-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-red-600">2024:</span> Power of Persistence
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed text-justify">
                The theme for TEDxVJIT 2024, &quot;Power of Persistence,&quot; celebrates the unwavering spirit of individuals who have overcome monumental challenges to achieve their goals. It&apos;s a tribute to the silent strength that fuels success and innovation.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed text-justify">
                Through compelling stories and groundbreaking ideas, our speakers explored how resilience, determination, and consistency can shape destinies and inspire communities.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed text-justify">
                The theme reminded us that success is rarely instant — it is the outcome of dedication resilience, and an unshakable belief in the journey.
              </p>
              <button
              onClick={() =>
              router.push("../2024/speakers")
            }
              className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-md transition-colors duration-300"
              >
              Know More
              </button> 
            </div>
          </div>
          
          {/* Gallery Section */}
          <div className="text-center animate-fade-in-delay-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Gallery
          </h2>

          <div className="max-w-4xl mx-auto mb-8">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2000}
              arrows={false}
            >
            <div>
              <Image
                src="/gallery/_DSC7571.JPG"
                alt="TEDxVJIT Event"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg border border-red-500/30 mx-auto"
              />
            </div>
            <div>
              <Image
                src="/gallery/KVK_3670.JPG"
                alt="TEDxVJIT Event"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg border border-red-500/30 mx-auto"
              />
            </div>
            <div>
              <Image
                src="/gallery/KVK_3568.JPG"
                alt="TEDxVJIT Event"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg border border-red-500/30 mx-auto"
              />
            </div>
            <div>
              <Image
                src="/gallery/DSC00943.JPG"
                alt="TEDxVJIT Event"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg border border-red-500/30 mx-auto"
              />
            </div>
            <div>
              <Image
                src="/gallery/_DSC7474.JPG"
                alt="TEDxVJIT Event"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg border border-red-500/30 mx-auto"
              />
            </div>
            </Slider>
          </div>

          <button
            onClick={() => (window.location.href = "/gallery")}
            className="px-8 py-3 bg-red-600 text-white font-semibold rounded-md transition-colors duration-300"
          >
          View Full Gallery
          </button>
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



