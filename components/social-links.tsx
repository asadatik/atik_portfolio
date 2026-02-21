"use client";

import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialLinks() {
  return (
    <div className="fixed  right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 text-2xl">
      
      <Link
        href="https://wa.me/8801835210087"
        target="_blank"
        aria-label="WhatsApp"
        className="text-green-500 hover:scale-110 transition-all duration-200"
      >
        <FaWhatsapp />
      </Link>

      <Link
        href="https://linkedin.com/in/asadujjaman-atik"
        target="_blank"
        aria-label="LinkedIn"
        className="text-blue-600 hover:scale-110 transition-all duration-200"
      >
        <FaLinkedin />
      </Link>

      <Link
        href="https://github.com/asadatik"
        target="_blank"
        aria-label="GitHub"
        className="text-gray-400 hover:scale-110 transition-all duration-200"
      >
        <FaGithub />
      </Link>

      <Link
        href="mailto:asadatik1995@gmail.com"
        aria-label="Email"
        className="text-red-500 hover:scale-110 transition-all duration-200"
      >
        <MdEmail />
      </Link>

    </div>
  );
}