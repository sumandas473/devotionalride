"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Search, Heart, ShoppingBag, User, Menu, MapPin } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawerMenu } from "./MobileDrawerMenu";

export interface HeaderProps {
  cartCount?: number;
  wishlistCount?: number;
  onOpenCart?: () => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount = 0,
  wishlistCount = 0,
  onOpenCart,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-fast">
        {/* Top Announcement Bar */}
        <div className="bg-surface-2 border-b border-line text-12 text-center py-2 px-4 text-text font-medium flex items-center justify-center gap-2">
          <span className="text-accent font-heading uppercase font-bold tracking-wider">
            FREE PAN-INDIA DELIVERY
          </span>
          <span className="hidden sm:inline text-muted">•</span>
          <span className="hidden sm:inline text-muted">
            On all riding gear & luggage orders above ₹1,999
          </span>
          <span className="text-muted">•</span>
          <Link
            href="/stores"
            className="inline-flex items-center gap-1 text-accent hover:underline font-heading uppercase font-bold"
          >
            <MapPin className="w-3 h-3" />
            <span>Find a Store</span>
          </Link>
        </div>

        {/* Main Navbar */}
        <div
          className={cn(
            "w-full transition-all duration-300",
            isScrolled
              ? "bg-black/95 backdrop-blur-md border-b border-line h-16 shadow-card"
              : "bg-transparent h-20"
          )}
        >
          <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
            {/* Left: Mobile Hamburger & Desktop Mega Menu */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-text hover:text-accent rounded-sharp"
              >
                <Menu className="w-6 h-6" />
              </button>
              <MegaMenu />
            </div>

            {/* Exact Center: Brand Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
              <Link href="/" className="flex items-center select-none group">
                <img
                  src="/assets/logo/devotional-ride-logo.jpeg"
                  alt="Devotional Ride Logo"
                  className={cn(
                    "object-cover rounded-full border border-border shadow-md transition-all duration-300 group-hover:scale-105",
                    isScrolled ? "w-11 h-11 sm:w-13 sm:h-13" : "w-14 h-14 sm:w-16 sm:h-16"
                  )}
                />
              </Link>
            </div>

            {/* Right: Search, Account, Wishlist, Cart */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search gear"
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-text hover:text-accent hover:bg-surface-2 rounded-sharp transition duration-fast"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/account/login"
                aria-label="Customer account"
                className="hidden sm:flex w-11 h-11 min-w-[44px] min-h-[44px] items-center justify-center text-text hover:text-accent hover:bg-surface-2 rounded-sharp transition duration-fast"
              >
                <User className="w-5 h-5" />
              </Link>

              <Link
                href="/account/wishlist"
                aria-label="View wishlist"
                className="relative w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-text hover:text-accent hover:bg-surface-2 rounded-sharp transition duration-fast"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-2 right-2 w-4 h-4 bg-surface-2 border border-accent text-accent font-heading font-bold text-10 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <button
                type="button"
                onClick={onOpenCart}
                aria-label="View shopping cart"
                className="relative h-11 px-3 sm:px-4 min-h-[44px] flex items-center gap-2 bg-accent text-accent-ink font-heading font-extrabold text-14 uppercase tracking-wider rounded-sharp hover:brightness-105 transition duration-fast"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Cart</span>
                <span className="w-5 h-5 bg-accent-ink text-accent rounded-full flex items-center justify-center text-11 font-bold">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      <MobileDrawerMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
