// components/projects/project-card.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

import type { Project } from "@/data/projects" // Adjust import based on your projects.ts type export

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const techPreview = [
    ...project.techStack.frontend.slice(0, 2),
    ...project.techStack.backend.slice(0, 1),
  ]

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8 }}
      className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden transition-all hover:border-[var(--accent)] hover:shadow-2xl hover:shadow-[var(--accent)]/10"
    >
      <Link href={`/projects/${project.slug}`}>
        {/* Thumbnail */}
        <div className="relative h-48 bg-[var(--bg-app)] overflow-hidden">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] to-transparent opacity-60" />
          <div className="absolute top-4 right-4">
            <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--bg-app)] font-medium">
              {project.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>
          <p className="text-[var(--text-muted)] text-sm mb-4 leading-relaxed line-clamp-2">
            {project.tagline}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {techPreview.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded bg-[var(--bg-app)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
            <span className="text-sm text-[var(--accent)] flex items-center gap-1 group-hover:gap-2 transition-all">
              View Details
              <ArrowRight className="w-4 h-4" />
            </span>
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
