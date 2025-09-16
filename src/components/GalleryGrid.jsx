// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const sections = {
//   "Tedx@2024": [
//     { src: "/gallery/G-images-2.jpg", alt: "Event Combo", grid: "col-span-3 row-span-2 relative" },
//     { src: "/gallery/G-images-1.JPG", alt: "Event Highlight 1", grid: "col-span-2 row-span-3 col-start-4 relative" },
//     { src: "/gallery/G-images-3.JPG", alt: "Event Highlight 2", grid: "col-span-2 row-span-3 col-start-2 row-start-3 relative" },
//     { src: "/gallery/TEDimage.JPG", alt: "Ambiance", grid: "row-span-3 col-start-1 row-start-3 relative" },
//     { src: "/gallery/G-images-4.JPG", alt: "Event Highlight 3", grid: "col-span-2 row-span-2 col-start-4 row-start-4 relative" },
//   ],
 
//   "Visual Stories": [
//     { src: "/gallery/G-images-1.JPG", alt: "Story 1", grid: "col-span-3 row-span-2 relative" },
//     { src: "/gallery/G-images-2.jpg", alt: "Story 2", grid: "col-span-2 row-span-3 col-start-4 relative" },
//     { src: "/gallery/G-images-3.JPG", alt: "Story 3", grid: "col-span-2 row-span-3 col-start-2 row-start-3 relative" },
//     { src: "/gallery/G-images-2.JPG", alt: "Ambiance", grid: "row-span-3 col-start-1 row-start-3 relative" },

//     { src: "/gallery/G-images-4.JPG", alt: "Story 4", grid: "col-span-2 row-span-2 col-start-4 row-start-4 relative" },
//   ],
// };

// export default function GalleryGrid() {
//   // Use the first section as default to avoid undefined error
//   const sectionKeys = Object.keys(sections);
//   const [activeSection, setActiveSection] = useState(sectionKeys[0]);

//   return (
//     <>
//       {/* Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 animate-fade-in-delay-2 pb-8">
//         {Object.keys(sections).map((section) => (
//           <button
//             key={section}
//             onClick={() => setActiveSection(section)}
//             className={`px-4 py-2 rounded-full border transition-colors backdrop-blur-sm ${activeSection === section
//               ? "bg-red-500/80 text-white border-red-500"
//               : "bg-white/10 border-white/20 hover:bg-white/20"
//               }`}
//           >
//             {section}
//           </button>
//         ))}
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-5 grid-rows-5 gap-4 w-full h-[90vh] md:h-[120vh]">
//         {sections[activeSection].map((img, i) => (
//           <div key={i} className={img.grid}>
//             <Image
//               src={img.src}
//               alt={img.alt}
//               fill
//               className="object-cover rounded-xl drop-shadow-lg shadow-red-500 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }


"use client";

import Image from "next/image";
import { useState } from "react";
import VideoCarousel from "./VideoCarousel";

const sections = {
  "Tedx@2024": [
    { src: "/gallery/G-images-2.jpg", alt: "Event Combo", grid: "col-span-3 row-span-2 relative" },
    { src: "/gallery/G-images-1.JPG", alt: "Event Highlight 1", grid: "col-span-2 row-span-3 col-start-4 relative" },
    { src: "/gallery/G-images-3.JPG", alt: "Event Highlight 2", grid: "col-span-2 row-span-3 col-start-2 row-start-3 relative" },
    { src: "/gallery/TEDimage.JPG", alt: "Ambiance", grid: "row-span-3 col-start-1 row-start-3 relative" },
    { src: "/gallery/G-images-4.JPG", alt: "Event Highlight 3", grid: "col-span-2 row-span-2 col-start-4 row-start-4 relative" },
  ],

  // 👇 Visual Stories is only videos
  "Visual Stories": [
    "/animations/Tedxvjit.mp4",
     "/animations/Tedxvjit.mp4",
      "/animations/Tedxvjit.mp4",
    
  ],
};

export default function GalleryGrid() {
  const sectionKeys = Object.keys(sections);
  const [activeSection, setActiveSection] = useState(sectionKeys[0]);

  return (
    <>
      {/* Section Buttons */}
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 animate-fade-in-delay-2 pb-8">
        {sectionKeys.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 rounded-full border transition-colors backdrop-blur-sm ${
              activeSection === section
                ? "bg-red-500/80 text-white border-red-500"
                : "bg-white/10 border-white/20 hover:bg-white/20"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeSection === "Visual Stories" ? (
        <div className="max-w-7xl h-[90vh] md:h-[100vh] ">
          <VideoCarousel videos={sections["Visual Stories"]} />
        </div>
      ) : (
        <div className="grid grid-cols-5 grid-rows-5 gap-4 w-full h-[90vh] md:h-[120vh]">
          {sections[activeSection].map((img, i) => (
            <div key={i} className={img.grid}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-xl drop-shadow-lg shadow-red-500 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
