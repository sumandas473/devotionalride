import React from "react";
import { cn } from "@/lib/utils";

export interface RadioOption {
  label: React.ReactNode;
  value: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  label,
  error,
  className,
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <span className="block text-12 font-heading uppercase tracking-wide text-muted font-semibold">
          {label}
        </span>
      )}
      <div className="space-y-2">
        {options.map((option) => {
          const isChecked = value === option.value;
          return (
            <label
              key={option.value}
              className={cn(
                "flex items-start gap-3 p-3 rounded-sharp border border-line bg-surface cursor-pointer select-none transition duration-fast hover:border-accent/40",
                isChecked && "border-accent bg-surface-2",
                option.disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <div className="relative flex items-center justify-center mt-0.5">
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={isChecked}
                  disabled={option.disabled}
                  onChange={() => onChange?.(option.value)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 rounded-full border border-line bg-surface-2 peer-checked:border-accent flex items-center justify-center transition">
                  <div
                    className={cn(
                      "w-2.5 h-2.5 rounded-full bg-accent transition-transform scale-0",
                      isChecked && "scale-100"
                    )}
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-14 font-medium text-text">{option.label}</div>
                {option.description && (
                  <p className="text-12 text-muted mt-0.5">{option.description}</p>
                )}
              </div>
            </label>
          );
        })}
      </div>
      {error && <p className="text-12 text-danger">{error}</p>}
    </div>
  );
};
