// components/hero-section.tsx
"use client"

import { motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react"

import { ChevronDown } from "lucide-react"
import { profile } from "@/data/profile"
import { PremiumButton } from "@/components/premium-button"
import { HeroDeveloperPhoto } from "./hero-developer-photo"
import Link from "next/link"

export function HeroSection() {
    const [displayedText, setDisplayedText] = useState("")
    const [displayedSubtext, setDisplayedSubtext] = useState("")
    const [isTypingComplete, setIsTypingComplete] = useState(false)
    const [showSubtext, setShowSubtext] = useState(false)
    const [scrollY, setScrollY] = useState(0)

    // Main heading text
    const mainHeading = `Full-Stack Developer & Creative Problem Solver`
    // Subheading text
    const subHeading = `Building scalable web applications with React, Next.js, Node.js, and modern cloud technologies. Transforming ideas into seamless digital experiences.`

    // Typing animation for main heading
    useEffect(() => {
        if (displayedText.length < mainHeading.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(mainHeading.slice(0, displayedText.length + 1))
            }, 100) // Smooth typing speed

            return () => clearTimeout(timeout)
        } else {
            setIsTypingComplete(true)
            // Show subtext after main heading completes
            setTimeout(() => setShowSubtext(true), 200)
        }
    }, [displayedText, mainHeading])

    // Typing animation for subtext
    useEffect(() => {
        if (!showSubtext) return

        if (displayedSubtext.length < subHeading.length) {
            const timeout = setTimeout(() => {
                setDisplayedSubtext(subHeading.slice(0, displayedSubtext.length + 1))
            }, 15) // Faster subtext typing

            return () => clearTimeout(timeout)
        }
    }, [displayedSubtext, showSubtext, subHeading])

    // Scroll listener for parallax effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Cursor blink animation
    const cursorVariants = {
        blinking: {
            opacity: [1, 1, 0, 0],
            transition: {
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 0.3,
            },
        },
    }

    // variants with proper typing
    const containerVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: "easeOut",
                // or if TS complains: ease: [0.17, 0.67, 0.83, 0.67],
            },
        }),
    }


    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pt-20">
            {/* ============================================
          ANIMATED BACKGROUND GRADIENT
          ============================================ */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated background shapes */}
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-cyan-500/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.3, 0.4, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />

                {/* Parallax grid background */}
                <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(6, 249, 241, 0.05) 25%, rgba(6, 249, 241, 0.05) 26%, transparent 27%, transparent 74%, rgba(6, 249, 241, 0.05) 75%, rgba(6, 249, 241, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(6, 249, 241, 0.05) 25%, rgba(6, 249, 241, 0.05) 26%, transparent 27%, transparent 74%, rgba(6, 249, 241, 0.05) 75%, rgba(6, 249, 241, 0.05) 76%, transparent 77%, transparent)
            `,
                        backgroundSize: "50px 50px",
                    }}
                    animate={{
                        y: scrollY * 0.3,
                    }}
                />
            </div>

            {/* ============================================
          MAIN CONTAINER
          ============================================ */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-120px)]">
                    {/* ============================================
              LEFT SIDE: CONTENT & TYPING ANIMATION
              ============================================ */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        {/* Role Badge */}
                        <motion.div variants={itemVariants}>
                            <motion.div
                                whileHover={{ scale: 1.05, x: 4 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm cursor-default group"
                            >
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-cyan-400"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                />
                                <span className="text-sm font-medium text-cyan-400">
                                    {profile.role || "Full Developer"}
                                </span>
                            </motion.div>
                        </motion.div>

                        {/* Main Heading with Typing Animation */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="relative">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                    {displayedText}
                                    <motion.span
                                        variants={cursorVariants}
                                        animate="blinking"
                                        className="ml-1 inline-block w-1 sm:w-1.5 h-14 sm:h-16 lg:h-20 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-sm"
                                    />
                                </h1>

                                {/* Glow effect for typing text */}
                                {displayedText.length > 0 && (
                                    <motion.div
                                        className="absolute inset-0 text-5xl sm:text-6xl lg:text-7xl font-bold pointer-events-none blur-xl opacity-30"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.3 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                            {displayedText}
                                        </span>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>

                        {/* Subheading with Typing Animation */}
                        {showSubtext && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                                    {displayedSubtext}
                                    {displayedSubtext.length < subHeading.length && (
                                        <motion.span
                                            className="ml-0.5 inline-block w-0.5 h-6 sm:h-7 bg-cyan-400 rounded-sm"
                                            animate={{ opacity: [1, 0] }}
                                            transition={{
                                                duration: 0.8,
                                                repeat: Number.POSITIVE_INFINITY,
                                            }}
                                        />
                                    )}
                                </p>

                                {/* Subtle underline */}
                                {displayedSubtext.length > 0 && (
                                    <motion.div
                                        className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(displayedSubtext.length / subHeading.length) * 100}%` }}
                                        transition={{ duration: 0.1 }}
                                    />
                                )}
                            </motion.div>
                        )}

                        {/* CTA Buttons */}
                        {isTypingComplete && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-4 pt-4"
                            >
                                <Link href="/projects">
                                    <PremiumButton
                                        text="Projects"
                                        icon="→"
                                        variant="success"
                                        size="medium"
                                    />
                                </Link>

                                <PremiumButton
                                    text="Download CV"
                                    icon="↓"
                                    variant="secondary"
                                    size="medium"
                                    onClick={() => {
                                        const link = document.createElement("a")
                                        link.href = "/resume.pdf"
                                        link.download = "resume.pdf"
                                        link.click()
                                    }}
                                />
                            </motion.div>
                        )}

                        {/* Stats Section */}
                        {isTypingComplete && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="grid grid-cols-3 gap-6 pt-8 border-t border-cyan-500/10"
                            >
                                {[
                                    { value: "2+", label: "Years Exp." },
                                    { value: "15+", label: "Projects" },
                                    { value: "50K+", label: "Users" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -4 }}
                                        className="text-center"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                                        >
                                            {stat.value}
                                        </motion.div>
                                        <p className="text-xs sm:text-sm text-gray-400 mt-1">
                                            {stat.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </motion.div>

         {/* Photo Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:block relative h-150"
                    >
                        <HeroDeveloperPhoto />
                    </motion.div>
                </div>
            </div>
{/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-gray-400 font-medium">Scroll to explore</span>
                    <ChevronDown className="w-5 h-5 text-cyan-400 glow" />
                </motion.div>
            </motion.div>
        </section>
    )
}