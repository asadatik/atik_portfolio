// app/not-found.tsx (or app/404/page.tsx)
"use client"

import { motion , type Variants  } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Code2, Zap, Github, LayoutDashboard } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
    
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-md w-full text-center relative z-10"
      >
        {/* Animated 404 */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl"
            >
              404
            </motion.div>
            <Zap className="w-12 h-12 text-cyan-400 animate-pulse" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text">
            Page Not Found
          </h1>
          
          <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-sm mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 mb-12"
        >
          <Link href="/" className="group">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 rounded-2xl font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-all duration-300 shadow-xl hover:shadow-[var(--accent)]/10"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-all" />
              Back to Home
            </motion.button>
          </Link>

         
        </motion.div>

        {/* Bottom CTA */}
        <motion.p
          variants={itemVariants}
          className="text-slate-500 text-sm"
        >
          Made with ❤️ by Asadujjaman Atik |{" "}
          <Link href="https://github.com/asadatik" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <Github className="w-4 h-4 inline ml-1" />
          </Link>
        </motion.p>
      </motion.div>
    </div>
  )
}
