"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function ResumeButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Asadujjaman-Atik-Resume.pdf";
    link.click();
  };

  return (
    <motion.button
      onClick={handleDownload}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative  px-2 py-1 rounded-xl font-medium text-base md:text-lg text-white overflow-hidden"
    >
      {/* Glow background */}
      <motion.div
        className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* Button background */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-blue-500/10 border-1 border-cyan-400/50 group-hover:border-cyan-300/70 transition-all duration-300" />

      {/* Content */}
      <motion.div
        className="relative flex items-center justify-center gap-2"
        whileHover={{ gap: 3 }}
      >
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Download className="w-5 h-5  drop-shadow-lg" />
        </motion.div>
        <span className="drop-shadow-lg">Resume</span>
      </motion.div>


      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}
