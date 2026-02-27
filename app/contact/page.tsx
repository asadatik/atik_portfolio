"use client"


import type React from "react"
import { useState, useEffect, useCallback, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Facebook, Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react"
import { profile } from "@/data/profile"

type FormStatus = "idle" | "loading" | "success" | "error"

interface FormState {
  name: string
  email: string
  message: string
}


const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: Github,
    href: profile.social.github,
    handle: "@asadatik",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: profile.social.linkedin,
    handle: "asadujjaman-atik",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: profile.social.facebook,
    handle: "codewithatik",
  },
] as const

const MAX_MESSAGE = 500


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
})


const AmbientBg = memo(function AmbientBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <div
        className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.055) 0%, transparent 68%)" }}
      />
      <div
        className="absolute bottom-0 -left-48 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.035) 0%, transparent 65%)" }}
      />
  {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(6,182,212,0.1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.22,
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 20%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 20%, black 30%, transparent 100%)",
        }}
      />
    </div>
  )
})


interface FloatInputProps {
  id: string
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  autoComplete?: string
}

const FloatInput = memo(function FloatInput({
  id, label, type = "text", value, onChange, required, autoComplete,
}: FloatInputProps) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className="absolute left-4 transition-all duration-200 pointer-events-none select-none z-10"
        style={{
          top: lifted ? "8px" : "50%",
          transform: lifted ? "none" : "translateY(-50%)",
          fontSize: lifted ? "10px" : "14px",
          color: focused ? "rgba(6,182,212,0.9)" : "rgba(148,163,184,0.6)",
          letterSpacing: lifted ? "0.1em" : "0",
          fontFamily: "var(--font-mono, monospace)",
          textTransform: lifted ? "uppercase" : "none",
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl pt-6 pb-3 px-4 text-white text-[15px] outline-none transition-all duration-200 hover:border-white/[0.12]"
        style={{
          borderColor: focused ? "rgba(6,182,212,0.45)" : undefined,
          boxShadow: focused ? "0 0 0 3px rgba(6,182,212,0.08)" : undefined,
        }}
      />
    </div>
  )
})


interface FloatTextareaProps {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  maxLength?: number
}

const FloatTextarea = memo(function FloatTextarea({
  id, label, value, onChange, required, maxLength,
}: FloatTextareaProps) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0
  const pct = maxLength ? value.length / maxLength : 0

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className="absolute left-4 transition-all duration-200 pointer-events-none select-none z-10"
        style={{
          top: lifted ? "10px" : "20px",
          fontSize: lifted ? "10px" : "14px",
          color: focused ? "rgba(6,182,212,0.9)" : "rgba(148,163,184,0.6)",
          letterSpacing: lifted ? "0.1em" : "0",
          fontFamily: "var(--font-mono, monospace)",
          textTransform: lifted ? "uppercase" : "none",
        }}
      >
        {label}
      </label>
      <textarea
        id={id}
        required={required}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={6}
        className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl pt-8 pb-10 px-4 text-white text-[15px] outline-none resize-none transition-all duration-200 hover:border-white/[0.12]"
        style={{
          borderColor: focused ? "rgba(6,182,212,0.45)" : undefined,
          boxShadow: focused ? "0 0 0 3px rgba(6,182,212,0.08)" : undefined,
        }}
      />
      {/* Char counter bar */}
      {maxLength && (
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <div className="h-px flex-1 mr-3 bg-white/[0.05] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: pct > 0.85 ? "#f87171" : "rgba(6,182,212,0.6)" }}
              animate={{ width: `${pct * 100}%` }}
              transition={{ duration: 0.15 }}
            />
          </div>
          <span
            className="font-mono text-[10px] tabular-nums"
            style={{ color: pct > 0.85 ? "#f87171" : "rgba(148,163,184,0.4)" }}
          >
            {value.length}/{maxLength}
          </span>
        </div>
      )}
    </div>
  )
})

// 

const SubmitButton = memo(function SubmitButton({ status }: { status: FormStatus }) {
  const isLoading = status === "loading"
  const isSuccess = status === "success"
  const isError = status === "error"

  return (
    <motion.button
      type="submit"
      disabled={isLoading || isSuccess}
      whileHover={!isLoading && !isSuccess ? { y: -2 } : {}}
      whileTap={!isLoading && !isSuccess ? { scale: 0.98 } : {}}
      className="relative w-full rounded-xl py-4 font-bold text-[15px] tracking-wide overflow-hidden transition-all duration-300"
      style={{
        background: isSuccess
          ? "rgba(34,197,94,0.15)"
          : isError
          ? "rgba(248,113,113,0.15)"
          : "rgba(6,182,212,0.12)",
        border: `1.5px solid ${isSuccess ? "rgba(34,197,94,0.4)" : isError ? "rgba(248,113,113,0.4)" : "rgba(6,182,212,0.35)"}`,
        color: isSuccess ? "#4ade80" : isError ? "#f87171" : "#67e8f9",
        cursor: isLoading || isSuccess ? "not-allowed" : "pointer",
        opacity: isLoading ? 0.8 : 1,
      }}
    >
{/*  */}
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100"
        style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.06), transparent)" }}
        animate={!isLoading && !isSuccess ? { x: ["-100%", "100%"] } : {}}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
      />

      <span className="relative z-10 flex items-center justify-center gap-2.5">
        {isLoading ? (
          <>
            <motion.div
              className="w-4 h-4 rounded-full border-2 border-cyan-400/30 border-t-cyan-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
            Sending...
          </>
        ) : isSuccess ? (
          <>
            <CheckCircle2 className="w-4 h-4" />
            Message Sent!
          </>
        ) : isError ? (
          <>
            <AlertCircle className="w-4 h-4" />
            Try Again
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </span>
    </motion.button>
  )
})

