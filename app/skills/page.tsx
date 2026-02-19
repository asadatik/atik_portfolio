"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import {
  Github,
  Zap,
  Layers,
  Database,
  Cloud,
  GitBranch,
  Sparkles,
  Code,
} from "lucide-react"
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiMongodb, 
  SiVercel, 
  SiDocker,
  SiReact
} from "react-icons/si"

interface Skill {
  name: string
  icon: React.ReactNode
  iconColor: string
  level: number
  bgColor: string
  category: "frontend" | "backend" | "tools"
}

const frontendSkills: Skill[] = [
  {
    name: "React",
    icon: <SiReact className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 95,
    bgColor: "from-cyan-500/30 to-blue-500/20",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: <Code className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 93,
    bgColor: "from-cyan-500/30 to-blue-500/20",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 92,
    bgColor: "from-cyan-500/30 to-blue-500/20",
    category: "frontend",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 94,
    bgColor: "from-cyan-500/30 to-blue-500/20",
    category: "frontend",
  },
  {
    name: "Framer",
    icon: <Sparkles className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 90,
    bgColor: "from-cyan-500/30 to-blue-500/20",
    category: "frontend",
  },
  {
    name: "HTML/CSS",
    icon: <Layers className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 96,
    bgColor: "from-cyan-500/30 to-blue-500/20",
    category: "frontend",
  },
]

const backendSkills: Skill[] = [
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 91,
    bgColor: "from-cyan-500/30 to-teal-500/20",
    category: "backend",
  },
  {
    name: "Express",
    icon: <SiExpress className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 89,
    bgColor: "from-cyan-500/30 to-teal-500/20",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 88,
    bgColor: "from-cyan-500/30 to-teal-500/20",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 87,
    bgColor: "from-cyan-500/30 to-teal-500/20",
    category: "backend",
  },
  {
    name: "REST APIs",
    icon: <Zap className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 92,
    bgColor: "from-cyan-500/30 to-teal-500/20",
    category: "backend",
  },
  {
    name: "Prisma",
    icon: <Database className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 85,
    bgColor: "from-cyan-500/30 to-teal-500/20",
    category: "backend",
  },
]

const toolsSkills: Skill[] = [
  {
    name: "Git/GitHub",
    icon: <Github className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 94,
    bgColor: "from-cyan-500/30 to-blue-500/20",
    category: "tools",
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 82,
    bgColor: "from-cyan-500/30 to-blue-500/20",
    category: "tools",
  },
  {
    name: "AWS",
    icon: <Cloud className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 80,
    bgColor: "from-cyan-500/30 to-blue-500/20",
    category: "tools",
  },
  {
    name: "Vercel",
    icon: <SiVercel className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 93,
    bgColor: "from-cyan-500/30 to-blue-500/20",
    category: "tools",
  },
  {
    name: "CI/CD",
    icon: <GitBranch className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 86,
    bgColor: "from-cyan-500/30 to-blue-500/20",
    category: "tools",
  },
  {
    name: "WebSockets",
    icon: <Zap className="w-12 h-12" />,
    iconColor: "#06B6D4",
    level: 84,
    bgColor: "from-cyan-500/30 to-blue-500/20",
    category: "tools",
  },
]

const allSkills = [...frontendSkills, ...backendSkills, ...toolsSkills]

interface MarqueeProps {
  skills: Skill[]
  direction: "left" | "right"
  duration: number
  label: string
  color: string
}

// Marquee component for each skill category

