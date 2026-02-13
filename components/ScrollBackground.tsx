"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function ScrollBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <motion.div 
      ref={ref}
      className="fixed inset-0 z-[-1] bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-indigo-900/20 backdrop-blur-sm"
      style={{ opacity }}
    />
  )
}
