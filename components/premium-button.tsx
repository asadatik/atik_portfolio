// components/premium-button.tsx
"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success"
  size?: "small" | "medium" | "large"
  loading?: boolean
  asChild?: boolean
  text?: string
  icon?: string
  children?: React.ReactNode
}

const sizeStyles = {
  small: "w-[140px] h-[47px]",
  medium: "w-[180px] h-[57px]",
  large: "w-[220px] h-[65px]",
}

const labelSizes = {
  small: "w-[130px] h-[40px] text-sm",
  medium: "w-[170px] h-[50px] text-base",
  large: "w-[210px] h-[60px] text-lg",
}

const variantGradients = {
 primary: {
    gradient: "conic-gradient(from 0deg at 50% 50%, #00d4ff 0%, #0099cc 30%, #0066b3 70%, #00d4ff 100%)",
    glow: "rgba(0, 212, 255, 0.25)",      // Heavy 0.35 → soft 0.25
    border: "rgba(0, 212, 255, 0.15)",   // Heavy 0.2 → soft 0.15
  },
  secondary: {
    gradient: "conic-gradient(from 0deg, #a855f7 0%, #ec4899 25%, #f97316 50%, #a855f7 75%, #a855f7 100%)",
    glow: "rgba(168, 85, 247, 0.35)",
    border: "rgba(168, 85, 247, 0.2)",
  },
  success: {
    gradient:
      "conic-gradient(from 0deg, #10b981 0%, #14b8a6 25%, #06b6d4 50%, #10b981 75%, #10b981 100%)",
    glow: "rgba(16, 185, 129, 0.35)",
    border: "rgba(16, 185, 129, 0.2)",
  },
}

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "medium",
      loading = false,
      disabled = false,
      asChild = false,
      text,
      icon,
      children,
      onDrag,
      onDragStart,
      onDragEnd,
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      ...props
    },
    ref,
  ) => {
    const variantStyle = variantGradients[variant]

    return (
      <motion.button
        ref={ref}
        disabled={disabled || loading}
        whileHover={!disabled && !loading ? { y: -2 } : {}}
        whileTap={!disabled && !loading ? { y: 0 } : {}}
        className={cn(
          "relative rounded-full  overflow-hidden transition-all duration-300 flex items-center justify-center font-semibold cursor-pointer group",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950",
          sizeStyles[size],
          className,
        )}
        {...props}
      >
     
     {/*  */}
        <motion.div
          className="absolute inset-0  overflow-hidden "
          style={{
            filter: "blur(12px)",
            opacity: 0.8,
          }}
        >
          <motion.div
            className="absolute inset-0 "
            style={{
              background: variantStyle.gradient,
              backgroundSize: "110% 110%",
              width: "110%",
              height: "110%",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 8, // Slow rotation - 8 seconds
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            onHoverStart={() => {
            
            }}
          />
        </motion.div>

{/* GLASSMORPHISM  */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `rgba(6, 249, 241, 0.15)`,
            boxShadow: `0 8px 32px 0 ${variantStyle.glow}, inset 0 0 20px rgba(6, 249, 241, 0.05)`,
            border: `1px solid ${variantStyle.border}`,
            backdropFilter: "blur(10px)",
            zIndex: -1,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          whileHover={{
            boxShadow: `0 12px 48px 0 ${variantStyle.glow}, inset 0 0 30px rgba(6, 249, 241, 0.1)`,
            opacity: 1,
          }}
        />

        <motion.div
          className={cn(
            "relative z-10 rounded-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border transition-all duration-300 flex items-center justify-center gap-2",
            labelSizes[size],
            "group-hover:border-cyan-400/50 group-hover:shadow-lg",
          )}
          style={{
            borderColor: variantStyle.border,
            backdropFilter: "blur(5px)",
          }}
          whileHover={{
            background: "linear-gradient(180deg, #1a1f3a 0%, #2a2f4a 100%)",
          }}
        >
          {/* Icon */}
          {(icon || (children && typeof children === "object" && !React.isValidElement(children))) && (
            <motion.span
              className="flex items-center justify-center text-lg"
              whileHover={{
                scale: 1.2,
                rotate: 10,
              }}
              transition={{ duration: 0.3 }}
            >
              {icon || (Array.isArray(children) && children[0])}
            </motion.span>
          )}

          {/* Text */}
          <motion.span
            className="font-semibold text-white"
            whileHover={{
              letterSpacing: "0.5px",
            }}
          >
            {text || (typeof children === "string" ? children : Array.isArray(children) && children[1])}
          </motion.span>

          {/* Loading spinner */}
          {loading && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute"
            >
              <div className="w-4 h-4 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full" />
            </motion.div>
          )}
        </motion.div>
        
          {!loading && !disabled && (
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-lg"
            whileTap={{
              boxShadow: `0 0 30px ${variantStyle.glow}`,
            }}
          />
        )}
      </motion.button>
    )
  },
)

PremiumButton.displayName = "PremiumButton"