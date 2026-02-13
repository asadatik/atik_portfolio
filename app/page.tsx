import { HeroSection } from "@/components/home/hero-section"
import { BentoHighlights } from "@/components/home/bento-highlights"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { CTASection } from "@/components/home/cta-section"
import { ScrollBackground } from "@/components/ScrollBackground"

export default function HomePage() {
  return (
    <>
          <ScrollBackground />
      <HeroSection />
      <BentoHighlights />
      <FeaturedProjects />
      <CTASection />
    </>
  )
}
