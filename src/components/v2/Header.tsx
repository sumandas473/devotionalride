"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, X, Plus, ArrowRight, Trash2 } from "lucide-react";
import { ProductItem } from "@/data/products";

export interface HeaderProps {
  cartItems: { product: ProductItem; quantity: number; size: string; color: string }[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  onRemoveFromCart: (index: number) => void;
  onUpdateCartQty: (index: number, qty: number) => void;
  cartBadgePop: boolean;
  onSelectProduct: (p: ProductItem) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItems,
  isCartOpen,
  setIsCartOpen,
  onRemoveFromCart,
  onUpdateCartQty,
  cartBadgePop,
  onSelectProduct,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedNavGroup, setExpandedNavGroup] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
        setIsCartOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsCartOpen]);

  const navGroups = [
    {
      title: "Touring Gear",
      links: [
        { name: "All-Weather Touring Jackets", href: "#jackets" },
        { name: "Mesh Summer Jackets", href: "#jackets" },
        { name: "Touring Pants & Armor", href: "#pants" },
        { name: "Rain Liners & Thermal Mid-Layers", href: "#monsoon" },
      ],
    },
    {
      title: "Offroad Gear",
      links: [
        { name: "Rally Enduro Jerseys", href: "#offroad" },
        { name: "Articulated Offroad Pants", href: "#pants" },
        { name: "Bionic Chest & Back Protectors", href: "#pro" },
        { name: "Offroad Roost Deflectors", href: "#accessories" },
      ],
    },
    {
      title: "Performance Layers",
      links: [
        { name: "Compression Baselayers", href: "#baselayers" },
        { name: "Balaclavas & Neck Tubes", href: "#accessories" },
        { name: "Moisture-Wicking Thermal Sets", href: "#gt" },
      ],
    },
    {
      title: "Luggage",
      links: [
        { name: "Magnetic & Strap Tank Bags", href: "#tailbags" },
        { name: "Dry-Spec Submersible Saddlebags", href: "#saddlebags" },
        { name: "Rear Seat Tail Bags 25L–60L", href: "#tailbags" },
        { name: "Hydration Backpacks", href: "#luggage" },
      ],
    },
    {
      title: "Motorcycle Hard Parts",
      links: [
        { name: "Aluminium Handguards", href: "#accessories" },
        { name: "Engine Crash Guards", href: "#accessories" },
        { name: "Headlight Grilles & Bash Plates", href: "#accessories" },
      ],
    },
    {
      title: "Accessories",
      links: [
        { name: "Luggage Tie-down Bungees", href: "#luggage" },
        { name: "Waterproof Tool Rolls", href: "#luggage" },
        { name: "Visor Cleaners & Waterproofing Spray", href: "#accessories" },
      ],
    },
    {
      title: "Official Merch",
      links: [
        { name: "Devotional Ride T-Shirts", href: "#" },
        { name: "Trucker Caps & Beanies", href: "#" },
        { name: "Reflective Helmet Decals", href: "#" },
      ],
    },
    {
      title: "Store Locator",
      links: [
        { name: "Exclusive Brand Stores", href: "/stores" },
        { name: "Authorized Dealerships", href: "/stores" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Track Your Order", href: "/track-order" },
        { name: "Warranty Registration", href: "/warranty" },
        { name: "Crash-Replacement Guarantee", href: "/crash-replacement" },
        { name: "Returns & Exchanges", href: "/pages/returns" },
      ],
    },
    {
      title: "Our World",
      links: [
        { name: "Expedition Stories", href: "/blog" },
        { name: "Riding Guides & Technical Manuals", href: "/blog" },
      ],
    },
    {
      title: "Careers",
      links: [
        { name: "Join #TeamDEVOTIONALRIDE", href: "/careers" },
      ],
    },
    {
      title: "CE Declarations",
      links: [
        { name: "EN 17092-3:2020 PPE Certificates", href: "/pages/ce-declarations" },
        { name: "EN 1621-1 / EN 1621-2 Armor Tests", href: "/pages/ce-declarations" },
      ],
    },
  ];

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <>
      {/* FIXED HEADER: Transparent initially, Black after scroll */}
      <header
        className={`fixed top-0 left-0 w-full z-40 text-white transition-all duration-300 ${
          isScrolled ? "h-[60px] bg-black/95 backdrop-blur-md shadow-nav" : "h-[80px] bg-transparent"
        }`}
      >
        <div className="relative max-w-site mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Hamburger & Search */}
          <div className="flex items-center gap-3">
            {/* Morphing Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              className="w-11 h-11 flex flex-col items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <span
                className={`w-6 h-[2px] bg-white transition-all duration-300 transform ${
                  isMenuOpen ? "rotate-45 translate-y-[8px] bg-lime" : ""
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-white transition-all duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-white transition-all duration-300 transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-[8px] bg-lime" : ""
                }`}
              />
            </button>

            {/* Search Icon */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search bar"
              className="w-11 h-11 flex items-center justify-center text-white hover:text-lime transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* CENTER: Exact Centered Brand Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <Link
              href="/"
              className="flex items-center justify-center select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <img
                src="/assets/logo/devotional-ride-logo.jpeg"
                alt="Devotional Ride Logo"
                className={`object-cover rounded-full border border-white/20 transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? "w-11 h-11 sm:w-13 sm:h-13" : "w-14 h-14 sm:w-16 sm:h-16"
                }`}
              />
            </Link>
          </div>

          {/* RIGHT: Login & Cart */}
          <div className="flex items-center gap-2">
            <Link
              href="/account/login"
              aria-label="User account login"
              className="hidden sm:flex items-center gap-1.5 text-14 font-heading font-bold uppercase tracking-wider text-white hover:text-lime transition-colors duration-200 px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <User className="w-4 h-4" />
              <span>LOG IN</span>
            </Link>

            {/* Cart Trigger with Scale Pop Animation */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Open shopping cart (${totalCartCount} items)`}
              className="relative w-11 h-11 flex items-center justify-center text-white hover:text-lime transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span
                  key={cartBadgePop ? "pop" : "static"}
                  className={`absolute top-1.5 right-1.5 w-5 h-5 bg-lime text-black font-heading font-extrabold text-11 rounded-full flex items-center justify-center transition-transform ${
                    cartBadgePop ? "animate-scalePop" : ""
                  }`}
                >
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* FULL-WIDTH SEARCH OVERLAY (DROPS DOWN FROM TOP) */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-line-dark shadow-2xl py-6 px-4 animate-slideDown z-50">
            <div className="max-w-2xl mx-auto relative flex items-center">
              <Search className="w-5 h-5 text-gray-400 absolute left-4" />
              <input
                type="text"
                autoFocus
                placeholder="SEARCH TOURING JACKETS, GLOVES, TAIL BAGS, ARMOR..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-12 bg-[#151515] border border-line-dark text-white text-15 font-heading uppercase tracking-wide placeholder:text-gray-500 rounded-sharp focus:outline-none focus:border-lime"
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
                className="absolute right-3 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {searchQuery && (
              <div className="max-w-2xl mx-auto mt-3 text-12 text-gray-400 flex items-center justify-between">
                <span>Showing search results for &quot;{searchQuery}&quot;</span>
                <span className="text-lime cursor-pointer hover:underline">View all results →</span>
              </div>
            )}
          </div>
        )}
      </header>

      {/* LEFT MENU DRAWER (350ms slide-in over 50% black backdrop) */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation drawer"
          className="fixed inset-0 z-50 flex animate-fadeIn"
        >
          {/* 50% Black Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer Body */}
          <div className="relative w-full max-w-[360px] bg-black text-white h-full flex flex-col border-r border-line-dark shadow-2xl z-10 transition-transform duration-350 transform translate-x-0 overflow-hidden">
            {/* Drawer Header */}
            <div className="h-[70px] px-6 border-b border-line-dark flex items-center justify-between">
              <span className="font-heading font-extrabold text-18 uppercase tracking-wider text-white">
                DEVOTIONAL <span className="text-lime">RIDE</span>
              </span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu drawer"
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Accordion Navigation Groups */}
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-line-dark no-scrollbar">
              {navGroups.map((group) => {
                const isExpanded = expandedNavGroup === group.title;
                return (
                  <div key={group.title} className="py-2.5">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedNavGroup(isExpanded ? null : group.title)
                      }
                      className="w-full min-h-[44px] flex items-center justify-between text-left font-heading font-extrabold text-15 uppercase tracking-wider text-white hover:text-lime transition"
                    >
                      <span>{group.title}</span>
                      <Plus
                        className={`w-4 h-4 text-lime transition-transform duration-300 transform ${
                          isExpanded ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* Animated accordion content */}
                    {isExpanded && (
                      <div className="pt-2 pb-3 pl-3 space-y-2 border-l-2 border-lime/40 mt-1">
                        {group.links.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-14 text-gray-300 hover:text-lime transition py-1"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-line-dark bg-[#111111] space-y-3">
              <Link
                href="/account/login"
                onClick={() => setIsMenuOpen(false)}
                className="w-full h-11 btn-wipe-primary flex items-center justify-center text-14"
              >
                LOG IN / REGISTER
              </Link>
              <p className="text-[11px] font-heading uppercase text-gray-400 text-center tracking-wider">
                PAN-INDIA DELIVERY • WARRANTY PROTECTED
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MINI-CART SLIDE-IN PANEL (FROM RIGHT) */}
      {isCartOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Shopping Cart Panel"
          className="fixed inset-0 z-50 flex justify-end animate-fadeIn"
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Cart Panel */}
          <div className="relative w-full max-w-[420px] bg-white text-[#111111] h-full flex flex-col shadow-2xl z-10 transition-transform duration-350">
            {/* Header */}
            <div className="h-[70px] px-6 bg-black text-white flex items-center justify-between">
              <div>
                <span className="font-heading font-extrabold text-16 uppercase tracking-wider text-white">
                  YOUR SHOPPING CART
                </span>
                <p className="text-12 text-lime font-heading uppercase">
                  You have {totalCartCount} item{totalCartCount === 1 ? "" : "s"} in your cart
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart"
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#e3e3e3]">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
                  <ShoppingBag className="w-12 h-12 text-gray-300" />
                  <h4 className="font-heading font-extrabold text-18 uppercase text-[#111111]">
                    YOUR CART IS EMPTY
                  </h4>
                  <p className="text-14 text-gray-500 max-w-xs">
                    Explore our touring jackets, modular luggage, and impact armor.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsCartOpen(false)}
                    className="btn-wipe-primary h-11 px-6 text-13 mt-2"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={`${item.product.id}-${idx}`} className="py-4 first:pt-0 flex gap-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-24 object-cover bg-bg-grey rounded-sharp border border-border-light shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h5
                            onClick={() => {
                              setIsCartOpen(false);
                              onSelectProduct(item.product);
                            }}
                            className="font-heading font-bold text-14 uppercase text-[#111111] hover:text-lime cursor-pointer line-clamp-1"
                          >
                            {item.product.name}
                          </h5>
                          <button
                            type="button"
                            onClick={() => onRemoveFromCart(idx)}
                            aria-label={`Remove ${item.product.name}`}
                            className="text-gray-400 hover:text-red-500 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-12 text-gray-500 font-heading uppercase mt-0.5">
                          {item.color} • SIZE: {item.size}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-border-light rounded-sharp">
                          <button
                            type="button"
                            onClick={() => onUpdateCartQty(idx, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-bg-grey text-14 font-bold"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-13 font-bold">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateCartQty(idx, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-bg-grey text-14 font-bold"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-heading font-extrabold text-15 text-black">
                          ₹ {(item.product.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Summary & Checkout Actions */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-[#e3e3e3] bg-bg-grey space-y-4">
                <div className="flex items-center justify-between text-16">
                  <span className="font-heading font-bold uppercase text-[#111111]">TOTAL</span>
                  <span className="font-heading font-extrabold text-20 text-black">
                    ₹ {totalCartPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="text-12 text-gray-500">
                  MRP inclusive of all taxes. Free shipping on orders above ₹1,999.
                </p>

                <div className="space-y-2 pt-1">
                  <Link
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full h-12 btn-wipe-primary flex items-center justify-center text-14"
                  >
                    CHECK OUT
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full h-12 btn-wipe-secondary flex items-center justify-center text-14"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

