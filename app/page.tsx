"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { profile } from "@/data/profile"
import { Button } from "@/components/ui/button"
import { Hero3DVisual } from "@/components/hero-3d-visual"
import { BentoHighlights } from "@/components/bento-highlights"
import { FeaturedProjects } from "@/components/featured-projects"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-(--bg-app) via-(--bg-app) to-(--bg-surface)" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block"
              >
                <span className="text-sm font-medium text-(--accent) px-4 py-2 rounded-full border border-(--accent)/20 bg-(--accent-muted)">
                  {profile.role}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-(--text-primary) mt-6 mb-6 text-balance"
              >
                Hi, I'm <span className="text-gradient">{profile.name}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-(--text-muted) mb-8 leading-relaxed max-w-xl"
              >
                {profile.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-(--accent) text-(--bg-app) hover:bg-(--accent-soft) font-medium"
                >
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-(--border-subtle) text-(--text-primary) hover:border-(--accent) hover:text-(--accent) bg-transparent"
                >
                  <a href={profile.resumeUrl} download>
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex gap-8 mt-12 pt-8 border-t border-(--border-subtle)"
              >
                <div>
                  <div className="text-3xl font-bold text-(--accent)">2+</div>
                  <div className="text-sm text-(--text-muted)">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-(--accent)">15+</div>
                  <div className="text-sm text-(--text-muted)">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-(--accent)">50K+</div>
                  <div className="text-sm text-(--text-muted)">Users Impacted</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: 3D Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block relative h-[600px]"
            >
              <Hero3DVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Highlights */}
      <section className="py-24 bg-(--bg-surface)">
        <div className="container mx-auto px-4">
          <BentoHighlights />
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* CTA Section */}
      <section className="py-24 bg-(--bg-surface)">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-(--text-primary) mb-6 text-balance">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg text-(--text-muted) mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you need a full-stack
              developer or want to collaborate on something exciting, let's connect.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-(--accent) text-(--bg-app) hover:bg-(--accent-soft)">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-(--border-subtle) text-(--text-primary) hover:border-(--accent) hover:text-(--accent) bg-transparent"
              >
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
