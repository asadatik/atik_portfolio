"use client"

import { motion, useScroll, useTransform } from "framer-motion"


import { Button } from "@/components/ui/button"
import { BentoHighlights } from "@/components/home/bento-highlights"
import { FeaturedProjects } from "@/components/home/featured-projects"
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
      <CTASection></CTASection>
    </div>
  )
}
