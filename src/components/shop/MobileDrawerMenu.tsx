"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { X, ChevronRight, ChevronDown, MapPin, Shield, LifeBuoy, FileText } from "lucide-react";
import { navigationCategories } from "./MegaMenu";

export interface MobileDrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawerMenu: React.FC<MobileDrawerMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex lg:hidden animate-in fade-in duration-fast"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div className="relative w-full max-w-[340px] bg-surface h-full flex flex-col border-r border-line shadow-card z-10 animate-in slide-in-from-left duration-smooth">
        {/* Drawer Header */}
        <div className="h-16 px-5 border-b border-line flex items-center justify-between">
          <span className="font-heading font-extrabold text-18 uppercase tracking-wider text-text">
            DEVOTIONAL <span className="text-accent">RIDE</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-text rounded-sharp"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto divide-y divide-line">
          {/* Main Categories Accordion */}
          <div className="py-2">
            {navigationCategories.map((cat) => {
              const isExpanded = expandedCategory === cat.title;
              return (
                <div key={cat.title}>
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedCategory(isExpanded ? null : cat.title)
                    }
                    className="w-full min-h-[48px] px-5 py-3 flex items-center justify-between text-left font-heading text-16 font-bold uppercase tracking-wide text-text hover:text-accent transition duration-fast"
                  >
                    <span>{cat.title}</span>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-accent" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-muted" />
                    )}
                  </button>

                  {/* Submenu links */}
                  {isExpanded && (
                    <div className="bg-surface-2 px-5 py-3 space-y-3">
                      <Link
                        href={cat.href}
                        onClick={onClose}
                        className="block text-12 font-heading font-extrabold uppercase text-accent tracking-widest pb-1 border-b border-line"
                      >
                        View All {cat.title} →
                      </Link>
                      {cat.columns.map((col) => (
                        <div key={col.heading} className="space-y-1.5 pt-1">
                          <span className="text-11 font-heading uppercase text-muted font-bold tracking-wider">
                            {col.heading}
                          </span>
                          {col.links.map((link) => (
                            <Link
                              key={link.title}
                              href={link.href}
                              onClick={onClose}
                              className="block py-1 text-14 text-text hover:text-accent min-h-[36px] flex items-center justify-between"
                            >
                              <span>{link.title}</span>
                              {link.badge && (
                                <span className="text-10 font-heading px-1.5 py-0.5 rounded-sharp bg-accent/20 text-accent font-bold">
                                  {link.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Core Brand & Support Links */}
          <div className="py-3 px-5 space-y-2">
            <Link
              href="/stores"
              onClick={onClose}
              className="flex items-center gap-3 py-2.5 text-14 text-text hover:text-accent font-heading uppercase font-semibold min-h-[44px]"
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span>Dealer & Store Locator</span>
            </Link>
            <Link
              href="/warranty"
              onClick={onClose}
              className="flex items-center gap-3 py-2.5 text-14 text-text hover:text-accent font-heading uppercase font-semibold min-h-[44px]"
            >
              <Shield className="w-4 h-4 text-accent" />
              <span>Warranty Registration</span>
            </Link>
            <Link
              href="/crash-replacement"
              onClick={onClose}
              className="flex items-center gap-3 py-2.5 text-14 text-text hover:text-accent font-heading uppercase font-semibold min-h-[44px]"
            >
              <LifeBuoy className="w-4 h-4 text-accent" />
              <span>Crash-Replacement Policy</span>
            </Link>
            <Link
              href="/blog"
              onClick={onClose}
              className="flex items-center gap-3 py-2.5 text-14 text-text hover:text-accent font-heading uppercase font-semibold min-h-[44px]"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Riding Blog & Guides</span>
            </Link>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-5 border-t border-line bg-surface-2 space-y-3">
          <Link
            href="/account/login"
            onClick={onClose}
            className="w-full h-11 min-h-[44px] bg-accent text-accent-ink font-heading uppercase font-bold text-14 rounded-sharp flex items-center justify-center transition duration-fast"
          >
            Sign In / Register
          </Link>
          <div className="text-center text-12 text-muted">
            GST Compliant • Pan-India Express Delivery
          </div>
        </div>
      </div>
    </div>
  );
};
