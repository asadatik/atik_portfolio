// components/logo-advanced.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code2, Sparkles, Terminal } from "lucide-react"

interface LogoAdvancedProps {
  variant?: "code" | "box" | "neon" | "split" | "icon-text" | "terminal" | "bracket"
  size?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
  href?: string
  className?: string
  showIcon?: boolean
}

const sizeConfig = {
  sm: { text: "text-lg", icon: 16, padding: "p-1.5" },
  md: { text: "text-2xl", icon: 20, padding: "p-2" },
  lg: { text: "text-3xl", icon: 24, padding: "p-2.5" },
  xl: { text: "text-4xl", icon: 28, padding: "p-3" },
}

export function LogoAdvanced({ 
  variant = "code",
  size = "md", 
  animated = true,
  href = "/",
  className = "",
  showIcon = false,
}: LogoAdvancedProps) {
  
  const config = sizeConfig[size]

  const renderVariant = () => {
    switch (variant) {
      case "code":
        return (
          <div className={`font-mono font-bold ${config.text} ${className}`}>
            <span className="text-cyan-400">&lt;</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Atik
            </span>
            <span className="text-cyan-400"> /&gt;</span>
          </div>
        )

      case "box":
        return (
          <div className={`relative ${className}`}>
            <motion.div 
              className={`${config.padding} border-2 border-cyan-500/30 rounded-lg bg-cyan-500/5 backdrop-blur-sm`}
              whileHover={{ borderColor: "rgba(6, 182, 212, 0.6)" }}
            >
              <span className={`font-bold ${config.text} bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}>
                &lt;A /&gt;
              </span>
            </motion.div>
            
            {animated && (
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-20 blur-md -z-10"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>
        )

      case "neon":
        return (
          <div className={`relative ${className}`}>
            <span className={`font-bold ${config.text} relative`}>
              <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                &lt;
              </span>
              <span className="text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,1)]">
                Atik
              </span>
              <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                {" "}/&gt;
              </span>
            </span>
            
            {animated && (
              <>
                <motion.span
                  className="absolute inset-0 text-cyan-400 blur-sm opacity-70"
                  animate={{
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  &lt;Atik /&gt;
                </motion.span>
                
                <motion.div
                  className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-2xl -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </>
            )}
          </div>
        )

      case "split":
        return (
          <div className={`flex items-center gap-1 ${config.text} ${className}`}>
            <motion.span 
              className="font-bold text-cyan-400"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              &lt;
            </motion.span>
            
            <motion.span
              className="font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Atik
            </motion.span>
            
            <motion.span 
              className="font-bold text-cyan-400"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              /&gt;
            </motion.span>
          </div>
        )

      case "icon-text":
        return (
          <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
            <motion.div
              className={`${config.padding} rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30`}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 className="text-white" size={config.icon} />
            </motion.div>
            
            <div className="flex flex-col">
              <span className={`font-bold ${config.text} text-foreground leading-none`}>
                Atik
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                Full-Stack Dev
              </span>
            </div>
          </div>
        )

      case "terminal":
        return (
          <div className={`font-mono ${className}`}>
            <div className="flex items-center gap-2">
              <Terminal className="text-cyan-400" size={config.icon} />
              <div className={`${config.text}`}>
                <span className="text-emerald-400">~</span>
                <span className="text-slate-400">/</span>
                <span className="text-cyan-400 font-bold">atik</span>
                <motion.span
                  className="inline-block w-2 h-5 ml-1 bg-cyan-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </div>
        )

      case "bracket":
        return (
          <div className={`relative ${config.text} font-bold ${className}`}>
            <div className="flex items-center">
              {/* Left bracket */}
              <motion.span
                className="text-cyan-500"
                animate={animated ? {
                  rotateY: [0, 180, 0],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {"{"}
              </motion.span>

              {/* Main text */}
              <span className="mx-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-black">
                ATIK
              </span>

              {/* Right bracket */}
              <motion.span
                className="text-purple-500"
                animate={animated ? {
                  rotateY: [0, -180, 0],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {"}"}
              </motion.span>
            </div>

            {/* Glow effect */}
            {animated && (
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl -z-10 rounded-lg"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>
        )

      default:
        return null
    }
  }

  const content = renderVariant()

  if (!href) {
    return animated && variant !== "split" ? (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {content}
      </motion.div>
    ) : content
  }

  return (
    <Link href={href}>
      {animated && variant !== "split" ? (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="cursor-pointer inline-block"
        >
          {content}
        </motion.div>
      ) : (
        <div className="cursor-pointer inline-block hover:opacity-90 transition-opacity">
          {content}
        </div>
      )}
    </Link>
  )
}