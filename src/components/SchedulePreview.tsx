"use client";

import { motion } from "framer-motion";

export default function SchedulePreview() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[40vh] bg-gradient-to-br from-red-700 via-red-900 to-black"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
        Event Schedule
      </h2>
      <p className="text-xl text-red-500 font-semibold">To be Announced..</p>
    </motion.div>
  );
}
