import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-(--bg-app) to-(--bg-surface)">
        <div className="container mx-auto px-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-(--text-muted) hover:text-(--accent) transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm px-3 py-1 rounded-full bg-(--accent-muted) text-(--accent) border border-(--accent)/20 font-medium">
                {project.type}
              </span>
              {project.featured && (
                <span className="text-sm px-3 py-1 rounded-full bg-(--bg-surface) text-(--text-muted) border border-(--border-subtle)">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--text-primary) mb-6 text-balance">
              {project.title}
            </h1>

            <p className="text-xl text-(--text-muted) leading-relaxed mb-8">{project.description}</p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.links.demo && (
                <Button
                  asChild
                  size="lg"
                  className="bg-(--accent) text-(--bg-app) hover:bg-(--accent-soft) font-medium"
                >
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-(--border-subtle) text-(--text-primary) hover:border-(--accent) hover:text-(--accent) bg-transparent"
                >
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 bg-(--bg-surface)">
        <div className="container mx-auto px-4">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-(--border-subtle)">
            <Image src={project.thumbnail || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Problem */}
              <div>
                <h2 className="text-3xl font-bold text-(--text-primary) mb-4">The Problem</h2>
                <div className="h-1 w-20 bg-(--accent) rounded mb-6" />
                <p className="text-(--text-muted) text-lg leading-relaxed">{project.problem}</p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold text-(--text-primary) mb-4">The Solution</h2>
                <div className="h-1 w-20 bg-(--accent) rounded mb-6" />
                <p className="text-(--text-muted) text-lg leading-relaxed">{project.solution}</p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-3xl font-bold text-(--text-primary) mb-4">Key Features</h2>
                <div className="h-1 w-20 bg-(--accent) rounded mb-6" />
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-(--accent) flex-shrink-0 mt-0.5" />
                      <span className="text-(--text-muted) leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result */}
              <div>
                <h2 className="text-3xl font-bold text-(--text-primary) mb-4">Result & Impact</h2>
                <div className="h-1 w-20 bg-(--accent) rounded mb-6" />
                <p className="text-(--text-muted) text-lg leading-relaxed mb-6">{project.result}</p>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="p-4 rounded-xl bg-(--bg-surface) border border-(--border-subtle)">
                        <div className="text-2xl font-bold text-(--accent) mb-1">{metric.split(" ")[0]}</div>
                        <div className="text-sm text-(--text-muted)">{metric.split(" ").slice(1).join(" ")}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="p-6 rounded-2xl bg-(--bg-surface) border border-(--border-subtle)">
                <h3 className="text-xl font-bold text-(--text-primary) mb-6">Tech Stack</h3>

                {project.techStack.frontend.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-(--accent) mb-3">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.frontend.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-full bg-(--bg-app) text-(--text-muted) border border-(--border-subtle)"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStack.backend.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-(--accent) mb-3">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.backend.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-full bg-(--bg-app) text-(--text-muted) border border-(--border-subtle)"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStack.database.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-(--accent) mb-3">Database</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.database.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-full bg-(--bg-app) text-(--text-muted) border border-(--border-subtle)"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStack.other.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-(--accent) mb-3">Tools & Other</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.other.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-full bg-(--bg-app) text-(--text-muted) border border-(--border-subtle)"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Links */}
              <div className="p-6 rounded-2xl bg-(--bg-surface) border border-(--border-subtle)">
                <h3 className="text-xl font-bold text-(--text-primary) mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-(--text-muted) hover:text-(--accent) transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-(--text-muted) hover:text-(--accent) transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  )}
                  {project.links.docs && (
                    <a
                      href={project.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-(--text-muted) hover:text-(--accent) transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Documentation</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-(--bg-surface)">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-(--accent) text-(--accent) hover:bg-(--accent-muted) bg-transparent"
            >
              <Link href="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
