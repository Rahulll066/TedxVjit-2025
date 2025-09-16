
"use client";
import GalleryGrid from "../../components/GalleryGrid";

// export default function GalleryPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
//       {/* Hero Section */}
//   <section className="relative min-h-screen flex flex-col justify-center py-20 px-4 overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10" />
//         <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

//         <div className="relative max-w-7xl mx-auto text-center">
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
//             Event
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
//               Gallery
//             </span>
//           </h1>

          // <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-delay-1">
          //   Relive the inspiring moments, powerful speeches, and unforgettable
          //   experiences from our TEDx events through this curated collection of
          //   memories.
          // </p>

         
//         </div>
//       </section>

      // {/* Gallery Section */}
      // <section className="py-16 px-4">
      //   <div className="max-w-7xl mx-auto">
      //     <GalleryGrid />
      //   </div>
      // </section>
//     </div>
//   );
// }




import { useState } from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const speed = 20; // animation speed

  // Reusable rotating circle
  const RotatingCircle = ({
    radius,
    duration,
    reverse,
    children,
  }: {
    radius: number;
    duration: number;
    reverse?: boolean;
    children?: React.ReactNode;
  }) => {
    return (
      <motion.div
        className="absolute border-6 s rounded-md border-white flex items-center justify-center"
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via black to-red-950 overflow-hidden">
      {/* Outer rotating circles */}
      <RotatingCircle radius={660} duration={speed} reverse={false}>
        {/* Shapes inside circle */}
        <div className="w-4 h-4  rounded-full absolute top-0"></div>
        <div className="w-4 h-4  rounded-full absolute right-0"></div>
        <div className="w-4 h-4  rounded-full absolute bottom-0"></div>
        <div className="w-4 h-4  rounded-full absolute left-0"></div>
      </RotatingCircle>

      <RotatingCircle radius={490} duration={speed * 1} reverse={true}>
        <div className="w-3 h-3 rounded-full absolute top-0"></div>
        <div className="w-3 h-3 rounded-full absolute right-0"></div>
        <div className="w-3 h-3 rounded-full absolute bottom-0"></div>
        <div className="w-3 h-3 rounded-full absolute left-0"></div>
      </RotatingCircle>

      <RotatingCircle radius={290} duration={speed * 1} reverse={false}>
        <div className="w-4 h-4 rounded-full absolute top-0"></div>
        <div className="w-4 h-4 rounded-full absolute right-0"></div>
        <div className="w-4 h-4 rounded-full absolute bottom-0"></div>
        <div className="w-4 h-4 rounded-full absolute left-0"></div>
      </RotatingCircle>
      <RotatingCircle radius={170} duration={speed * 1} reverse={true}>
        <div className="w-6 h-6  rounded-full absolute top-0"></div>
        <div className="w-6 h-6  rounded-full absolute right-0"></div>
        <div className="w-6 h-6  rounded-full absolute bottom-0"></div>
        <div className="w-6 h-6  rounded-full absolute left-0"></div>
      </RotatingCircle>

      {/* Center Title */}
      <div className="absolute text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide">
          Gallery
        </h1>
         <p className="text-xl md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-delay-1">
            Relive the inspiring moments, powerful speeches, and unforgettable
            experiences from our TEDx events through this curated collection of
            memories.
          </p>
      </div>

      {/* Speed Control Slider */}
    </section>
      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid autoplay/>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
