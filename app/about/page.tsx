'use client'

import { motion , type  Variants } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MapPin, User, Briefcase, Code2, BookOpen, Award, Zap } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 100, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/15 to-teal-500/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          y: [0, -100, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  )
}

function FloatingParticles() {
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 10,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

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
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-400/80 via-cyan-300/50 to-blue-400/30 blur-sm shadow-lg shadow-cyan-400/60" />
        </motion.div>
      ))}
    </>
  )
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl py-20 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-cyan-500/15 mb-8 backdrop-blur-xl shadow-lg"
          >
            <User className="w-5 h-5 text-cyan-300" />
            <span className="text-sm font-black text-cyan-300 uppercase tracking-widest">About Me</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            I'm <motion.span
              className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Asadujjaman Atik
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-cyan-100/70 max-w-3xl mx-auto leading-relaxed"
          >
            Full-Stack Web Developer crafting scalable, performant applications with modern technologies
          </motion.p>
        </motion.div>

        {/* Intro Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-xl p-8 md:p-12 shadow-2xl hover:border-cyan-300/70 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 space-y-4">
              <motion.div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-cyan-100 mb-3">Full-Stack Web Developer</h2>
                  <p className="text-cyan-100/80 leading-relaxed">
                    In the name of Allah, I am a Full-Stack Web Developer with over two years of experience building scalable web applications. I work with JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, Redux, MongoDB, Mongoose, PostgreSQL, and Prisma.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="group relative overflow-hidden rounded-3xl border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-xl p-8 shadow-2xl hover:border-cyan-300/70 transition-all duration-300">
              <div className="flex items-start gap-4 relative z-10">
                <Briefcase className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-cyan-100 mb-2">Focus Areas</h3>
                  <p className="text-cyan-100/70 text-sm">Clean architecture, maintainable code, and performance-driven development</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-xl p-8 shadow-2xl hover:border-cyan-300/70 transition-all duration-300">
              <div className="flex items-start gap-4 relative z-10">
                <MapPin className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-cyan-100 mb-2">Location</h3>
                  <p className="text-cyan-100/70 text-sm">Pirgachha, Rangpur, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text mb-8"
          >
            Soft Skills
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-4"
          >
            {[
              'Analytical & problem-solving',
              'System design mindset',
              'Debugging & optimization',
              'Clear technical communication',
              'Continuous learning',
            ].map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 to-blue-500/5 backdrop-blur-md p-4 shadow-lg hover:border-cyan-300/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-cyan-100 font-medium">{skill}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text mb-8"
          >
            Education
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-xl p-8 shadow-2xl hover:border-cyan-300/70 transition-all duration-300"
          >
            <div className="flex items-start gap-4 relative z-10">
              <BookOpen className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-cyan-100 mb-1">Bachelor of Education</h3>
                <p className="text-cyan-100/70 mb-2">Govt. Teachers' Training College, Rangpur</p>
                <p className="text-cyan-400 text-sm font-medium">Session: 2023-2024</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text mb-8"
          >
            Certifications & Courses
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                title: 'Next Level Web Development',
                org: 'Programming Hero',
              },
              {
                title: 'Complete Web Development Course with Jhankar Mahbub',
                org: 'Programming Hero',
              },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-xl p-8 shadow-2xl hover:border-cyan-300/70 transition-all duration-300"
              >
                <div className="flex items-start gap-4 relative z-10">
                  <Award className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-cyan-100 mb-1">{cert.title}</h3>
                    <p className="text-cyan-100/70 text-sm">{cert.org}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
