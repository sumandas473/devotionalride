import React from "react";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

export interface QuantityStepperProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md";
}

export const QuantityStepper: React.FC<QuantityStepperProps> = ({
  value,
  min = 1,
  max = 99,
  onChange,
  disabled = false,
  className,
  size = "md",
}) => {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrement = () => {
    if (value < max) onChange(value + 1);
  };

  const isSm = size === "sm";

  return (
    <div
      className={cn(
        "inline-flex items-center border border-line bg-surface-2 rounded-sharp select-none",
        isSm ? "h-9" : "h-11 min-h-[44px]", // 44px minimum tap target
        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        aria-label="Decrease quantity"
        className={cn(
          "flex items-center justify-center text-text hover:text-accent hover:bg-surface disabled:opacity-40 disabled:hover:text-text disabled:hover:bg-transparent transition active:scale-95",
          isSm ? "w-9 h-9" : "w-11 h-11 min-w-[44px]"
        )}
      >
        <Minus className="w-3.5 h-3.5" />
      </button>

      <span
        className={cn(
          "font-heading font-bold text-center text-text",
          isSm ? "w-8 text-14" : "w-12 text-16"
        )}
        aria-live="polite"
      >
        {value}
      </span>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        aria-label="Increase quantity"
        className={cn(
          "flex items-center justify-center text-text hover:text-accent hover:bg-surface disabled:opacity-40 disabled:hover:text-text disabled:hover:bg-transparent transition active:scale-95",
          isSm ? "w-9 h-9" : "w-11 h-11 min-w-[44px]"
        )}
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
