// components/Header.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { profile } from "@/data/profile"
import { PremiumButton } from "./premium-button"
import Image from "next/image"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

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

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])





  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-slate-950/70 backdrop-blur-xl border-b border-cyan-500/10"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        {/* Animated border gradient on scroll */}
        {scrolled && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          />
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with premium animation */}
            <motion.div
              custom={0}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link href="/" className="flex items-center gap-2 group">
                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotate: 8,
                    boxShadow: "0 0 20px rgba(6, 249, 241, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-14 h-14 rounded-lg overflow-hidden cursor-pointer relative"
                >
                  <Image
                    src="/Atik.png"
                    alt="Atik logo"
                    fill                   // fills parent 40x40 box
                    className="object-contain"
                    sizes="40px"
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              custom={1}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-2"
            >
              {navItems.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.href}
                    custom={i + 1}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-sm font-medium transition-colors"
                    >
                      {/* Background pill on hover */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-400/10 rounded-lg -z-10"
                        transition={{ duration: 0.2 }}
                      />

                      {/* Text with color animation */}
                      <motion.span
                        className={`relative transition-colors duration-300 ${isActive
                            ? "text-cyan-400"
                            : "text-gray-400 hover:text-cyan-400"
                          }`}
                        whileHover={{ letterSpacing: "0.5px" }}
                      >
                        {item.label}
                      </motion.span>

                      {/* Active underline with spring animation */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Hover underline animation */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{
                          width: isActive ? "0%" : "100%",
                        }}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0"
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>

            {/* Desktop CTA Button */}
            <motion.div
              custom={navItems.length + 1}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:block"
            >
              <PremiumButton
                text=" CV"
                icon="↓"
                variant="primary"
                size="small"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/resume.pdf"
                  link.download = "resume.pdf"
                  link.click()
                }}
              />
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              custom={navItems.length + 2}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-cyan-400 relative z-40 transition-colors"
            >
              <motion.svg
                animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-cyan-500/10"
          style={{ backgroundColor: "rgba(15, 23, 42, 0.9)" }}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    mobileMenuOpen
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all ${isActive
                        ? "bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400"
                        : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}

            {/* Mobile CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={
                mobileMenuOpen
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 10 }
              }
              transition={{ delay: navItems.length * 0.05 }}
              className="pt-2"
            >
              <PremiumButton
                text="CV"
                icon="↓"
                variant="primary"
                size="small"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/resume.pdf"
                  link.download = "resume.pdf"
                  link.click()
                  setMobileMenuOpen(false)
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.header>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-16 left-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 z-50"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #06f9f1, #a855f7, #06f9f1)",
        }}
        transition={{ duration: 0.1 }}
      />

    </>
  )
}
