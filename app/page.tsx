"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { BentoHighlights } from "@/components/bento-highlights"
import { FeaturedProjects } from "@/components/featured-projects"
import { useRef } from "react"
import { HeroSection } from "@/components/home/hero-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref}>

      {/* Hero Section */}
       <HeroSection></HeroSection>  

      {/* Bento Highlights */}
      <BentoHighlights />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
