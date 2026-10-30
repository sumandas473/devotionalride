"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

export interface PDPNavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const PDPNavbar: React.FC<PDPNavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* SECTION 1 — TOP NAVIGATION: Very thin, full-width black navigation bar (24-30px) */}
      <header className="w-full bg-[#000000] text-white sticky top-0 z-50 select-none border-b border-[#1f1f1f]">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 h-[26px] sm:h-[30px] flex items-center justify-between relative text-[11px]">
          {/* Left: Minimal menu button */}
          <div className="flex items-center gap-2">
            <Link
              href="/gloves"
              className="text-gray-400 hover:text-white transition flex items-center gap-1 text-[10px] uppercase font-sans tracking-wider"
            >
              <Menu className="w-3.5 h-3.5 text-gray-300 hover:text-white" />
              <span className="hidden sm:inline">Gloves</span>
            </Link>
          </div>

          {/* Center: Small white RYNOX / DEVOTIONAL RIDE logo in compact, bold, italicized typography */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <Link
              href="/"
              className="flex items-center gap-1.5 group select-none"
            >
              <span className="font-sans font-black italic tracking-tighter uppercase text-white text-[12px] sm:text-[13px] leading-none group-hover:text-[#B7F12B] transition-colors">
                DEVOTIONAL RIDE
              </span>
            </Link>
          </div>

          {/* Right: Tiny search, account, shopping bag icons */}
          <div className="flex items-center gap-3 text-white">
            <button
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
              className="text-gray-300 hover:text-white transition p-0.5"
            >
              <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>

            <Link
              href="/account/login"
              aria-label="Account"
              className="text-gray-300 hover:text-white transition p-0.5 hidden sm:inline"
            >
              <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </Link>

            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`Shopping bag (${cartCount})`}
              className="relative text-gray-300 hover:text-white transition p-0.5 flex items-center"
            >
              <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#B7F12B] text-black font-sans font-extrabold text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Search Input */}
        {isSearchOpen && (
          <div className="w-full bg-[#111111] border-b border-[#222222] py-1.5 px-4 animate-fadeIn">
            <div className="max-w-md mx-auto flex items-center gap-2">
              <Search className="w-3 h-3 text-gray-400" />
              <input
                type="text"
                autoFocus
                placeholder="SEARCH GEAR, ACCESSORIES, APPAREL..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white text-[11px] font-sans uppercase tracking-wider focus:outline-none placeholder-gray-500"
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-400 hover:text-white text-[10px]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Small white breadcrumb area directly below navigation */}
      <div className="w-full bg-[#FFFFFF] border-b border-[#E5E5E5] py-2 px-4 sm:px-8 select-none">
        <div className="max-w-[1400px] mx-auto flex items-center gap-1.5 text-[10px] sm:text-[11px] font-sans text-gray-500 uppercase tracking-wider">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/gloves" className="hover:text-black transition">
            Gloves
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-black font-bold">ADVento Pro Gloves</span>
        </div>
      </div>
    </>
  );
};

