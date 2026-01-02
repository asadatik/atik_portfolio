import Link from "next/link"
import { profile } from "@/data/profile"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: profile.social.github, label: "GitHub" },
  { icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: profile.social.twitter, label: "Twitter" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-(--border-subtle) bg-(--bg-surface)">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-(--accent) to-(--accent-soft) flex items-center justify-center font-bold text-(--bg-app)">
                {profile.initials}
              </div>
              <div className="font-semibold text-(--text-primary)">{profile.name}</div>
            </div>
            <p className="text-sm text-(--text-muted) leading-relaxed">{profile.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-(--text-primary) mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-sm text-(--text-muted) hover:text-(--accent) transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-(--text-muted) hover:text-(--accent) transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-(--text-muted) hover:text-(--accent) transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="text-sm text-(--text-muted) hover:text-(--accent) transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-(--text-primary) mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-(--bg-app) border border-(--border-subtle) flex items-center justify-center text-(--text-muted) hover:text-(--accent) hover:border-(--accent) transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-(--text-muted) hover:text-(--accent) transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {profile.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-(--border-subtle) flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-(--text-muted)">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-(--text-muted)">Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
