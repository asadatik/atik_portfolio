"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Hero3DVisual() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Floating Card 1 */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 5, 0],
          x: mousePosition.x * 0.5,
        }}
        transition={{
          y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotateY: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          x: { duration: 0.3, ease: "easeOut" },
        }}
        className="absolute top-20 right-20 w-64 h-40 bg-gradient-to-br from-(--accent-muted) to-transparent border border-(--accent)/20 rounded-xl backdrop-blur-sm p-6 shadow-xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="text-sm font-mono text-(--accent) mb-2">const skills = {`{`}</div>
        <div className="text-xs text-(--text-muted) ml-4">frontend: ["React", "Next.js"],</div>
        <div className="text-xs text-(--text-muted) ml-4">backend: ["Node.js", "Express"]</div>
        <div className="text-sm font-mono text-(--accent) mt-2">{`}`}</div>
      </motion.div>

      {/* Floating Card 2 */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotateY: [0, -5, 0],
          x: mousePosition.x * -0.3,
        }}
        transition={{
          y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 },
          rotateY: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 },
          x: { duration: 0.3, ease: "easeOut" },
        }}
        className="absolute bottom-32 left-20 w-56 h-32 bg-gradient-to-br from-(--bg-surface) to-(--bg-app) border border-(--border-subtle) rounded-xl p-6 shadow-xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-(--accent) animate-pulse" />
          <span className="text-sm text-(--text-muted)">Deploy successful</span>
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-(--border-subtle) rounded w-full" />
          <div className="h-2 bg-(--border-subtle) rounded w-3/4" />
        </div>
      </motion.div>

      {/* Central Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-(--accent)/20 blur-3xl"
      />

      {/* Gradient Orb */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative w-96 h-96 rounded-full bg-gradient-to-br from-(--accent) via-(--accent-soft) to-(--bg-surface) opacity-20 blur-2xl"
      />
    </div>
  )
}
