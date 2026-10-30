"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Instagram, Facebook, Youtube, Phone, Mail, Clock } from "lucide-react";

export const MountainFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white relative select-none">
      {/* DECORATIVE PANORAMIC MOUNTAIN LANDSCAPE ILLUSTRATION (COMPACT HEIGHT) */}
      <div className="relative w-full h-[120px] sm:h-[160px] md:h-[180px] overflow-hidden bg-gradient-to-b from-white via-[#2a2a2a] to-black">
        {/* Layered Mountain Silhouette Vectors (Grayscale, blending to pure black) */}
        <svg
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Distant Mountain Peak Layer (Light Gray) */}
          <polygon
            points="0,260 0,120 120,90 280,160 460,70 620,140 780,85 940,150 1100,75 1280,140 1440,100 1440,260"
            fill="#555555"
            opacity="0.35"
          />

          {/* Midground Rugged Ridge Layer (Darker Gray) */}
          <polygon
            points="0,260 0,160 180,120 320,190 520,110 680,170 860,115 1020,180 1200,125 1360,165 1440,140 1440,260"
            fill="#333333"
            opacity="0.65"
          />

          {/* Foreground Mountain Range (Pure Black) */}
          <polygon
            points="0,260 0,190 140,170 260,210 420,140 580,200 720,160 880,210 1040,150 1180,190 1320,170 1440,190 1440,260"
            fill="#000000"
          />

          {/* Silhouette of a Motorcyclist Riding along the Mountain Landscape (Near Bottom-Right) */}
          <g transform="translate(1120, 130) scale(0.55)" fill="#000000">
            {/* Motorcycle Silhouette */}
            <circle cx="20" cy="45" r="14" fill="#000000" stroke="#444444" strokeWidth="2" />
            <circle cx="75" cy="45" r="14" fill="#000000" stroke="#444444" strokeWidth="2" />
            <path d="M20 45 L45 35 L75 45 L60 25 L35 25 Z" fill="#000000" />
            <line x1="75" y1="45" x2="62" y2="15" stroke="#000000" strokeWidth="3" />
            <line x1="58" y1="15" x2="66" y2="15" stroke="#000000" strokeWidth="3" />
            <circle cx="45" cy="5" r="7" fill="#000000" />
            <path d="M42 12 L50 25 L40 35 L32 25 Z" fill="#000000" />
            <line x1="45" y1="16" x2="62" y2="16" stroke="#000000" strokeWidth="3" />
            <line x1="40" y1="35" x2="52" y2="42" stroke="#000000" strokeWidth="4" />
          </g>
        </svg>

        {/* Seamless fade to pure black */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* FOOTER NAVIGATION COLUMNS (COMPACT PADDING) */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pt-2 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 pb-8 border-b border-[#222222]">
          {/* COLUMN 1: MORE */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-wider text-white">
              MORE
            </h4>
            <ul className="space-y-1.5 text-[11px] font-sans text-gray-400">
              <li>
                <Link href="/about" className="hover:text-lime transition">About Us</Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-lime transition">Our Story</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-lime transition">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-lime transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: SUPPORT */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-wider text-white">
              SUPPORT
            </h4>
            <ul className="space-y-1.5 text-[11px] font-sans text-gray-400">
              <li>
                <Link href="/faqs" className="hover:text-lime transition">FAQs</Link>
              </li>
              <li>
                <Link href="/pages/shipping" className="hover:text-lime transition">Shipping Information</Link>
              </li>
              <li>
                <Link href="/pages/returns" className="hover:text-lime transition">Returns</Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-lime transition">Warranty</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT US */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-wider text-white">
              CONTACT US
            </h4>
            <ul className="space-y-1.5 text-[11px] font-sans text-gray-400">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-3.5 h-3.5 text-lime" />
                <a href="tel:+919733784137" className="hover:text-lime transition">+91 97337 84137</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-3.5 h-3.5 text-lime" />
                <span>support@devotionalride.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-[10px]">
                <Clock className="w-3 h-3 text-lime mt-0.5 shrink-0" />
                <span>Mon–Fri: 11:00 – 16:30 IST</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CATEGORIES */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-wider text-white">
              CATEGORIES
            </h4>
            <ul className="space-y-1.5 text-[11px] font-sans text-gray-400">
              <li>
                <Link href="/gloves" className="hover:text-lime transition text-lime font-bold">Gloves Collection (43 Styles)</Link>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-lime transition">Featured Gear</a>
              </li>
              <li>
                <Link href="/jackets" className="hover:text-lime transition">Riding Jackets</Link>
              </li>
              <li>
                <Link href="/gloves" className="hover:text-lime transition">Gloves Collection</Link>
              </li>
              <li>
                <a href="#categories" className="hover:text-lime transition">Riding Pants</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-lime transition">Helmets</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-lime transition">Accessories</a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <img
                src="/assets/logo/devotional-ride-logo.jpeg"
                alt="Devotional Ride Logo"
                className="w-6 h-6 rounded-full object-cover border border-white/20"
              />
              <span className="font-sans font-extrabold text-12 uppercase tracking-brand text-white">
                DEVOTIONAL RIDE
              </span>
            </div>
            <span className="text-[10px] font-sans text-gray-500">
              © {new Date().getFullYear()} DEVOTIONAL RIDE. ALL RIGHTS RESERVED.
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3.5 text-gray-400">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-lime transition">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-lime transition">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-lime transition">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 border border-[#333333] hover:border-lime bg-[#111111] hover:bg-lime text-white hover:text-black rounded-sharp flex items-center justify-center transition"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
