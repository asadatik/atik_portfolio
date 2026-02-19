// components/home/cta-section.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react"
import { PremiumButton } from "@/components/premium-button"
import { useState, useEffect } from "react"

// Animated text character component
function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ")

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {words.map((word, wordIdx) => (
        <div key={wordIdx} className="inline-flex overflow-hidden">
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: delay + wordIdx * 0.4,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  )
}

// Floating particles with advanced animation
function FloatingParticles() {
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
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
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, -100, -200],
            x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 blur-md"
            animate={{
              boxShadow: [
                `0 0 ${particle.size * 4}px rgba(6, 249, 241, 0.8)`,
                `0 0 ${particle.size * 6}px rgba(59, 130, 246, 0.6)`,
                `0 0 ${particle.size * 4}px rgba(168, 85, 247, 0.4)`,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              width: particle.size,
              height: particle.size,
            }}
          />
        </motion.div>
      ))}
    </>
  )
}

// Animated background gradient
function AnimatedBackground() {
  return (
    <>
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/15 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-32 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-500/20 to-cyan-500/15 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
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

      {/* Radial gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(6, 249, 241, 0.1), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </>
  )
}

// Interactive stat card
interface StatCardProps {
  number: string
  label: string
  icon: React.ReactNode
  delay: number
}

function StatCard({ number, label, icon, delay }: StatCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.08, y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-cyan-500/20 hover:border-cyan-500/50 cursor-pointer transition-all"
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
        animate={{
          background: isHovered
            ? "radial-gradient(circle at center, rgba(6, 249, 241, 0.15), transparent 70%)"
            : "radial-gradient(circle at center, transparent, transparent)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon */}
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? 360 : 0,
        }}
        transition={{
          scale: { duration: 0.3 },
          rotate: { duration: 0.8 },
        }}
        className="mb-3 p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 w-fit"
      >
        <div className="text-cyan-400">{icon}</div>
      </motion.div>

      {/* Number with counter animation */}
      <motion.div
        className="text-3xl font-bold text-white mb-1"
        animate={{
          color: isHovered ? "#06f9f1" : "#ffffff",
        }}
      >
        {number}
      </motion.div>

      {/* Label */}
      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{label}</p>

      {/* Underline animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}

export function CTASection() {
  const [scrollY, setScrollY] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative py-10  bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
      id="cta"
    >
      {/* Background elements */}
      <AnimatedBackground />
      <FloatingParticles />

      {/* Scroll parallax effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: scrollY * 0.5,
        }}
      >
        <div className="absolute inset-0" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main content */}
        <motion.div
          onViewportEnter={() => setIsInView(true)}
          className="max-w-5xl mx-auto space-y-12 "
        >
          {/* Top accent badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 cursor-default"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </motion.div>
              <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
                Ready to Collaborate?
              </span>
            </motion.span>
          </motion.div>

          {/* Main heading with ramp-up animation */}
          <motion.div className="space-y-6">
            <div className="text-5xl md:text-7xl  font-bold leading-tight text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedText
                  text="Ready to create something"
                  delay={0}
                />
              </motion.div>

              {/* Main gradient text with blur effect */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration:3,
                  delay: 0.9,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="relative inline-block mt-3 md:mt-4"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Extraordinary?
                </span>

                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: "radial-gradient(circle, rgba(6, 249, 241, 0.3), transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
              </motion.div>
            </div>


            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut",
              }}
              className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto text-center font-light leading-relaxed"
            >
              I'm always open to discussing new projects, creative ideas, and opportunities to make an impact.
              Let's turn your vision into reality.
            </motion.p>
          </motion.div>

   
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          />

     
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.9 }}
          >
            <StatCard
              number="2+"
              label="Years of Experience"
              icon={<Zap className="w-5 h-5" />}
              delay={0.9}
            />
            <StatCard
              number="15+"
              label="Projects Completed"
              icon={<Target className="w-5 h-5" />}
              delay={1}
            />
            <StatCard
              number="100%"
              label="Client Satisfaction"
              icon={<Sparkles className="w-5 h-5" />}
              delay={1.1}
            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: "easeOut",
            }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <PremiumButton
                  text="Get In Touch"
                  icon="→"
                  variant="primary"
                  size="large"
          
                />
              </motion.div>
            </Link>

            <Link href="/about" className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <PremiumButton
                  text=" About Me"
                  icon="📚"
                  variant="secondary"
                  size="large"
                 
                />
              </motion.div>
            </Link>
          </motion.div>

 
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center pt-8 border-t border-cyan-500/20"
          >
          
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}