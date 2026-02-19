"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { Nosifer } from "next/font/google";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const techIcons: Record<string, string> = {
  "React": "⚛️",
  "Next.js": "▲",
  "Tailwind CSS": "🎨",
  "Framer Motion": "✨",
  "Node.js": "🟢",
  "Express": "🚀",
  "Python": "🐍",
  "FastAPI": "⚡",
  "PostgreSQL": "🐘",
  "MongoDB": "🍃",
  "Redis": "🔴",
  "OpenAI API": "🤖",
  "Google Maps API": "🗺️",
  "Stripe": "💳",
  "Docker": "🐳",
};


const nosifer = Nosifer({ subsets: ["latin"], weight: ["400"] })


export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <motion.div
        animate={{
          y: isEven ? [0, -30, 0] : [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="h-full"
      >
        <div className={`grid gap-8 lg:gap-12 items-center ${
          isEven ? "lg:grid-cols-[60%_40%]" : "lg:grid-cols-[40%_60%]"
        }`}>
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`relative group ${isEven ? "" : "lg:order-last"}`}
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/40 shadow-2xl">
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                animate={{
                  background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.3), transparent)"
                }}
              />

              {/* Glow effect */}
              <motion.div
                className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              />

              {/* Image */}
              <div className="relative w-full  bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={1200}
                    height={700}
                 
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute top-6 right-6 py-1 px-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/20 backdrop-blur-xl border border-cyan-400/50 shadow-xl z-20"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <p className="text-sm font-bold text-slate-white">✨ {project.type}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`flex flex-col justify-center ${isEven ? "" : "lg:order-first"}`}
          >
            {/* Title */}
            <motion.h3
              className={`text-4xl md:text-5xl  leading-tight  uppercase font-bold text-foreground ${nosifer.className} mb-4 bg-gradient-to-r from-cyan-400/80 via-cyan-300/50 to-blue-400/30 bg-clip-text text-transparent`}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="  text-white ">
                {project.title}
              </span>
            </motion.h3>

           

            {/* Description */}
            <p className="text-base text-gray-400 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Tech Stack Grid */}
            <div className="mb-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                Tech Stack
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {project.stack.map((tech) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-1 justify-center rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
                    >
                      <span className="text-lg">
                        {techIcons[tech] || "💻"}
                      </span>
                      <span className="text-sm font-semibold text-cyan-200">
                        {tech}
                      </span>
                    </motion.div>
                  ))
                }
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-6 border-t border-cyan-400/20">
              {project.links.demo && (
                <motion.a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/30 hover:from-cyan-500/60 hover:to-blue-500/50 border border-cyan-400/50 hover:border-cyan-300/80 text-cyan-100 font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/40"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </motion.a>
              )}
              {project.links.github && (
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-slate-600/40 to-slate-700/30 hover:from-slate-600/60 hover:to-slate-700/50 border border-slate-500/50 hover:border-slate-400/80 text-slate-100 font-semibold transition-all duration-300 shadow-lg hover:shadow-slate-600/30"
                >
                  <Github className="w-5 h-5" />
                  Source Code
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
