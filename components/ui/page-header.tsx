
"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 text-balance">
        {title}
      </h1>
      <p className="text-lg text-[var(--text-muted)] leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
