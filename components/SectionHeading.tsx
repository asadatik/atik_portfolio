"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  highlight?: string
  align?: "left" | "center"
  size?: "lg" | "xl"
}

export function SectionHeading({
  title,
  highlight,
  align = "center",
  size = "xl",
}: SectionHeadingProps) {
  const sizeClasses =
    size === "lg"
      ? "text-4xl md:text-5xl lg:text-6xl"
      : "text-4xl md:text-7xl "

  const alignment =
    align === "left" ? "text-left" : "text-center"

  return (
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className={`${sizeClasses} ${alignment} font-black text-white mb-10 leading-[0.9] tracking-tight`}
    >
      {highlight ? (
        <>
          {title}{" "}
          <motion.span
            className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            {highlight}
          </motion.span>
        </>
      ) : (
        title
      )}
    </motion.h2>
  )
}
