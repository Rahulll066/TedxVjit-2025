// MapSection.tsx
"use client";
import { motion } from "framer-motion";

function MapSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-24 px-6"
      style={{
        background:
          "radial-gradient(circle at 50% 40%, #421e1eff 0%, #ff1b3c 100%)",
      }}
    >
      {/* Tagline */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center drop-shadow-lg tracking-tight">
        Venue Location
      </h2>

      {/* Map container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-red-600"
      >
        <iframe
          src="https://www.google.com/maps?q=Vidya+Jyothi+Institute+of+Technology&hl=en&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vidya Jyothi Institute of Technology Location"
        ></iframe>
      </motion.div>

      {/* Button */}
      <motion.a
        href="https://www.google.com/maps?ll=17.345586,78.323599&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=7842846765913408154"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-10 px-6 py-3 rounded-xl font-semibold bg-white text-red-600 shadow-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
      >
        Open in Google Maps
      </motion.a>
    </section>
  );
}

export default MapSection;
