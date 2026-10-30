"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Instagram, Facebook, Youtube, Phone, Mail, Clock } from "lucide-react";

export const GlovesMountainFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#000000] text-white relative select-none">
      {/* DECORATIVE PANORAMIC MOUNTAIN LANDSCAPE ILLUSTRATION */}
      <div className="relative w-full h-[100px] sm:h-[140px] md:h-[160px] overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#D9D9D9]/40 to-[#000000]">
        <svg
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Layer 1: Light Gray Rugged Ridge (#D9D9D9) */}
          <polygon
            points="0,240 0,110 110,80 240,140 420,60 590,130 740,75 910,140 1080,65 1250,130 1440,90 1440,240"
            fill="#D9D9D9"
            opacity="0.5"
          />

          {/* Layer 2: Medium Gray Midground (#A6A6A6) */}
          <polygon
            points="0,240 0,145 160,110 310,175 490,95 650,155 820,105 990,165 1160,110 1330,150 1440,125 1440,240"
            fill="#A6A6A6"
            opacity="0.75"
          />

          {/* Layer 3: Dark Gray Ridge (#666666) */}
          <polygon
            points="0,240 0,170 140,145 280,195 440,130 610,185 760,140 920,195 1080,135 1220,175 1370,150 1440,170 1440,240"
            fill="#666666"
            opacity="0.9"
          />

          {/* Layer 4: Deep Charcoal Foreground Mountain (#222222 to #000000) */}
          <polygon
            points="0,240 0,195 120,175 250,215 390,160 550,210 700,170 850,215 1010,165 1160,195 1300,180 1440,195 1440,240"
            fill="#000000"
          />

          {/* Silhouette of Motorcyclist Riding along Mountain Ridge (Bottom-Right) */}
          <g transform="translate(1180, 145) scale(0.48)" fill="#000000">
            <circle cx="20" cy="45" r="14" fill="#000000" stroke="#333333" strokeWidth="2" />
            <circle cx="75" cy="45" r="14" fill="#000000" stroke="#333333" strokeWidth="2" />
            <path d="M20 45 L45 35 L75 45 L60 25 L35 25 Z" fill="#000000" />
            <line x1="75" y1="45" x2="62" y2="15" stroke="#000000" strokeWidth="3" />
            <line x1="58" y1="15" x2="66" y2="15" stroke="#000000" strokeWidth="3" />
            <circle cx="45" cy="5" r="7" fill="#000000" />
            <path d="M42 12 L50 25 L40 35 L32 25 Z" fill="#000000" />
            <line x1="45" y1="16" x2="62" y2="16" stroke="#000000" strokeWidth="3" />
            <line x1="40" y1="35" x2="52" y2="42" stroke="#000000" strokeWidth="4" />
          </g>
        </svg>

        {/* Seamless blend gradient to black */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* COMPACT MULTI-COLUMN FOOTER NAVIGATION */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 pt-2 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-6 border-b border-[#222222]">
          {/* Column 1: MORE */}
          <div className="space-y-1.5">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-white">
              MORE
            </h4>
            <ul className="space-y-1 text-[10px] font-sans text-gray-400">
              <li>
                <Link href="/about" className="hover:text-[#C8F52B] transition">About Us</Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-[#C8F52B] transition">Our Story</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#C8F52B] transition">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C8F52B] transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: SUPPORT */}
          <div className="space-y-1.5">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-white">
              SUPPORT
            </h4>
            <ul className="space-y-1 text-[10px] font-sans text-gray-400">
              <li>
                <Link href="/faqs" className="hover:text-[#C8F52B] transition">FAQs</Link>
              </li>
              <li>
                <Link href="/pages/shipping" className="hover:text-[#C8F52B] transition">Shipping Information</Link>
              </li>
              <li>
                <Link href="/pages/returns" className="hover:text-[#C8F52B] transition">Returns & Exchanges</Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-[#C8F52B] transition">CE Warranty</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: CONTACT US */}
          <div className="space-y-1.5">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-white">
              CONTACT US
            </h4>
            <ul className="space-y-1 text-[10px] font-sans text-gray-400">
              <li className="flex items-center gap-1.5 text-gray-300">
                <Phone className="w-3 h-3 text-[#C8F52B]" />
                <a href="tel:+919733784137" className="hover:text-[#C8F52B] transition">+91 97337 84137</a>
              </li>
              <li className="flex items-center gap-1.5 text-gray-300">
                <Mail className="w-3 h-3 text-[#C8F52B]" />
                <span>support@devotionalride.com</span>
              </li>
              <li className="flex items-center gap-1.5 text-gray-400 text-[9px]">
                <Clock className="w-2.5 h-2.5 text-[#C8F52B] shrink-0" />
                <span>Mon–Fri: 11:00 – 16:30 IST</span>
              </li>
            </ul>
          </div>

          {/* Column 4: CATEGORIES */}
          <div className="space-y-1.5">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-white">
              CATEGORIES
            </h4>
            <ul className="space-y-1 text-[10px] font-sans text-gray-400">
              <li>
                <span className="text-[#C8F52B] font-semibold">Motorcycle Gloves</span>
              </li>
              <li>
                <Link href="/" className="hover:text-[#C8F52B] transition">Riding Jackets</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#C8F52B] transition">Riding Pants</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#C8F52B] transition">Luggage & Accessories</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <img
              src="/assets/logo/devotional-ride-logo.jpeg"
              alt="Logo"
              className="w-5 h-5 rounded-full object-cover border border-white/20"
            />
            <span className="font-sans font-extrabold text-[11px] uppercase tracking-wider text-white">
              DEVOTIONAL RIDE
            </span>
            <span className="text-[9px] font-sans text-gray-500">
              © {new Date().getFullYear()} ALL RIGHTS RESERVED.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-gray-400">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-[#C8F52B] transition">
                <Instagram className="w-3 h-3" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-[#C8F52B] transition">
                <Facebook className="w-3 h-3" />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-[#C8F52B] transition">
                <Youtube className="w-3 h-3" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-6 h-6 border border-[#333333] hover:border-[#C8F52B] bg-[#111111] hover:bg-[#C8F52B] text-white hover:text-black rounded-sharp flex items-center justify-center transition"
            >
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

