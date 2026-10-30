import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "rectangular" | "circular" | "text";
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = "rectangular",
  ...props
}) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-pulse bg-surface-2/80 rounded-sharp",
        variant === "circular" && "rounded-full",
        variant === "text" && "h-4 w-full rounded-sharp my-1",
        className
      )}
      {...props}
    />
  );
};
