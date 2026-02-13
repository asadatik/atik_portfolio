// components/animated-text.tsx
"use client"

import { motion  ,  type Variants } from "framer-motion"

interface AnimatedTextProps {
  text: string
  delay?: number
  className?: string
}

export function AnimatedText({ text, delay = 0, className = "" }: AnimatedTextProps) {
  const words = text.split(" ")

  const container : Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.08, 
        delayChildren: delay 
      },
    }),
  }

  const child : Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <motion.div
      className={`flex flex-wrap justify-center md:justify-start ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={child}
          className="mr-2 md:mr-3"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}