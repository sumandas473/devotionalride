import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export interface ReviewStarsProps {
  rating: number; // e.g. 4.5
  max?: number;
  count?: number; // review count e.g. 128 reviews
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onRatingChange?: (newRating: number) => void;
  className?: string;
}

export const ReviewStars: React.FC<ReviewStarsProps> = ({
  rating,
  max = 5,
  count,
  size = "md",
  interactive = false,
  onRatingChange,
  className,
}) => {
  const sizeMap = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }).map((_, idx) => {
          const starValue = idx + 1;
          const isFilled = rating >= starValue;
          const isHalf = !isFilled && rating >= starValue - 0.5;

          return (
            <button
              key={idx}
              type="button"
              disabled={!interactive}
              onClick={() => interactive && onRatingChange?.(starValue)}
              aria-label={`Rate ${starValue} stars`}
              className={cn(
                "transition duration-fast focus-visible:outline-none",
                interactive && "cursor-pointer hover:scale-110",
                !interactive && "cursor-default"
              )}
            >
              <Star
                className={cn(
                  sizeMap[size],
                  isFilled
                    ? "text-accent fill-accent"
                    : isHalf
                    ? "text-accent fill-accent/50"
                    : "text-line fill-surface-2"
                )}
              />
            </button>
          );
        })}
      </div>
      {count !== undefined && (
        <span className="text-12 font-medium text-muted">
          ({count})
        </span>
      )}
    </div>
  );
};
