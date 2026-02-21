"use client";

import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: FaWhatsapp,
    href: "https://wa.me/8801835210087",
    label: "WhatsApp",
    delay: 0,
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/asadujjaman-atik",
    label: "LinkedIn",
    delay: 0.1,
  },
  {
    icon: FaGithub,
    href: "https://github.com/asadatik",
    label: "GitHub",
    delay: 0.2,
  },
  {
    icon: MdEmail,
    href: "mailto:asadatik1995@gmail.com",
    label: "Email",
    delay: 0.3,
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      className="fixed right-3 md:right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-4"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
     

      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <motion.div
            key={social.label}
            initial={{ opacity: 0, x: 50, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              delay: social.delay,
              duration: 0.5,
              type: "spring",
              stiffness: 300,
            }}
            className="group relative"
          >
      {/* Glow background effect */}
            <motion.div
              className="absolute -inset-2 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main button */}
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14  rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border-2 border-cyan-400/40 backdrop-blur-xl shadow-lg hover:border-cyan-300/70 transition-all duration-300 group"
            >
              {/* Icon container */}
              <motion.div
                className="relative z-10 text-xl md:text-2xl text-cyan-300 drop-shadow-lg"
                whileHover={{
                  rotate: 360,
                  textShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
                }}
                transition={{ duration: 0.6 }}
              >
                <Icon />
              </motion.div>

           {/* Inner glow on hover */}
            <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  background:
                    "radial-gradient(circle at center, rgba(6, 182, 212, 0.2), transparent)",
                }}
              />
            </Link>

       {/* Tooltip label */}
            <motion.div
              className="absolute right-14 md:right-18  top-1/2 -translate-y-1/2 p-1  bg-gradient-to-r from-cyan-500/30 to-blue-500/20 border border-cyan-400/40 rounded-lg backdrop-blur-xl text-cyan-100 text-xs  whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg"
              initial={{ x: 10 }}
              whileHover={{ x: 0 }}
            >
              {social.label}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400/60 rounded-full" />
            </motion.div>
          </motion.div>
        );
      })}

     
    </motion.div>
  );
}
