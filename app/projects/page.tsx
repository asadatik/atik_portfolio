"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";



function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary cyan glow */}
      <motion.div
        className="absolute top-0 right-1/3 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan-500/25 to-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 150, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Secondary teal glow */}
      <motion.div
        className="absolute bottom-1/4 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-teal-500/10 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
          y: [0, -150, 0],
          x: [0, -100, 0],
        }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />

      {/* Accent glow */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-400/15 to-blue-600/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 100, 0],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 6 + 10,
    delay: Math.random() * 2,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute pointer-events-none rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            y: [-100, -500],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-400/80 via-cyan-300/50 to-blue-400/30 blur-sm shadow-lg shadow-cyan-400/60" />
        </motion.div>
      ))}
    </>
  );
}

export default function ProjectsPage() {



  return (
    <section className="relative py-10 md:py-16  bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 overflow-hidden" id="projects">
      <AnimatedBackground />
      <FloatingParticles />

      <div className="container mx-auto px-2 md:px-4  relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 p-2 rounded-full border-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-cyan-500/15 mb-12 backdrop-blur-xl shadow-2xl hover:border-cyan-300/70 transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="drop-shadow-lg"
            >
              <Sparkles className=" text-cyan-300 stroke-2" />
            </motion.div>
            <span className="text-base font-black text-cyan-300 uppercase tracking-widest">
              Portfolio Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tight"
          >
            Featured{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Works
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-2xl text-cyan-100/70 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Crafting innovative solutions with cutting-edge technologies, delivering exceptional user experiences and scalable architectures
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
    
      </div>
    </section>
  );
}
