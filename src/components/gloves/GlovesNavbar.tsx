"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

export interface GlovesNavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const GlovesNavbar: React.FC<GlovesNavbarProps> = ({
  cartCount,
  onOpenCart,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full bg-[#000000] text-white border-b border-[#1a1a1a] sticky top-0 z-50 select-none">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 h-7 sm:h-8 flex items-center justify-between relative text-[11px]">
        {/* Left: Minimal subtle menu / search */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition text-[10px] uppercase font-sans tracking-wider hidden sm:inline"
          >
            ← Home
          </Link>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="text-gray-300 text-[10px] font-sans uppercase tracking-widest font-semibold">
            Gloves Collection
          </span>
        </div>

        {/* Center: Compact, Bold, Italicized White Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link
            href="/"
            aria-label="Devotional Ride"
            className="flex items-center gap-1.5 group select-none"
          >
            <span className="font-sans font-black italic tracking-tighter uppercase text-white text-[13px] sm:text-[14px] leading-none group-hover:text-[#C8F52B] transition-colors">
              DEVOTIONAL RIDE
            </span>
          </Link>
        </div>

        {/* Right: Tiny Search, Account, Shopping Bag */}
        <div className="flex items-center gap-3 sm:gap-4 text-white">
          <button
            type="button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search gloves"
            className="text-gray-300 hover:text-white transition p-0.5"
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          <Link
            href="/account/login"
            aria-label="Account"
            className="text-gray-300 hover:text-white transition p-0.5 hidden sm:inline"
          >
            <User className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Cart (${cartCount})`}
            className="relative text-gray-300 hover:text-white transition p-0.5 flex items-center"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#C8F52B] text-black font-sans font-extrabold text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Tiny Search Dropdown */}
      {isSearchOpen && (
        <div className="w-full bg-[#111111] border-b border-[#222222] py-1.5 px-4 animate-fadeIn">
          <div className="max-w-md mx-auto flex items-center gap-2">
            <Search className="w-3 h-3 text-gray-400" />
            <input
              type="text"
              autoFocus
              placeholder="FILTER GLOVES BY MODEL (AIR GT, HELIUM, APEX...)"
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
  );
};

