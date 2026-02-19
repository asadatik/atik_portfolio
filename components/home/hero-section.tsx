// components/hero-section.tsx
"use client"

import { motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react"

import { ChevronDown } from "lucide-react"
import { profile } from "@/data/profile"
import { PremiumButton } from "@/components/premium-button"
import { HeroDeveloperPhoto } from "./hero-developer-photo"
import Link from "next/link"
import { Poppins, Inter, Luckiest_Guy, Lora, Nosifer } from "next/font/google"




const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] })
const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] })
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] })
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600"] })
const nosifer = Nosifer({ subsets: ["latin"], weight: ["400"] })


export function HeroSection() {




    const [displayedText, setDisplayedText] = useState("")
    const [isTypingComplete, setIsTypingComplete] = useState(false)
    const [scrollY, setScrollY] = useState(0)

    // Main heading text
    const mainHeading = `Full-Stack Engineer Crafting Scalable Web Systems!`
    // Subheading text
    const subHeading = `From architecture to deployment — delivering secure, scalable systems using React, Next.js, Node.js, and cloud-native technologies.`

    //   Main heading 
    useEffect(() => {
        if (displayedText.length < mainHeading.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(mainHeading.slice(0, displayedText.length + 1))
            }, 20)

            return () => clearTimeout(timeout)
        } else {
            setIsTypingComplete(true)
        }
    }, [displayedText, mainHeading])



    //
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


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

            },
        }),
    }


    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pt-4">

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

                {/* Parallax */}
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

 {/* Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-120px)]">
   {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4 md:space-y-8"
                    >

                        <motion.div variants={itemVariants} className="space-y-3">
                            <p className={`text-sm md:text-base tracking-widest text-muted-foreground uppercase font-medium ${inter.className}`}>
                                Hello, I'm
                            </p>
                            <h2 className={`text-3xl md:text-4xl uppercase font-bold text-foreground ${nosifer.className}`}>
                                Asadujjaman{" "}
                                <span className="text-primary">Atik</span>
                            </h2>
                        </motion.div>

                        {/* Badge */}
                        <motion.div variants={itemVariants}>
                            <motion.div
                                whileHover={{ scale: 1.02, x: 2 }}
                                className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm"
                            >
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-primary"
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                />
                                <span className={`text-sm font-medium text-primary ${lora.className}`}>
                                    Full-Stack Engineer
                                </span>
                            </motion.div>
                        </motion.div>

{/*  */}
                        <motion.div variants={itemVariants} className="">
                            <div className="relative">
                                <h1 className={`text-3xl  lg:text-5xl font-bold text-foreground leading-tight tracking-tight ${lora.className}`}>
                                    {displayedText}
                                    {displayedText.length < 5 && (
                                        <motion.span
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                    
                                        />

                                    )}
                                </h1>
                            </div>
                        </motion.div>
                        {/* Description */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.2,
                                    },
                                },
                            }}
                            className="space-y-1"
                        >
                            <p className={`text-base md:text-xl text-gray-400  leading-relaxed max-w-2xl ${lora.className}`}>
                                {subHeading.split(" ").map((word, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: 20,
                                                filter: "blur(8px)",
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                filter: "blur(0px)",
                                                transition: {
                                                    duration: 3,
                                                    ease: [0.22, 1, 0.36, 1],
                                                },

                                          
                                            },
                                        }}
                                        className="inline-block mr-1"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </p>
                        </motion.div>



                        {/* CTA Buttons */}
                        {isTypingComplete && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-4 pt-6"
                            >
                                <Link href="/projects">
                                    <PremiumButton
                                        text="View Projects"
                                        icon="→"
                                        variant="success"
                                        size="medium"
                                    />
                                </Link>
                                <PremiumButton
                                    text="Resume"
                                    icon="↓"
                                    variant="secondary"
                                    size="medium"
                                    onClick={() => {
                                        const link = document.createElement("a");
                                        link.href = "/resume.pdf";
                                        link.download = "Asadujjaman-Atik-Resume.pdf";
                                        link.click();
                                    }}
                                />
                            </motion.div>
                        )}

                        {/* Stats Section */}
                        {isTypingComplete && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="grid grid-cols-3 gap-4 pt-10 border-t border-primary/10"
                            >
                                {[
                                    { value: "2+", label: "Years Building" },
                                    { value: "15+", label: "Deployments" },
                                    { value: "5+", label: "Platforms" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -3, scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                        className="text-center"
                                    >
                                        <div className="text-2xl md:text-3xl font-bold text-primary">
                                            {stat.value}
                                        </div>
                                        <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-tight">
                                            {stat.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </motion.div>

 {/* Right Section*/}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 40 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className=" lg:block relative"
                    >
                        <div className="aspect-square bg-primary/5 rounded-lg border border-primary/10 overflow-hidden">
                            <HeroDeveloperPhoto />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll bar */}
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