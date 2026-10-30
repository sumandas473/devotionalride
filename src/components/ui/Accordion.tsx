"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  allowMultiple = false,
  className,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-1">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full min-h-[44px] py-3.5 flex items-center justify-between text-left text-text font-heading text-16 font-semibold uppercase tracking-wide hover:text-accent transition duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span>{item.title}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-muted transition-transform duration-smooth",
                  isOpen && "transform rotate-180 text-accent"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-smooth ease-out overflow-hidden text-14 text-muted",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden leading-relaxed">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
