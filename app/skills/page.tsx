
"use client"

import { motion, useMotionValue, useTransform, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import {

  Github,
  Code,
  Zap,
  Layers,
  Database,
  Cloud,
  GitBranch,
  Cpu,
} from "lucide-react"
import { SiReact } from "@icons-pack/react-simple-icons"
import Link from "next/link"

// ============================================
// SKILL ICONS & DATA STRUCTURE
// ============================================

interface Skill {
  name: string
  icon: React.ReactNode
  level: number // 0-100
  color: string
  category: "frontend" | "backend" | "tools"
}

const frontendSkills: Skill[] = [
  {
    name: "React",
    icon: <SiReact className="w-8 h-8" />,
    level: 95,
    color: "from-cyan-400 to-blue-500",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: <Code className="w-8 h-8" />,
    level: 93,
    color: "from-cyan-400 to-blue-500",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <Zap className="w-8 h-8" />,
    level: 92,
    color: "from-cyan-400 to-blue-500",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <Layers className="w-8 h-8" />,
    level: 94,
    color: "from-cyan-400 to-blue-500",
    category: "frontend",
  },
  {
    name: "Framer Motion",
    icon: <motion.div className="w-8 h-8">✨</motion.div>,
    level: 90,
    color: "from-cyan-400 to-blue-500",
    category: "frontend",
  },
  {
    name: "HTML/CSS",
    icon: <Code className="w-8 h-8" />,
    level: 96,
    color: "from-cyan-400 to-blue-500",
    category: "frontend",
  },
]

const backendSkills: Skill[] = [
  {
    name: "Node.js",
    icon: <Cpu className="w-8 h-8" />,
    level: 91,
    color: "from-purple-400 to-pink-500",
    category: "backend",
  },
  {
    name: "Express.js",
    icon: <Code className="w-8 h-8" />,
    level: 89,
    color: "from-purple-400 to-pink-500",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    icon: <Database className="w-8 h-8" />,
    level: 88,
    color: "from-purple-400 to-pink-500",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: <Database className="w-8 h-8" />,
    level: 87,
    color: "from-purple-400 to-pink-500",
    category: "backend",
  },
  {
    name: "REST APIs",
    icon: <Zap className="w-8 h-8" />,
    level: 92,
    color: "from-purple-400 to-pink-500",
    category: "backend",
  },
  {
    name: "Prisma ORM",
    icon: <Layers className="w-8 h-8" />,
    level: 85,
    color: "from-purple-400 to-pink-500",
    category: "backend",
  },
]

const toolsSkills: Skill[] = [
  {
    name: "Git/GitHub",
    icon: <Github className="w-8 h-8" />,
    level: 94,
    color: "from-blue-400 to-cyan-500",
    category: "tools",
  },
  {
    name: "Docker",
    icon: <Cpu className="w-8 h-8" />,
    level: 82,
    color: "from-blue-400 to-cyan-500",
    category: "tools",
  },
  {
    name: "AWS",
    icon: <Cloud className="w-8 h-8" />,
    level: 80,
    color: "from-blue-400 to-cyan-500",
    category: "tools",
  },
  {
    name: "Vercel",
    icon: <Cloud className="w-8 h-8" />,
    level: 93,
    color: "from-blue-400 to-cyan-500",
    category: "tools",
  },
  {
    name: "CI/CD",
    icon: <GitBranch className="w-8 h-8" />,
    level: 86,
    color: "from-blue-400 to-cyan-500",
    category: "tools",
  },
  {
    name: "WebSockets",
    icon: <Zap className="w-8 h-8" />,
    level: 84,
    color: "from-blue-400 to-cyan-500",
    category: "tools",
  },
]

// ============================================
// ANIMATED MARQUEE COMPONENT (3D MAGNETIC)
// ============================================

interface MarqueeProps {
  skills: Skill[]
  direction: "left" | "right"
  duration: number
  label: string
  color: string
}

function SkillMarquee({ skills, direction, duration, label, color }: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Mouse tracking for magnetic effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePos({ x, y })
    mouseX.set(x)
    mouseY.set(y)
  }

  const duplicatedSkills = [...skills, ...skills, ...skills]
  const x = useMotionValue(0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-4 mb-12"
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${color}`} />
        <h3 className="text-xl font-bold text-white uppercase tracking-widest">{label}</h3>
      </motion.div>

      {/* Marquee container */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-slate-900/50 via-slate-800/50 to-slate-900/50 backdrop-blur-xl p-4"
      >
        {/* Glow background */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
          animate={{
            background: isHovered
              ? "radial-gradient(circle at 50% 50%, rgba(6, 249, 241, 0.1), transparent 70%)"
              : "transparent",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated marquee */}
        <motion.div
          className="flex gap-6 relative z-10"
          animate={{
            x: direction === "left" ? [-1000, 0] : [0, -1000],
          }}
          transition={{
            duration: isHovered ? duration * 1.5 : duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {duplicatedSkills.map((skill, idx) => (
            <motion.div
              key={`${skill.name}-${idx}`}
              whileHover={{
                scale: 1.3,
                rotateY: 360,
                z: 100,
              }}
              transition={{
                duration: 0.6,
              }}
              className="flex-shrink-0 relative group/icon"
            >
              {/* Skill icon container */}
              <motion.div
                className={`w-20 h-20 rounded-xl flex items-center justify-center bg-gradient-to-br ${skill.color} border border-white/10 text-white cursor-pointer relative`}
                animate={{
                  y: isHovered ? -5 : 0,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover/icon:opacity-100"
                  animate={{
                    boxShadow: isHovered
                      ? `0 0 30px ${skill.color === "from-cyan-400 to-blue-500" ? "rgba(6, 249, 241, 0.6)" : skill.color === "from-purple-400 to-pink-500" ? "rgba(168, 85, 247, 0.6)" : "rgba(59, 130, 246, 0.6)"}`
                      : "0 0 0px transparent",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <motion.div
                  className="relative z-10 text-2xl"
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                    rotate: isHovered ? 360 : 0,
                  }}
                  transition={{
                    scale: { duration: 0.3 },
                    rotate: { duration: 0.8 },
                  }}
                >
                  {skill.icon}
                </motion.div>

                {/* Particle burst on hover */}
                {isHovered && (
                  <>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-cyan-400"
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                        }}
                        animate={{
                          x: Math.cos((i / 6) * Math.PI * 2) * 40,
                          y: Math.sin((i / 6) * Math.PI * 2) * 40,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-50"
              >
                <div className="px-3 py-1.5 rounded-lg bg-slate-900/95 border border-cyan-500/50 text-xs font-semibold text-cyan-300 backdrop-blur-xl">
                  {skill.name}
                  <span className="text-gray-400 ml-2">{skill.level}%</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" />
      </motion.div>
    </motion.div>
  )
}

// ============================================
// SKILL CARD COMPONENT (3D GLASS)
// ============================================

interface SkillCardProps {
  skill: Skill
  index: number
}

function SkillCard({ skill, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setRotateX(-(y / rect.height) * 15)
    setRotateY((x / rect.width) * 15)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      {/* 3D Background blur */}
      <motion.div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl -z-10"
        animate={{
          opacity: isHovered ? [0.6, 0.9, 0.6] : [0.3, 0.5, 0.3],
          scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Card border with rotation */}
      <motion.div
        className="absolute inset-0 rounded-2xl p-px pointer-events-none"
        animate={{
          opacity: isHovered ? [0.8, 1, 0.8] : [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            background: `conic-gradient(from 0deg, rgba(6, 249, 241, 0.6), rgba(59, 130, 246, 0.6), rgba(168, 85, 247, 0.4), rgba(6, 249, 241, 0.6))`,
          }}
        />
      </motion.div>

      {/* Inner card */}
      <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-800/90 backdrop-blur-xl border border-white/5" />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        {/* Icon & Name */}
        <div className="space-y-4">
          <motion.div
            className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white`}
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 360 : 0,
            }}
            transition={{
              scale: { duration: 0.3 },
              rotate: { duration: 0.8 },
            }}
          >
            <div className="text-2xl">{skill.icon}</div>
          </motion.div>

          <h3 className="text-lg font-bold text-white">{skill.name}</h3>
        </div>

        {/* Skill Level Progress Ring */}
        <motion.div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Proficiency</span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: index * 0.1 + 0.4,
              }}
              className="text-sm font-bold text-cyan-400"
            >
              {skill.level}%
            </motion.span>
          </div>

          {/* Progress bar */}
          <motion.div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${skill.color}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: index * 0.1 + 0.2,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Circular progress ring */}
        <motion.svg
          className="w-16 h-16 mx-auto mt-4"
          viewBox="0 0 60 60"
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {/* Background circle */}
          <circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="rgba(100, 116, 139, 0.3)"
            strokeWidth="2"
          />

          {/* Progress circle */}
          <motion.circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 25}`}
            strokeDashoffset={`${2 * Math.PI * 25 * (1 - skill.level / 100)}`}
            stroke="url(#progress-gradient)"
            strokeLinecap="round"
            initial={{ strokeDashoffset: 2 * Math.PI * 25 }}
            whileInView={{
              strokeDashoffset: 2 * Math.PI * 25 * (1 - skill.level / 100),
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: index * 0.1 + 0.3,
              ease: "easeOut",
            }}
          />

          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06f9f1" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </motion.div>
  )
}

// ============================================
// FLOATING PARTICLES BACKGROUND
// ============================================

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 6,
    delay: Math.random() * 2,
  }))

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -150, -300],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-sm" />
        </motion.div>
      ))}
    </>
  )
}

// ============================================
// MAIN SKILLS SHOWCASE COMPONENT
// ============================================

export function SkillsShowcase() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden" id="skills">
      {/* Background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/15 to-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-500/15 to-cyan-500/10 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(6, 249, 241, 0.05) 25%, rgba(6, 249, 241, 0.05) 26%, transparent 27%, transparent 74%, rgba(6, 249, 241, 0.05) 75%, rgba(6, 249, 241, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(6, 249, 241, 0.05) 25%, rgba(6, 249, 241, 0.05) 26%, transparent 27%, transparent 74%, rgba(6, 249, 241, 0.05) 75%, rgba(6, 249, 241, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <FloatingParticles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6 cursor-default"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Zap className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
              Tech Stack
            </span>
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Mastered technologies and tools that power modern web development
          </p>
        </motion.div>

        {/* Marquees */}
        <div className="space-y-8 mb-20">
          <SkillMarquee
            skills={frontendSkills}
            direction="left"
            duration={35}
            label="Frontend Arsenal"
            color="from-cyan-400 to-blue-500"
          />

          <SkillMarquee
            skills={backendSkills}
            direction="right"
            duration={40}
            label="Backend Mastery"
            color="from-purple-400 to-pink-500"
          />

          <SkillMarquee
            skills={toolsSkills}
            direction="left"
            duration={30}
            label="Tools & Infrastructure"
            color="from-blue-400 to-cyan-500"
          />
        </div>

        {/* Skills Grid Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[...frontendSkills, ...backendSkills, ...toolsSkills].map((skill, idx) => (
            <SkillCard key={`${skill.name}-${idx}`} skill={skill} index={idx} />
          ))}
        </motion.div>

      
      </div>
    </section>
  )
}


export default function SkillsPage() {
  return <SkillsShowcase />
}
