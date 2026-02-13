import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { profile } from "@/data/profile"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: `${profile.name} - ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  keywords: ["full-stack developer", "React", "Next.js", "TypeScript", "Node.js", "portfolio"],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://protfolio-ten-weld.vercel.app",
    siteName: profile.name,
    title: `${profile.name} - ${profile.role}`,
    description: profile.tagline,
  },
  icons: {
    icon: "/Atik.png", 
    shortcut: "/atik.pic.png",
    apple: "/atik.pic.png", 
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>   
      <body className={`${_geist.className} font-sans antialiased`}>
        <Header />
        <main className="min-h-[80vh] pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
