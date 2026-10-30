"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Plus, Minus, Phone, Clock, MapPin, Briefcase } from "lucide-react";

export const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleAccordion = (id: string) => {
    setOpenMobileAccordion(openMobileAccordion === id ? null : id);
  };

  return (
    <footer className="w-full bg-black text-white border-t border-line-dark pt-12 md:pt-16 pb-8">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5 COLUMNS GRID (DESKTOP) / ACCORDION (MOBILE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-line-dark">
          {/* Column 1: Store */}
          <div className="space-y-3">
            <div
              onClick={() => toggleAccordion("store")}
              className="flex items-center justify-between cursor-pointer md:cursor-default"
            >
              <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-white">
                STORE
              </h4>
              <span className="md:hidden text-lime">
                {openMobileAccordion === "store" ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </div>
            <div
              className={`space-y-2 text-14 text-gray-400 ${
                openMobileAccordion === "store" ? "block" : "hidden md:block"
              }`}
            >
              <div>
                <a href="#jackets" className="footer-link">Touring Jackets</a>
              </div>
              <div>
                <a href="#gloves" className="footer-link">Riding Gloves</a>
              </div>
              <div>
                <a href="#pants" className="footer-link">Armored Pants</a>
              </div>
              <div>
                <a href="#monsoon" className="footer-link">Monsoon Gear</a>
              </div>
              <div>
                <a href="#luggage" className="footer-link">Tail & Tank Luggage</a>
              </div>
              <div>
                <a href="#accessories" className="footer-link">Hard Armor & Spares</a>
              </div>
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="space-y-3">
            <div
              onClick={() => toggleAccordion("support")}
              className="flex items-center justify-between cursor-pointer md:cursor-default"
            >
              <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-white">
                SUPPORT
              </h4>
              <span className="md:hidden text-lime">
                {openMobileAccordion === "support" ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </div>
            <div
              className={`space-y-2 text-14 text-gray-400 ${
                openMobileAccordion === "support" ? "block" : "hidden md:block"
              }`}
            >
              <div>
                <Link href="/pages/shipping" className="footer-link">Shipping & Delivery</Link>
              </div>
              <div>
                <Link href="/warranty" className="footer-link">Warranty Registration</Link>
              </div>
              <div>
                <Link href="/crash-replacement" className="footer-link">Insurance & Crash Replacement</Link>
              </div>
              <div>
                <Link href="/pages/terms" className="footer-link">Terms & Conditions</Link>
              </div>
              <div>
                <Link href="/pages/privacy" className="footer-link">Privacy Policy (DPDP Act)</Link>
              </div>
              <div>
                <Link href="/pages/returns" className="footer-link">Returns & Exchanges</Link>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-3">
            <div
              onClick={() => toggleAccordion("contact")}
              className="flex items-center justify-between cursor-pointer md:cursor-default"
            >
              <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-white">
                CONTACT US
              </h4>
              <span className="md:hidden text-lime">
                {openMobileAccordion === "contact" ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </div>
            <div
              className={`space-y-3 text-14 text-gray-400 ${
                openMobileAccordion === "contact" ? "block" : "hidden md:block"
              }`}
            >
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-lime shrink-0" />
                <a href="tel:+919733784137" className="hover:text-lime transition">+91 97337 84137</a>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <Clock className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                <span>Mon–Fri: 11:00 – 16:30 IST</span>
              </div>
              <p className="text-12 text-gray-500">
                Email support: <strong className="text-gray-300">support@devotionalride.com</strong>
              </p>
            </div>
          </div>

          {/* Column 4: Careers */}
          <div className="space-y-3">
            <div
              onClick={() => toggleAccordion("careers")}
              className="flex items-center justify-between cursor-pointer md:cursor-default"
            >
              <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-white">
                CAREERS
              </h4>
              <span className="md:hidden text-lime">
                {openMobileAccordion === "careers" ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </div>
            <div
              className={`space-y-2 text-14 text-gray-400 ${
                openMobileAccordion === "careers" ? "block" : "hidden md:block"
              }`}
            >
              <p className="text-13 leading-relaxed text-gray-300">
                We are building the future of Indian adventure riding gear.
              </p>
              <div>
                <a href="#careers" className="footer-link text-lime font-bold">
                  Join #TeamDEVOTIONALRIDE →
                </a>
              </div>
              <div>
                <a href="#designer" className="footer-link">Apparel & Armor Designers</a>
              </div>
              <div>
                <a href="#rider-testing" className="footer-link">Expedition Field Testers</a>
              </div>
            </div>
          </div>

          {/* Column 5: Location */}
          <div className="space-y-3">
            <div
              onClick={() => toggleAccordion("location")}
              className="flex items-center justify-between cursor-pointer md:cursor-default"
            >
              <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-white">
                HQ LOCATION
              </h4>
              <span className="md:hidden text-lime">
                {openMobileAccordion === "location" ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </div>
            <div
              className={`space-y-2 text-14 text-gray-400 ${
                openMobileAccordion === "location" ? "block" : "hidden md:block"
              }`}
            >
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime shrink-0 mt-1" />
                <address className="not-italic text-13 leading-relaxed text-gray-300">
                  Devotional Ride Technologies Pvt. Ltd.<br />
                  Plot 42, Marol Industrial Estate,<br />
                  Andheri East, Mumbai, MH 400093, India
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Socials, Accepted Payments, Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-400">
            <a href="https://x.com" aria-label="Follow Devotional Ride on X" className="hover:text-lime transition">
              <span className="font-heading font-bold text-16">X</span>
            </a>
            <a href="https://instagram.com" aria-label="Follow Devotional Ride on Instagram" className="hover:text-lime transition font-heading font-bold text-16">
              INSTAGRAM
            </a>
            <a href="https://youtube.com" aria-label="Devotional Ride YouTube Channel" className="hover:text-lime transition font-heading font-bold text-16">
              YOUTUBE
            </a>
            <a href="https://facebook.com" aria-label="Devotional Ride Facebook" className="hover:text-lime transition font-heading font-bold text-16">
              FACEBOOK
            </a>
          </div>

          {/* Accepted Indian Payments */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["UPI (GPAY / PHONEPE)", "RUPAY", "VISA", "MASTERCARD", "NETBANKING", "CASH ON DELIVERY"].map((method) => (
              <span
                key={method}
                className="px-2.5 py-1 bg-[#151515] border border-line-dark text-10 font-heading font-bold uppercase tracking-wider text-gray-300 rounded-sharp"
              >
                {method}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-12 text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} <strong>DEVOTIONAL RIDE</strong>. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>

      {/* BACK TO TOP LIME BUTTON (APPEARS AFTER 400px SCROLL) */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-lime text-black border border-black shadow-2xl rounded-sharp flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 animate-slideDown"
        >
          <ArrowUp className="w-6 h-6 stroke-[2.5]" />
        </button>
      )}
    </footer>
  );
};

