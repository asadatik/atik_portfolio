"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/projects"

const filters = ["All", "Full-stack", "Frontend", "Backend", "Other"] as const
type Filter = (typeof filters)[number]

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

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All")

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.type === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 bg-gradient-to-b from-(--bg-app) to-(--bg-surface)">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-(--text-primary) mb-6 text-balance">My Projects</h1>
            <p className="text-lg text-(--text-muted) leading-relaxed">
              A collection of full-stack applications, frontend experiments, and backend systems I've built. Each
              project represents a unique challenge and learning opportunity.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-(--accent) text-(--bg-app)"
                    : "bg-(--bg-surface) text-(--text-muted) border border-(--border-subtle) hover:border-(--accent) hover:text-(--accent)"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            key={activeFilter}
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                variants={item}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-(--border-subtle) bg-(--bg-surface) overflow-hidden transition-all hover:border-(--accent) hover:shadow-2xl hover:shadow-(--accent)/10"
              >
                <Link href={`/projects/${project.slug}`}>
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-(--bg-app) overflow-hidden">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-(--bg-surface) to-transparent opacity-60" />
                    <div className="absolute top-4 right-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-(--accent) text-(--bg-app) font-medium">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-(--text-primary) mb-2 group-hover:text-(--accent) transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-(--text-muted) text-sm mb-4 leading-relaxed line-clamp-2">{project.tagline}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[...project.techStack.frontend.slice(0, 2), ...project.techStack.backend.slice(0, 1)].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded bg-(--bg-app) text-(--text-muted) border border-(--border-subtle)"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-(--border-subtle)">
                      <span className="text-sm text-(--accent) flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-(--text-muted) hover:text-(--accent) transition-colors"
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
                          className="text-(--text-muted) hover:text-(--accent) transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-(--text-muted) text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
