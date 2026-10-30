import React from "react";
import { cn } from "@/lib/utils";
import { PackageOpen } from "lucide-react";
import { Button } from "./Button";

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 md:p-12 border border-dashed border-line rounded-sharp bg-surface/50",
        className
      )}
    >
      <div className="w-14 h-14 rounded-full bg-surface-2 flex items-center justify-center text-muted mb-4 border border-line">
        {icon || <PackageOpen className="w-7 h-7" />}
      </div>
      <h3 className="text-18 md:text-24 font-heading font-bold uppercase tracking-wide text-text">
        {title}
      </h3>
      {description && (
        <p className="text-14 text-muted max-w-sm mt-1.5 leading-relaxed">
          {description}
        </p>
      )}
      {actionLabel && onAction && (
        <div className="mt-5">
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
};
