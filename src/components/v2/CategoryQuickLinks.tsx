"use client";

import React from "react";
import { CATEGORY_QUICK_LINKS } from "@/data/products";

export const CategoryQuickLinks: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-border-light py-5">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Category quick links"
          className="flex items-center justify-start sm:justify-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar whitespace-nowrap py-1"
        >
          {CATEGORY_QUICK_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="quick-link-item text-14 sm:text-15 tracking-wider px-1 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

