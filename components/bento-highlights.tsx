"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Briefcase, Sparkles } from "lucide-react"
import Link from "next/link"
import { profile } from "@/data/profile"
import { projects } from "@/data/projects"
import { skills } from "@/data/skills"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function BentoHighlights() {
  const featuredProject = projects.find((p) => p.featured)

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {/* Featured Project - Large */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.02, borderColor: "var(--accent)" }}
        className="lg:col-span-2 rounded-2xl border border-(--border-subtle) bg-(--bg-surface) p-6 overflow-hidden relative group cursor-pointer transition-all"
      >
        <Link href={`/projects/${featuredProject?.slug}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-(--accent-muted) to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-(--accent)" />
              <span className="text-sm font-medium text-(--accent)">Featured Project</span>
            </div>
            <h3 className="text-2xl font-bold text-(--text-primary) mb-2">{featuredProject?.title}</h3>
            <p className="text-(--text-muted) mb-4 leading-relaxed">{featuredProject?.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {featuredProject?.techStack.frontend.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-(--bg-app) text-(--text-muted) border border-(--border-subtle)"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Experience Summary */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.02, borderColor: "var(--accent)" }}
        className="rounded-2xl border border-(--border-subtle) bg-(--bg-surface) p-6 transition-all"
      >
        <div className="flex items-center gap-2 mb-3">
          <Briefcase className="w-5 h-5 text-(--accent)" />
          <span className="text-sm font-medium text-(--accent)">Experience</span>
        </div>
        <div className="text-4xl font-bold text-(--text-primary) mb-2">{profile.yearsOfExperience}+</div>
        <p className="text-(--text-muted) leading-relaxed">Years building production-ready web applications</p>
      </motion.div>

      {/* What I Do */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.02, borderColor: "var(--accent)" }}
        className="rounded-2xl border border-(--border-subtle) bg-(--bg-surface) p-6 transition-all"
      >
        <div className="flex items-center gap-2 mb-3">
          <Code2 className="w-5 h-5 text-(--accent)" />
          <span className="text-sm font-medium text-(--accent)">What I Do</span>
        </div>
        <h4 className="text-xl font-bold text-(--text-primary) mb-2">Full-stack Development</h4>
        <p className="text-(--text-muted) text-sm leading-relaxed">
          Frontend, backend, databases, and everything in between
        </p>
      </motion.div>

      {/* Currently Working On - Spans 2 cols */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.02, borderColor: "var(--accent)" }}
        className="lg:col-span-2 rounded-2xl border border-(--border-subtle) bg-gradient-to-br from-(--bg-surface) to-(--bg-app) p-6 transition-all"
      >
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-5 h-5 text-(--accent)" />
          <span className="text-sm font-medium text-(--accent)">Currently Working On</span>
        </div>
        <h4 className="text-xl font-bold text-(--text-primary) mb-3">{profile.currentlyWorkingOn}</h4>
        <div className="flex flex-wrap gap-2">
          {skills.frontend.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-(--bg-app) text-(--text-muted) border border-(--border-subtle)"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
