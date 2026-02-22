'use client'

import { motion, type Variants } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MapPin, Code2, BookOpen, Award } from 'lucide-react'

import { Poppins, Inter, Luckiest_Guy, Lora, Nosifer } from "next/font/google"


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] })
const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] })
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] })
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600"] })
const nosifer = Nosifer({ subsets: ["latin"], weight: ["400"] })


const softSkills = [
  { label: 'Analytical & Problem-Solving', symbol: '⟳' },
  { label: 'System Design Mindset', symbol: '◈' },
  { label: 'Debugging & Optimization', symbol: '⌖' },
  { label: 'Clear Technical Communication', symbol: '◎' },
  { label: 'Continuous Learning', symbol: '↗' },
]

const education = {
  degree: 'Bachelor of Education',
  institution: "Govt. Teachers' Training College",
  location: 'Rangpur, Bangladesh',
  period: '2024 – 2028',
}

const certifications = [
  {
    title: 'Next Level Web Development',
    org: 'Programming Hero',
    year: '2025',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL' , 'Prisma'],
  },
  {
    title: 'Complete Web Development',
    org: 'Programming Hero',
    year: '2024',
    tags: ['React', 'Node.js', 'MongoDB' , 'Mongoose'],
  },
]

const techStack = [
  'JavaScript', 'TypeScript', 'React.js', 'Next.js',
  'Node.js', 'Express.js', 'Redux',
  'MongoDB', 'Mongoose', 'PostgreSQL', 'Prisma',
]

const stats = [
  { value: '2+', label: 'Years Exp.' },
  { value: '15+', label: 'Projects' },
  { value: '11+', label: 'Technologies' },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

// Ambient Background

function AmbientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <motion.div
        className="absolute -top-40 right-0 w-[750px] h-[750px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 68%)' }}
        animate={{ scale: [1, 1.15, 1], x: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 -left-64 w-[650px] h-[650px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.2, 1], y: [0, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
 
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(6,182,212,0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.25,
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />
    </div>
  )
}

// 
function FloatingParticles() {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number }[]
  >([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 5,
      }))
    )
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400/50"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-10, -380], opacity: [0, 0.5, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}

// Reusable UI Components

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[16px] tracking-[0.25em] text-cyan-400/50 uppercase mb-2.5">
      ✦ {children}
    </p>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl md:text-[2.6rem] font-black text-white tracking-tight leading-none mb-10">
      {children}
    </h2>
  )
}

function SectionDivider() {
  return (
    <div className="my-24 flex items-center gap-5">
      <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <span className="font-semibold text-sm text-white/10 tracking-widest">◆ ◆ ◆</span>
      <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  )
}



function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
      className="mb-24"
    >
     
      <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-3 mb-10">
        <span className="h-px w-8 bg-cyan-400/50" />
        <span className="font-mono text-xl tracking-[0.25em] text-cyan-400/70 uppercase">
          About Me
        </span>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        custom={1}
        className={`font-display font-black leading-[0.92] tracking-tight text-white mb-8 ${poppins.className}`}
        style={{ fontSize: 'clamp(52px, 10vw, 100px)' }}
      >
        Asadujjaman
        <br />
        <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
          Atik
        </span>
      </motion.h1>

      {/* Meta pills */}
      <motion.div
        variants={fadeUp}
        custom={2}
        className="flex flex-wrap items-center gap-3 mb-10"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium">
          <Code2 className="w-3.5 h-3.5" />
          Full-Stack Web Developer
        </span>
        <span className="inline-flex items-center gap-1.5 text-slate-300 text-sm">
          <MapPin className="w-8  h-10 text-cyan-400/40" />
          Pirgachha, Rangpur, Bangladesh
        </span>
      </motion.div>

      {/* Bio */}
      <motion.p
        variants={fadeUp}
        custom={3}
        className="text-slate-300/70 text-[17px] leading-relaxed max-w-xl mb-12"
      >
      I build scalable, performant web applications with{' '}
        <span className="text-cyan-300/90 font-medium">2+ years of hands-on experience</span>.
        Focused on clean architecture, maintainable patterns, and interfaces that feel as good as they look.
      </motion.p>

      {/* Tech stack */}
      <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-2">
        {techStack.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.04, duration: 0.3 }}
            whileHover={{ y: -2, borderColor: 'rgba(6,182,212,0.4)', color: '#67e8f9' }}
            className="font-mono text-[11px] tracking-wide px-2 py-1.5 rounded-lg bg-white/[0.03] border border-cyan-400/20 text-slate-300 transition-all duration-200 cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  )
}

