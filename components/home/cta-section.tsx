// components/home/cta-section.tsx
"use client"

import { motion , type Variants } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Sparkles, ArrowRight, Mail } from "lucide-react"
import { PremiumButton } from "@/components/premium-button"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function CTASection() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [scrollY, setScrollY] = useState(0)

  // Generate floating particles
  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  // ✅ FIXED: Optimized scroll handler
  const updateScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      ticking = false
    }
  }, [updateScroll])

  // Rest of variants unchanged...
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants  = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: (custom: number) => ({
      y: [0, -20, 0],
      x: [0, 15, 0],
      rotate: [0, 360],
      opacity: [0.3, 0.8, 0.3],
    }),
    transition: (custom: number) => ({
      duration: 5 + custom * 0.5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut" as const,
      delay: custom * 0.3,
    }),
  }

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden" id="cta">
      {/* Particles + Backgrounds unchanged... */}
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
          custom={particle.id}
          variants={floatingVariants}
          animate="animate"
          transition={floatingVariants.transition(particle.id)}
        >
          <motion.div
            className="rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 blur-sm"
            animate={{
              boxShadow: [
                `0 0 ${particle.size * 3}px rgba(6, 249, 241, 0.6)`,
                `0 0 ${particle.size * 5}px rgba(6, 249, 241, 0.4)`,
                `0 0 ${particle.size * 3}px rgba(6, 249, 241, 0.6)`,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut" as const
            }}
          />
        </motion.div>
      ))}

      {/* Glows unchanged... */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/15 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ y: scrollY * 0.3 }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-500/20 to-cyan-500/15 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{ y: scrollY * 0.2 }}
      />

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Rotating border + glows unchanged... */}
            <motion.div
              className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/25 to-purple-500/30 blur-2xl -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute inset-0 rounded-3xl p-px pointer-events-none"
              animate={{
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl blur-xl pointer-events-none"
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 24,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(6, 249, 241, 0.8), rgba(59, 130, 246, 0.8), rgba(168, 85, 247, 0.6), rgba(6, 249, 241, 0.8))",
                  opacity: 0.4,
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 24,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(6, 249, 241, 0.8), rgba(59, 130, 246, 0.8), rgba(168, 85, 247, 0.6), rgba(6, 249, 241, 0.8))",
                  borderRadius: "24px",
                }}
              />
            </motion.div>

            <div className="absolute inset-px rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90 backdrop-blur-2xl pointer-events-none border border-white/5" />

            <div className="relative z-10 px-8 md:px-16 py-16 md:py-20">
              <motion.div variants={containerVariants} className="space-y-8 md:space-y-10">
                {/* Header unchanged... */}
                <motion.div variants={itemVariants} className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40"
                  >
                    <Sparkles className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                  <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
                    Let's Connect
                  </span>
                </motion.div>

                {/* Heading unchanged... */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                    <span className="text-white">Let's Build</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Something Great
                    </span>
                    <br />
                    <span className="text-white">Together</span>
                  </h2>
                </motion.div>

                {/* Description unchanged... */}
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-light"
                >
                  I'm always interested in hearing about new projects and opportunities. Whether you need a
                  full-stack developer or want to collaborate on something exciting, let's connect and create
                  something amazing together.
                </motion.p>

                <motion.div variants={itemVariants} className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

                {/* ✅ FIXED: Better button layout */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col lg:flex-row gap-6 lg:gap-8 pt-6"
                >
                  <Link href="/contact" className="flex-1">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <PremiumButton
                        text="Get In Touch"
                        icon="→"
                        variant="primary"
                        size="large"
                        className="w-full"
                      />
                    </motion.div>
                  </Link>

                  <Link href="/about" className="flex-1">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <PremiumButton
                        text="Learn More About Me"
                        icon="📚"
                        variant="secondary"
                        size="large"
                        className="w-full"
                      />
                    </motion.div>
                  </Link>
                </motion.div>

                {/* ✅ FIXED: Complete email link */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-6 md:gap-8 pt-6 border-t border-cyan-500/20"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, x: 4 }}
                    className="flex items-center gap-3 group cursor-pointer flex-1"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="p-2 rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 border border-cyan-500/40 group-hover:border-cyan-500/60 transition-all flex-shrink-0"
                    >
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Email me at</p>
                      <a
                        href="mailto:hello@yourdomain.com"
                        className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors break-all"
                      >
                        hello@yourdomain.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, x: 4 }}
                    className="flex items-center gap-3 group cursor-pointer flex-1"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 0.3,
                      }}
                      className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 border border-purple-500/40 group-hover:border-purple-500/60 transition-all flex-shrink-0"
                    >
                      <ArrowRight className="w-5 h-5 text-purple-400" />
                    </motion.div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Or jump to</p>
                      <Link
                        href="/contact"
                        className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        contact page
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