// 

function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<FormStatus>("idle")

  const setField = useCallback(
    (field: keyof FormState) => (val: string) => setForm((f) => ({ ...f, [field]: val })),
    []
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setStatus("loading")
      try {
     
        await new Promise((r) => setTimeout(r, 1800))
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
        setTimeout(() => setStatus("idle"), 4000)
      } catch {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    },
    []
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <FloatInput
          id="name"
          label="Your Name"
          value={form.name}
          onChange={setField("name")}
          required
          autoComplete="name"
        />
        <FloatInput
          id="email"
          label="Email Address"
          type="email"
          value={form.email}
          onChange={setField("email")}
          required
          autoComplete="email"
        />
      </div>

      <FloatTextarea
        id="message"
        label="Your Message"
        value={form.message}
        onChange={setField("message")}
        required
        maxLength={MAX_MESSAGE}
      />

      <SubmitButton status={status} />

      <AnimatePresence>
        {status === "success" && (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center text-sm text-emerald-400/80 font-mono tracking-wide"
          >
            ✓ I'll get back to you within 24–48 hours.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}

//Sidebar

function EmailBlock() {
  return (
    <motion.a
      href={`mailto:${profile.email}`}
      whileHover={{ x: 4 }}
      className="group flex items-center justify-between py-5 border-b border-white/[0.06] hover:border-cyan-400/20 transition-colors duration-200"
    >
      <div>
        <p className="font-mono text-[10px] tracking-[0.2em] text-cyan-400/40 uppercase mb-1">Email</p>
        <p className="text-white/80 text-sm group-hover:text-white transition-colors">{profile.email}</p>
      </div>
      <ArrowUpRight
        className="w-4 h-4 text-white/20 group-hover:text-cyan-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </motion.a>
  )
}

// 

function SocialList() {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.2em] text-cyan-400/40 uppercase mb-4">Find me on</p>
      <div className="space-y-1">
        {SOCIAL_LINKS.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 5 }}
            className="group flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white/[0.04] transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.07] group-hover:border-cyan-400/25 transition-colors"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <s.icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors leading-none mb-0.5">
                  {s.name}
                </p>
                <p className="font-mono text-[11px] text-slate-600 group-hover:text-cyan-400/50 transition-colors">
                  {s.handle}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/10 group-hover:text-cyan-400/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        ))}
      </div>
    </div>
  )
}

// 
function AvailabilityStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-2xl border border-white/[0.06] overflow-hidden"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      {/* Status bar */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.05]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="font-mono text-[11px] tracking-widest text-emerald-400/80 uppercase">
          Available for work
        </span>
      </div>
      <div className="px-5 py-4">
        <p className="text-slate-400 text-sm leading-relaxed">
          Open to{" "}
          <span className="text-cyan-300/80 font-medium">freelance projects</span> and{" "}
          <span className="text-cyan-300/80 font-medium">full-time roles</span>.
          Typically responds within 24–48 hours.
        </p>
      </div>
    </motion.div>
  )
}

//  Page

export default function ContactPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
    >
      <AmbientBg />

      <main className="relative z-10 container mx-auto px-4  lg:px-10 max-w-7xl py-16 md:py-24 ">

        {/* ── Page header ── */}
        <div className="mb-20">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-cyan-400/50" />
            <span className="font-mono text-[11px] tracking-[0.25em] text-cyan-400/60 uppercase">
              Contact
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.06)}
            className="font-display font-black leading-[0.92] tracking-tight text-white mb-6"
            style={{ fontSize: "clamp(44px, 9vw, 88px)" }}
          >
            Let's Build
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Something.
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.12)} className="text-slate-400/80 text-lg max-w-lg leading-relaxed">
            Have a project in mind or just want to connect? Drop me a message — I read every one.
          </motion.p>
        </div>

    
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 xl:gap-20 items-start">

          {/* Left */}
          <motion.div {...fadeUp(0.16)}>
            <p className="font-mono text-[10.5px] tracking-[0.22em] text-cyan-400/40 uppercase mb-6">
              ✦ Send a message
            </p>
            <ContactForm />
          </motion.div>

          {/* Right */}
          <motion.aside {...fadeUp(0.22)} className="space-y-8 lg:pt-8">
            <EmailBlock />
            <SocialList />
            <AvailabilityStrip />
          </motion.aside>

        </div>
      </main>
    </div>
  )
}
