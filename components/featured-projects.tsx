"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-(--text-primary) mb-4">Featured Projects</h2>
          <p className="text-(--text-muted) text-lg max-w-2xl mx-auto leading-relaxed">
            A selection of my recent work building full-stack applications and platforms
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {featured.map((project) => (
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
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs text-(--accent) font-medium mb-2">{project.type}</div>
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
                      View Case Study
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-(--accent) text-(--accent) hover:bg-(--accent-muted) bg-transparent"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