function SkillMarquee({ skills, direction, duration, label, }: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const duplicatedSkills = [...skills, ...skills, ...skills]

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-8 mb-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center gap-4"
      >
        <motion.div
          animate={{ scaleY: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className={`w-1.5 h-12 rounded-full bg-gradient-to-b from-cyan-400 via-cyan-300 to-cyan-500 shadow-lg shadow-cyan-400/50`}
        />
        <h3 className="text-2xl md:text-3xl font-black  text-white bg-clip-text uppercase tracking-widest">
          {label}
        </h3>
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="hidden md:flex gap-2 ml-auto"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
            />
          ))}
        </motion.div>
      </motion.div>

      <div 
        className="relative overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-slate-950/60 via-slate-900/40 to-slate-950/60 backdrop-blur-2xl p-8 shadow-2xl transition-all duration-500 hover:border-cyan-400/60"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0"
          animate={{
            opacity: isHovered ? 0.15 : 0,
            background: isHovered 
              ? "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent)" 
              : "radial-gradient(circle, rgba(6, 182, 212, 0), transparent)"
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Edge glow effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 rounded-3xl border border-cyan-500/30 shadow-inset shadow-cyan-500/20" />
          </motion.div>
        )}

        <motion.div
          className="flex gap-8 relative z-10"
          animate={{
            x: direction === "left" 
              ? [0, -(duplicatedSkills.length * 120)] 
              : [-(duplicatedSkills.length * 120), 0]
          }}
          transition={{
            duration: isHovered ? duration * 2 : duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          }}
        >
          {duplicatedSkills.map((skill, idx) => (
            <motion.div
              key={`${skill.name}-${idx}`}
              className="flex-shrink-0 w-48 flex flex-col items-center justify-center py-6 h-[240px]"
              whileHover={{ 
                scale: 1.08, 
                y: -12,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="relative w-32 h-32 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border-2 border-cyan-400/40 shadow-2xl mb-4 overflow-hidden group hover:border-cyan-300/70 transition-all duration-300"
                whileHover={{
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.6), inset 0 0 20px rgba(6, 182, 212, 0.2)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div 
                  className="p-4 relative z-10 text-cyan-300"
                  animate={{ 
                    rotateY: [0, 360]
                  }}
                  whileHover={{
                    scale: 1.15,
                    textShadow: "0 0 20px rgba(6, 182, 212, 0.8)"
                  }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                >
                  {skill.icon}
                </motion.div>

                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.4), transparent)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="text-center space-y-2 w-full px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div 
                  className="text-sm font-bold text-cyan-100 px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 rounded-lg hover:border-cyan-300/60 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
                  whileHover={{ 
                    backgroundColor: "rgba(6, 182, 212, 0.15)",
                    borderColor: "rgba(6, 182, 212, 0.6)"
                  }}
                >
                  {skill.name}
                </motion.div>
                <motion.div 
                  className="text-xs font-black text-cyan-300 font-mono tracking-widest drop-shadow-lg"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  {skill.level}%
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950/100 to-slate-950/0 pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950/100 to-slate-950/0 pointer-events-none z-20" />
      </div>
    </motion.div>
  )
}


// Floating particle background component
function FloatingParticles() {
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 10,
      delay: Math.random() * 2,
      blur: Math.random() * 4 + 2,
    }))
    setParticles(newParticles)
  }, [])

  if (particles.length === 0) return null

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute pointer-events-none rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            y: [-100, -500],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-400/80 via-cyan-300/50 to-blue-400/30 blur-sm shadow-lg shadow-cyan-400/60" />
        </motion.div>
      ))}
    </>
  )
}

// 
function SkillIconsFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-32 pt-20 border-t border-cyan-500/20"
    >
      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xl font-bold text-cyan-100/80 uppercase tracking-widest mb-14"
      >
        Technology Stack & Expertise
      </motion.h4>
      
      <motion.div
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {allSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30, scale: 0.7 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ 
              y: -12, 
              scale: 1.2,
              transition: { duration: 0.3, type: "spring", stiffness: 400 }
            }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.03,
              type: "spring",
              stiffness: 200
            }}
            className="group flex flex-col items-center gap-3 p-4 cursor-pointer hover:bg-cyan-500/10 rounded-2xl transition-all duration-300 border border-transparent hover:border-cyan-400/40"
          >
            <motion.div
              className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/10 border-2 border-cyan-400/30 group-hover:border-cyan-300/70 backdrop-blur-sm shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300"
              whileHover={{ 
                rotate: [0, 360],
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.7), inset 0 0 15px rgba(6, 182, 212, 0.2)"
              }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                style={{ color: skill.iconColor }} 
                className="text-3xl drop-shadow-lg"
                whileHover={{ scale: 1.2 }}
              >
                {skill.icon}
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                animate={{
                  background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.3), transparent)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.span 
              className="text-xs font-bold text-cyan-100/90 text-center leading-tight tracking-wide drop-shadow-md"
              whileHover={{ color: "#06D4E4" }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}


function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary cyan glow */}
      <motion.div
        className="absolute top-0 right-1/3 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan-500/25 to-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 150, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      
      {/* Secondary teal glow */}
      <motion.div
        className="absolute bottom-1/4 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-teal-500/10 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
          y: [0, -150, 0],
          x: [0, -100, 0],
        }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />

      {/* Accent glow */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-400/15 to-blue-600/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 100, 0],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />
    </div>
  )
}



export default  function SkillsPage() {
  return (
    <section className="relative py-10 md:py-20 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 overflow-hidden" id="skills">
      <AnimatedBackground />
      <FloatingParticles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full border-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-cyan-500/15 mb-12 backdrop-blur-xl shadow-2xl hover:border-cyan-300/70 transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="drop-shadow-lg"
            >
              <Sparkles className="w-7 h-7 text-cyan-300 stroke-2" />
            </motion.div>
            <span className="text-base md:text-lg font-black text-cyan-300 uppercase tracking-widest">
              Professional Expertise
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tight"
          >
            Skills &{" "}
            <motion.span 
              className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Expertise
            </motion.span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-2xl text-cyan-100/70 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Mastered cutting-edge technologies and modern development practices, crafting world-class digital experiences with precision and innovation
          </motion.p>
        </motion.div>

        <div className="space-y-32">
          <SkillMarquee
            skills={frontendSkills}
            direction="left"
            duration={40}
            label="Frontend Arsenal"
            color="from-cyan-400 to-blue-500"
          />
          <SkillMarquee
            skills={backendSkills}
            direction="right"
            duration={45}
            label="Backend Mastery"
            color="from-cyan-400 to-teal-500"
          />
          <SkillMarquee
            skills={toolsSkills}
            direction="left"
            duration={42}
            label="Tools & Infrastructure"
            color="from-blue-400 to-cyan-500"
          />
        </div>

        {/* Skill Icons Footer */}
        <SkillIconsFooter />
      </div>
    </section>
  )
}



