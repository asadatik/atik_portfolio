// components/home/bento-highlights.tsx
"use client"

import { motion  , type Variants} from "framer-motion"
import { Code2, Zap, Briefcase, Sparkles, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import { profile } from "@/data/profile"
import { projects } from "@/data/projects"
import { skills } from "@/data/skills"
import { PremiumButton } from "@/components/premium-button"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function BentoHighlights() {
  const featuredProject = projects.find((p) => p.featured) ?? projects[0]
  const coreSkills = (skills.core ?? skills.frontend ?? []).slice(0, 5)

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 overflow-hidden">
      {/* ============================================
          ANIMATED BACKGROUND ELEMENTS
          ============================================ */}

      {/* Top right glow */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/5 blur-3xl"
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

      {/* Bottom left glow */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-500/10 to-cyan-500/5 blur-3xl"
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

      {/* Grid background */}
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
        {/* ============================================
            SECTION HEADER
            ============================================ */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4 cursor-default"
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-sm font-medium text-cyan-400">Highlights</span>
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            What I <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Bring</span> to the Table
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my core expertise, experience, and what I'm currently focused on building
          </p>
        </motion.div>

        {/* ============================================
            BENTO GRID LAYOUT
            ============================================ */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {/* ============================================
              CARD 1: FULL-STACK DEVELOPMENT (WIDE)
              ============================================ */}

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-2 group"
          >
            <motion.div
              className="relative h-full rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 overflow-hidden cursor-default backdrop-blur-sm"
              whileHover={{
                borderColor: "rgba(6, 249, 241, 0.3)",
              }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, rgba(6, 249, 241, 0.1) 0%, transparent 70%)",
                }}
              />

              {/* Top accent */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Icon with animation */}
                <motion.div
                  whileHover={{ rotate: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="inline-block p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20"
                >
                  <Code2 className="w-6 h-6 text-cyan-400" />
                </motion.div>

                {/* Label */}
                <motion.span
                  className="inline-block text-sm font-semibold text-cyan-400 uppercase tracking-wider"
                  animate={{ letterSpacing: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Full-Stack Expertise
                </motion.span>

                {/* Heading */}
                <h3 className="text-3xl font-bold text-white leading-tight">
                  Modern Web Development
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  Specialized in building scalable, production-ready applications with Next.js, TypeScript, Node.js, RESTful APIs, 
                  database design, authentication systems, payment integration, and interactive dashboards.
                </p>

                {/* Tech tags */}
                <motion.div
                  className="flex flex-wrap gap-2 pt-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {["Next.js", "TypeScript", "Node.js", "React", "APIs"].map((tech, i) => (
                    <motion.span
                      key={tech}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-300 border border-cyan-500/30 font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  border: "2px solid transparent",
                  backgroundImage: "linear-gradient(135deg, rgba(6, 249, 241, 0.2), rgba(168, 85, 247, 0.1))",
                  backgroundOrigin: "border-box",
                  WebkitBackgroundClip: "padding-box, border-box",
                }}
              />
            </motion.div>
          </motion.div>

          {/* ============================================
              CARD 2: EXPERIENCE & YEARS
              ============================================ */}

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group"
          >
            <motion.div
              className="relative h-full rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 overflow-hidden cursor-default backdrop-blur-sm flex flex-col justify-between"
              whileHover={{
                borderColor: "rgba(6, 249, 241, 0.3)",
              }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="inline-block p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/20"
                >
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </motion.div>

                {/* Label */}
                <span className="inline-block text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Professional Background
                </span>

                {/* Big number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-2"
                >
                  <motion.div
                    className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {profile.yearsOfExperience ?? 2}+
                  </motion.div>
                  <p className="text-gray-300 text-sm">
                    Years of full-stack JavaScript/TypeScript development
                  </p>
                </motion.div>
              </div>

              {/* Border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  border: "2px solid transparent",
                  backgroundImage: "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.1))",
                  backgroundOrigin: "border-box",
                  WebkitBackgroundClip: "padding-box, border-box",
                }}
              />
            </motion.div>
          </motion.div>

          {/* ============================================
              CARD 3: FEATURED PROJECT
              ============================================ */}

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group"
          >
            <Link href={`/projects/${featuredProject.slug}`} className="block h-full">
              <motion.div
                className="relative h-full rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 overflow-hidden cursor-pointer backdrop-blur-sm flex flex-col justify-between"
                whileHover={{
                  borderColor: "rgba(6, 249, 241, 0.3)",
                }}
              >
                {/* Background glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                  }}
                />

                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 transition-opacity"
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="inline-block p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/20"
                  >
                    <Sparkles className="w-6 h-6 text-blue-400" />
                  </motion.div>

                  {/* Label */}
                  <span className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-wider">
                    Featured Project
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {featuredProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {featuredProject.description}
                  </p>

                  {/* Tech stack */}
                  <motion.div
                    className="flex flex-wrap gap-2 pt-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {featuredProject.techStack.frontend?.slice(0, 2).map((tech, i) => (
                      <motion.span
                        key={tech}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/10 text-blue-300 border border-blue-500/30 font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Arrow indicator on hover */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="w-5 h-5 text-blue-400" />
                </motion.div>

                {/* Border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    border: "2px solid transparent",
                    backgroundImage: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 249, 241, 0.1))",
                    backgroundOrigin: "border-box",
                    WebkitBackgroundClip: "padding-box, border-box",
                  }}
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* ============================================
              CARD 4: CURRENTLY WORKING ON (WIDE)
              ============================================ */}

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-2 group"
          >
            <motion.div
              className="relative h-full rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 overflow-hidden cursor-default backdrop-blur-sm"
              whileHover={{
                borderColor: "rgba(6, 249, 241, 0.3)",
              }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, rgba(34, 211, 238, 0.1) 0%, transparent 70%)",
                }}
              />

              {/* Top accent */}
              <motion.div
                className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="inline-block p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/10 border border-cyan-500/20"
                >
                  <Zap className="w-6 h-6 text-cyan-400" />
                </motion.div>

                {/* Label */}
                <motion.span
                  className="inline-block text-sm font-semibold text-cyan-400 uppercase tracking-wider"
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Currently Focusing On
                </motion.span>

                {/* Heading */}
                <h3 className="text-3xl font-bold text-white leading-tight">
                  {profile.currentlyWorkingOn ?? "Crafting Premium Full-Stack Solutions"}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  Building cutting-edge web applications with modern architecture, focusing on performance optimization, 
                  user experience, and scalable backend infrastructure.
                </p>

                {/* Focus areas - animated tags */}
                <motion.div
                  className="flex flex-wrap gap-2 pt-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {coreSkills.map((tech: string, i: number) => (
                    <motion.span
                      key={tech}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/10 text-cyan-300 border border-cyan-500/30 font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  border: "2px solid transparent",
                  backgroundImage: "linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(20, 184, 166, 0.1))",
                  backgroundOrigin: "border-box",
                  WebkitBackgroundClip: "padding-box, border-box",
                }}
              />
            </motion.div>
          </motion.div>

          {/* ============================================
              CARD 5: CALL TO ACTION
              ============================================ */}

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-2 group"
          >
            <motion.div
              className="relative h-full rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 overflow-hidden cursor-default backdrop-blur-sm flex flex-col justify-between"
              whileHover={{
                borderColor: "rgba(6, 249, 241, 0.3)",
              }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/20"
                >
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </motion.div>

                {/* Text */}
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Ready to collaborate?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Let's discuss your next project and how I can help bring your ideas to life with modern, scalable solutions.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative z-10 pt-4">
                <PremiumButton
                  text="Get In Touch"
                  icon="→"
                  variant="primary"
                  size="medium"
                  onClick={() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                />
              </div>

              {/* Border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  border: "2px solid transparent",
                  backgroundImage: "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.1))",
                  backgroundOrigin: "border-box",
                  WebkitBackgroundClip: "padding-box, border-box",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}