// app/projects/page.tsx (or your projects page file)
"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import { PageHeader } from "@/components/ui/page-header"
import { ProjectCard } from "@/components/projects/project-card"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 bg-gradient-to-b from-[var(--bg-app)] to-[var(--bg-surface)]">
        <div className="container mx-auto px-4">
          <PageHeader 
            title="My Projects"
            description="A collection of full-stack applications, frontend experiments, and backend systems I've built. Each project represents a unique challenge and learning opportunity."
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
