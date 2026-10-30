import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      className={cn("flex items-center justify-center gap-1.5", className)}
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
        className="h-11 w-11 min-w-[44px] min-h-[44px] flex items-center justify-center border border-line bg-surface-2 text-text rounded-sharp hover:border-accent hover:text-accent disabled:opacity-30 disabled:pointer-events-none transition duration-fast"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "h-11 w-11 min-w-[44px] min-h-[44px] flex items-center justify-center font-heading text-14 uppercase tracking-wider font-bold rounded-sharp border transition duration-fast",
              isActive
                ? "bg-accent border-accent text-accent-ink"
                : "border-line bg-surface-2 text-text hover:border-accent hover:text-accent"
            )}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
        className="h-11 w-11 min-w-[44px] min-h-[44px] flex items-center justify-center border border-line bg-surface-2 text-text rounded-sharp hover:border-accent hover:text-accent disabled:opacity-30 disabled:pointer-events-none transition duration-fast"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
