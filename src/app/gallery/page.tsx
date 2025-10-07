"use client";
import GalleryGrid from "../../components/GalleryGrid";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-red-950 overflow-hidden">
        
        <motion.div
          className="absolute text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 tracking-wide mb-4">
            Gallery
          </h1>

          <p className="text-xl md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Relive the inspiring moments, powerful speeches, and unforgettable
            experiences from our TEDˣ events through this curated collection of
            memories.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
