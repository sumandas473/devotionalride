import React from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
}) => {
  return (
    <div className={cn("border-b border-line flex items-center gap-2 overflow-x-auto", className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            role="tab"
            aria-selected={isActive}
            className={cn(
              "h-11 min-h-[44px] px-4 font-heading text-14 uppercase tracking-wider font-semibold whitespace-nowrap transition duration-fast border-b-2 relative flex items-center gap-2 -mb-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent",
              isActive
                ? "border-accent text-accent font-bold"
                : "border-transparent text-muted hover:text-text hover:border-line"
            )}
          >
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={cn(
                  "text-12 px-1.5 py-0.2 rounded-sharp font-body font-normal",
                  isActive
                    ? "bg-accent/20 text-accent"
                    : "bg-surface-2 text-muted"
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
