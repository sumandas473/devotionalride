import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  description?: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, id, disabled, checked, ...props }, ref) => {
    const checkboxId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col space-y-1">
        <label
          htmlFor={checkboxId}
          className={cn(
            "inline-flex items-start gap-3 cursor-pointer select-none text-14 text-text",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              ref={ref}
              id={checkboxId}
              type="checkbox"
              disabled={disabled}
              checked={checked}
              className="peer sr-only"
              {...props}
            />
            <div
              className={cn(
                "w-5 h-5 min-w-[20px] rounded-sharp border border-line bg-surface-2 transition duration-fast flex items-center justify-center peer-checked:bg-accent peer-checked:border-accent peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-accent",
                error && "border-danger"
              )}
            >
              <Check className="w-3.5 h-3.5 text-accent-ink stroke-[3] opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
          </div>
          <div>
            {label && <span className="font-medium text-text">{label}</span>}
            {description && (
              <p className="text-12 text-muted leading-tight mt-0.5">
                {description}
              </p>
            )}
          </div>
        </label>
        {error && <p className="text-12 text-danger pl-8">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