function StatsRow() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="mb-24"
    >
      <div className="grid grid-cols-3 rounded-2xl overflow-hidden border border-white/[0.05] divide-x divide-white/[0.05]">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            custom={i}
            className="group py-8 px-4 text-center hover:bg-cyan-400/[0.04] transition-colors duration-300 cursor-default"
          >
            <div className="font-display text-4xl md:text-5xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300 mb-1 tabular-nums">
              {s.value}
            </div>
            <div className="font-mono text-[10px] tracking-widest text-slate-600 uppercase">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}



function SoftSkillsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="mb-24"
    >
      <motion.div variants={fadeUp} custom={0}>
        <SectionLabel>Character</SectionLabel>
        <SectionHeading>Soft Skills</SectionHeading>
      </motion.div>

      
      <div>
        {softSkills.map((skill, i) => (
          <motion.div
            key={skill.label}
            variants={fadeUp}
            custom={i + 2}
            whileHover={{ x: 8 }}
            className="group flex items-center justify-between py-5 border-b border-white/[0.045] hover:border-cyan-400/20 transition-all duration-300 cursor-default"
          >
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs text-slate-400 group-hover:text-cyan-400/40 transition-colors w-6 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-slate-300 text-[15px] font-medium group-hover:text-white transition-colors">
                {skill.label}
              </span>
            </div>
            <motion.span
              whileHover={{ rotate: 90, scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="font-mono text-base text-white/[0.08] group-hover:text-cyan-400/60 transition-colors"
            >
              {skill.symbol}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

// Education

function EducationSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="mb-24"
    >
      <motion.div variants={fadeUp} custom={0}>
        <SectionLabel>Academic Background</SectionLabel>
        <SectionHeading>Education</SectionHeading>
      </motion.div>

      {/* Timeline */}
      <motion.div variants={fadeUp} custom={2} className="relative pl-8 border-l-2  border-cyan-400/15">
        {/* Timeline dot */}
        <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-950 border-2 border-cyan-400/60 shadow-[0_0_10px_rgba(6,182,212,0.4)]" />

        <div className="group pb-2">
          <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-1">
                {education.degree}
              </h3>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400/40" />
                {education.institution}
              </p>
            </div>
            <span className="font-mono text-sm text-cyan-400/60 bg-cyan-400/[0.07] border border-cyan-400/15 px-3 py-1.5 rounded-full">
              {education.period}
            </span>
          </div>
          <p className="text-slate-400 text-sm flex items-center gap-1.5">
            <MapPin className="w-5 h-5" />
            {education.location}
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}

// Certifications

function CertificationsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeUp} custom={0}>
        <SectionLabel>Credentials</SectionLabel>
        <SectionHeading>Certifications</SectionHeading>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            variants={fadeUp}
            custom={i + 2}
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-cyan-400/[0.035] hover:border-cyan-400/20 transition-all duration-300 overflow-hidden p-7"
          >
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/[0.07] to-transparent rounded-bl-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

            <div className="flex items-start justify-between mb-5">
              <Award className="w-6 h-6 text-slate-200 group-hover:text-cyan-400/80 transition-colors" />
              <span className=" text-sm  text-cyan-100 group-hover:text-cyan-400/40 transition-colors">
                {cert.year}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white leading-snug mb-1.5">
              {cert.title}
            </h3>
            <p className="text-slate-400 text-[16px] mb-5">{cert.org}</p>

            <div className="flex flex-wrap gap-1.5">
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-cyan-400/[0.07] border border-cyan-400/15 text-cyan-400/60 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}


export default function AboutPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
    >
      <AmbientBackground />
      <FloatingParticles />

      <main className="relative z-10 container mx-auto px-5 sm:px-8 lg:px-14 max-w-7xl py-24 md:py-36">
        <HeroSection />
        <StatsRow />
        <SoftSkillsSection />
        <SectionDivider />
        <EducationSection />
        <CertificationsSection />
      </main>
    </div>
  )
}