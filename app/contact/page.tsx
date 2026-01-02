"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react"
import { profile } from "@/data/profile"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: profile.social.github,
    username: "@alexjohnson",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: profile.social.linkedin,
    username: "in/alexjohnson",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: profile.social.twitter,
    username: "@alexjohnson",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus("success")
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => {
      setStatus("idle")
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 bg-gradient-to-b from-(--bg-app) to-(--bg-surface)">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-(--text-primary) mb-6 text-balance">
              Let's Work Together
            </h1>
            <p className="text-lg text-(--text-muted) leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-(--text-primary) mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-(--text-primary) mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="bg-(--bg-surface) border-(--border-subtle) text-(--text-primary) focus:border-(--accent) focus:ring-(--accent)"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-(--text-primary) mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="bg-(--bg-surface) border-(--border-subtle) text-(--text-primary) focus:border-(--accent) focus:ring-(--accent)"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-(--text-primary) mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-(--bg-surface) border-(--border-subtle) text-(--text-primary) focus:border-(--accent) focus:ring-(--accent) resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full bg-(--accent) text-(--bg-app) hover:bg-(--accent-soft) font-medium disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      "Sending..."
                    ) : status === "success" ? (
                      "Sent!"
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-(--accent) text-center"
                    >
                      Thank you! I'll get back to you soon.
                    </motion.p>
                  )}
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Direct Contact */}
                <div>
                  <h2 className="text-3xl font-bold text-(--text-primary) mb-6">Direct Contact</h2>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-(--bg-surface) border border-(--border-subtle) hover:border-(--accent) transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-(--accent-muted) flex items-center justify-center">
                      <Mail className="w-6 h-6 text-(--accent)" />
                    </div>
                    <div>
                      <div className="text-sm text-(--text-muted) mb-1">Email me at</div>
                      <div className="text-(--text-primary) font-medium group-hover:text-(--accent) transition-colors">
                        {profile.email}
                      </div>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-4">Connect on Social</h3>
                  <div className="space-y-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-(--bg-surface) border border-(--border-subtle) hover:border-(--accent) transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-(--bg-app) flex items-center justify-center">
                          <social.icon className="w-5 h-5 text-(--text-muted) group-hover:text-(--accent) transition-colors" />
                        </div>
                        <div>
                          <div className="text-(--text-primary) font-medium group-hover:text-(--accent) transition-colors">
                            {social.name}
                          </div>
                          <div className="text-sm text-(--text-muted)">{social.username}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-(--accent-muted) to-transparent border border-(--accent)/20">
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3">Availability</h3>
                  <p className="text-(--text-muted) leading-relaxed">
                    I'm currently <span className="text-(--accent) font-medium">available for freelance projects</span>{" "}
                    and open to full-time opportunities. I typically respond within 24-48 hours.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
