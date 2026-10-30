"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

export interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header: Transparent initially, turns Black after scroll */}
      <header
        className={`fixed top-0 left-0 w-full z-40 px-4 sm:px-8 transition-all duration-300 ${isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg py-2.5 sm:py-3 border-b border-[#222222]"
            : "bg-transparent py-4 sm:py-6"
          }`}
      >
        <div className="max-w-[1400px] mx-auto relative flex items-center justify-between min-h-[50px] sm:min-h-[56px]">
          {/* Left: Minimal Menu Button & Quick Links */}
          <div className="flex-1 flex items-center justify-start gap-4">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle menu"
              className="text-white hover:text-lime transition p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <nav className="hidden lg:flex items-center gap-6 text-[11px] font-sans font-semibold tracking-wider text-white/90 uppercase">
              <Link href="/jackets" className="hover:text-lime transition">Jackets</Link>
              <Link href="/gloves" className="hover:text-lime transition">Gloves</Link>
              <a href="/#pro-series" className="hover:text-lime transition">Pro Series</a>
              <a href="/#featured-products" className="hover:text-lime transition">Featured Gear</a>
            </nav>
          </div>

          {/* Exact Center: Brand Logo (Centered with absolute positioning) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <Link
              href="/"
              className="flex items-center justify-center select-none group"
            >
              <img
                src="/assets/logo/devotional-ride-logo.jpeg"
                alt="Devotional Ride Logo"
                className={`object-cover rounded-full border-2 border-white/30 shadow-xl transition-all duration-300 group-hover:scale-105 ${isScrolled
                    ? "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                    : "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  }`}
              />
            </Link>
          </div>

          {/* Right: Minimal Navigation Icons */}
          <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4 text-white">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="p-1.5 text-white/90 hover:text-lime transition"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <Link
              href="/account/login"
              aria-label="User Account"
              className="p-1.5 text-white/90 hover:text-lime transition hidden sm:inline-block"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`Shopping bag (${cartCount} items)`}
              className="relative p-1.5 text-white/90 hover:text-lime transition"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-lime text-black font-sans font-extrabold text-[10px] rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-[#222222] py-4 px-6 z-50 animate-fadeIn">
            <div className="max-w-xl mx-auto relative flex items-center">
              <Search className="w-4 h-4 text-gray-400 absolute left-4" />
              <input
                type="text"
                autoFocus
                placeholder="SEARCH JACKETS, GLOVES, PANTS, LUGGAGE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-11 pr-10 bg-[#151515] border border-[#333333] text-white text-13 font-sans uppercase tracking-wider rounded-sharp focus:outline-none focus:border-lime"
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Flyout */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-full max-w-[300px] bg-black text-white h-full p-6 flex flex-col justify-between border-r border-[#222222] z-10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#222222]">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/logo/devotional-ride-logo.jpeg"
                    alt="Logo"
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="font-sans font-extrabold text-13 uppercase tracking-wider text-white">
                    DEVOTIONAL RIDE
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-4 text-13 font-sans font-semibold uppercase tracking-wider">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-lime">Home</Link>
                <Link href="/jackets" onClick={() => setIsMobileMenuOpen(false)} className="block text-[#C8F52B] hover:underline">Jackets Collection (42 Styles)</Link>
                <Link href="/gloves" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-lime">Gloves Collection (43 Styles)</Link>
                <a href="/#categories" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-lime">Category Grid</a>
                <a href="/#pro-series" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-lime">Pro Series</a>
                <a href="/#featured-products" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-lime">Featured Products</a>
                <a href="/#campaign" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-lime">Protection & Comfort</a>
                <a href="/#essentials" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-lime">Ride Essentials</a>
              </div>
            </div>

            <div className="text-11 text-gray-400 border-t border-[#222222] pt-4">
              © DEVOTIONAL RIDE • ENGINEERED MOTORCYCLE GEAR
            </div>
          </div>
        </div>
      )}
    </>
  );
};

