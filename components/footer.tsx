// components/footer.tsx
"use client"

import { motion , type Variants } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import {
  Github,
  Linkedin,

  Mail,
  ExternalLink,
  ArrowRight,
  Heart,
  Code2,
  Zap,
  Facebook,
  
  ArrowUp,
  ArrowBigUp,
 
} from "lucide-react"
import Image from "next/image"
import { LogoAdvanced } from "./logo-advance"

interface FooterLink {
  label: string
  href: string
  icon?: React.ReactNode
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resume/CV", href: "/resume.pdf" },
      { label: "GitHub", href: "https://github.com/asadatik" },
      { label: "LinkedIn", href: "https://linkedin.com/in/asadujjaman-atik" },
      { label: "Facebook", href: "https://facebook.com/codewithatik" },
  
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
]

const socialLinks: FooterLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/asadatik",
    icon: <Github className="w-5 h-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/asadujjaman-atik",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/codewithatik",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    label: "Email",
    href: "mailto:asadatik1995@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },



]

// Animated footer link component
function FooterLinkItem({
  label,
  href,
  isExternal = false,
  delay = 0,
}: {
  label: string
  href: string
  isExternal?: boolean
  delay?: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  const linkContent = (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{ x: 4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group flex items-center gap-2 cursor-pointer"
    >
      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
        {label}
      </span>

      {isExternal && (
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 2 : -4,
          }}
          transition={{ duration: 0.3 }}
        >
          <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
        </motion.div>
      )}
    </motion.div>
  )

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {linkContent}
      </a>
    )
  }

  return <Link href={href}>{linkContent}</Link>
}

// Animated social button
function SocialButton({
  label,
  href,
  icon,
  delay = 0,
}: {
  label: string
  href: string
  icon: React.ReactNode
  delay?: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.15, y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
      title={label}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
        animate={{
          background: isHovered
            ? "radial-gradient(circle at center, rgba(6, 249, 241, 0.15), transparent 70%)"
            : "radial-gradient(circle at center, transparent, transparent)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon with color animation */}
      <motion.div
        className="relative z-10 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? 360 : 0,
        }}
        transition={{
          scale: { duration: 0.3 },
          rotate: { duration: 0.8 },
        }}
      >
        {icon}
      </motion.div>
    </motion.a>
  )
}

// Scroll to top button
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
  }

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisibility)
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 10,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      className="p-1 rounded-full bg-linear-to-br from-cyan-500/30 to-blue-500/20 border border-cyan-500/50 hover:border-cyan-500/80 text-cyan-400 hover:text-cyan-300 transition-all"
      title="Scroll to top"
    >
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ArrowBigUp className="w-10 h-10 " />
      </motion.div>
    </motion.button>
  )
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



export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden pt-20 md:pt-24 pb-8">
    
      {/* Top gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/5 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/2 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-500/10 to-cyan-500/5 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
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

      {/* Main footer  */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-12 md:pb-16 border-b border-cyan-500/10"
        >
          {/*  heading */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Let's Stay Connected
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="text-gray-400 text-lg"
            >
              Follow my work and stay updated with the latest projects and insights
            </motion.p>
          </div>

          {/* Social links grid */}
          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              staggerChildren: 0.1,
              delayChildren: 0.3,
            }}
          >
            {socialLinks.map((link, idx) => (
              <SocialButton
                key={link.label}
                label={link.label}
                href={link.href}
                icon={link.icon}
                delay={0.3 + idx * 0.1}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Footer sections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12 md:py-16">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="mb-6">
                  {/* Logo */}
                    <LogoAdvanced variant="neon" size="lg" />
 
              <p className="text-sm text-gray-400 leading-relaxed">
                Full-stack developer crafting beautiful and functional web experiences with modern technologies.
              </p>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Node.js"].map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-medium cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Footer sections */}
          {footerSections.map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1 + sectionIdx * 0.1,
              }}
            >
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
                {section.title}
              </h4>

              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={link.label}>
                    <FooterLinkItem
                      label={link.label}
                      href={link.href}
                      isExternal={link.href.startsWith("http")}
                      delay={0.1 + linkIdx * 0.05}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

      
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent origin-center"
        />

        {/* Bottom footer with copyright and scroll to top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 flex items-center gap-2 justify-center md:justify-start">
              © 2024 Asadujjaman Atik . Built with{" "}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              </motion.span>{" "}
              using Next.js & Framer Motion.
            </p>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-6">
            {/* Theme indicator */}
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-500"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Dark Mode</span>
            </motion.div>

            {/* top button */}
            <ScrollToTopButton />
          </div>
        </motion.div>
      </div>

      {/* Floating particles*/}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[0, 1, 2].map((idx) => (
          <motion.div
            key={idx}
            className="absolute w-1 h-1 rounded-full bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: 4 + idx,
              delay: idx * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </footer>
  )
}
