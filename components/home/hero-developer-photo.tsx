// components/hero-developer-photo.tsx
"use client"



import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
 
  SiReact,
  SiNodedotjs,
  SiMongodb,
} from "@icons-pack/react-simple-icons"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

interface SkillIcon {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  description: string
}


const skills: SkillIcon[] = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "from-cyan-400/40 to-blue-500/0",
    description: "App Router, SSR, API routes",
  },
  {
    name: "React",
    icon: SiReact,
    color: "from-sky-400/40 to-cyan-500/0",
    description: "Interactive UIs & SPA",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "from-blue-500/40 to-indigo-500/0",
    description: "Type‑safe full‑stack code",
  },
  {
    name: "Node.js & Express",
    icon: SiNodedotjs,
    color: "from-emerald-400/40 to-green-500/40",
    description: "APIs, backend services",
  },

  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "from-sky-500/50 to-blue-600/0",
    description: "Relational database",
  },

    {
    name: "MongoDB",
    icon: SiMongodb,
    color: "from-emerald-400/40 to-emerald-500/0",
    description: "Document database",
  },
]


export function HeroDeveloperPhoto() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15
      const y = (e.clientY / window.innerHeight - 0.5) * 15
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  
  // Calculate orbital positions for skill icons
  const getSkillPosition = (index: number) => {
    const angle = (index / skills.length) * Math.PI * 2

    const radius = 220
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),

    }
  }

  return (
    <div className="relative   w-full h-full flex items-center justify-center">

      {/* Top-left morphing circle */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-linear-to-br from-cyan-500/10 to-blue-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 0.95, 1],
          x: [0, 20, -10, 0],
          y: [0, -30, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Bottom-right morphing circle */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-purple-500/10 to-cyan-500/5 blur-3xl"
        animate={{
          scale: [1, 0.95, 1.1, 1],
          x: [0, -30, 20, 0],
          y: [0, 30, -15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />



      <motion.div
        className="relative w-80 h-96 md:w-96  md:h-[480px]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        }}
      >
        {/* Glow border */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-xl -z-10"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Inner glow */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-cyan-400/30 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-xl overflow-hidden"
          animate={{
            borderColor: [
              "rgba(6, 249, 241, 0.3)",
              "rgba(59, 130, 246, 0.3)",
              "rgba(168, 85, 247, 0.3)",
              "rgba(6, 249, 241, 0.3)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >


          {/* Photo */}
          <div className="relative   w-full h-full overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20" />

            <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/Atik.pic.png"      // can be atik-avatar.png if square
                  alt="Atik - Full-stack Developer"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  priority
                />
              </div>
            </div>

            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
              animate={{ x: ["100%", "-100%"] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>

        </motion.div>

        {/* Skill Icons Container */}


        {skills.map((skill, index) => {
          const position = getSkillPosition(index)
              const Icon = skill.icon    
          return (
            <motion.div
              key={skill.name}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                x: position.x,
                y: position.y,
                rotate: [0, 360],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
              }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              {/* Skill Icon Button */}
              <motion.div
                className={`relative w-14 h-14 rounded-full border-2 border-cyan-400/30 bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl cursor-pointer overflow-hidden group`}
                whileHover={{
                  scale: 1.15,
                  boxShadow: `0 0 30px rgba(6, 249, 241, 0.5)`,
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: hoveredSkill === skill.name ? [-5, 5, -5] : [0, 0],
                }}
              >
                {/* Background glow */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                  }}
                  animate={{
                    opacity: hoveredSkill === skill.name ? 0.8 : 0.3,
                  }}
                />

                {/* Icon */}
                <motion.span
                  className="relative z-10 text-2xl"
                  animate={{
                    scale: hoveredSkill === skill.name ? 1.2 : 1,
                  }}
                >
                <Icon className="w-10 h-8" />
                </motion.span>

                {/* Pulse effect on hover */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-cyan-400"
                    animate={{
                      scale: [1, 1.3, 1.6],
                      opacity: [0.8, 0.4, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                )}
              </motion.div>

              {/* Tooltip */}
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap"
                >
                  <div className="px-3 py-2 bg-slate-900/95 border border-cyan-400/30 rounded-lg text-xs text-white backdrop-blur">
                    <div className="font-semibold text-cyan-400">
                      {skill.name}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {skill.description}
                    </div>

                    {/* Tooltip arrow */}
                    <motion.div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900/95 border-b border-r border-cyan-400/30 transform -rotate-45" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          )
        })}

        {/* ============================================
            CENTRAL GLOW ORBS
            ============================================ */}

        {/* Pulsing center orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Larger background glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-3xl -z-20"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  )
}