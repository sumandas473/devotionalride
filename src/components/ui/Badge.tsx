import React from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck, Sparkles, Tag, Clock } from "lucide-react";

export type BadgeVariant =
  | "ce-a"
  | "ce-aa"
  | "new"
  | "sale"
  | "restocking"
  | "default"
  | "success"
  | "danger";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
  className,
  ...props
}) => {
  const getBadgeContent = () => {
    switch (variant) {
      case "ce-a":
        return (
          <>
            <ShieldCheck className="w-3 h-3 text-accent mr-1" />
            <span>CE CLASS A</span>
          </>
        );
      case "ce-aa":
        return (
          <>
            <ShieldCheck className="w-3 h-3 text-accent mr-1" />
            <span>CE CLASS AA</span>
          </>
        );
      case "new":
        return (
          <>
            <Sparkles className="w-3 h-3 mr-1 text-accent" />
            <span>NEW ARRIVAL</span>
          </>
        );
      case "sale":
        return (
          <>
            <Tag className="w-3 h-3 mr-1" />
            <span>{children || "SALE"}</span>
          </>
        );
      case "restocking":
        return (
          <>
            <Clock className="w-3 h-3 mr-1 text-muted" />
            <span>RESTOCKING SOON</span>
          </>
        );
      default:
        return children;
    }
  };

  const variantStyles: Record<BadgeVariant, string> = {
    "ce-a": "bg-surface-2 border border-line text-text",
    "ce-aa": "bg-surface border border-accent/60 text-accent font-bold",
    new: "bg-surface-2 border border-accent/40 text-text",
    sale: "bg-danger text-white font-bold",
    restocking: "bg-surface-2 border border-line text-muted",
    default: "bg-surface-2 text-text border border-line",
    success: "bg-success/20 text-success border border-success/40",
    danger: "bg-danger/20 text-danger border border-danger/40",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-12 font-heading uppercase tracking-wider rounded-sharp select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {getBadgeContent()}
    </span>
  );
};
