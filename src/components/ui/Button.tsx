import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      leftIcon,
      rightIcon,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-heading uppercase tracking-wide transition duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-sharp select-none";

    const variantStyles = {
      primary:
        "bg-accent text-accent-ink hover:brightness-105 active:brightness-95 font-bold shadow-sm",
      secondary:
        "bg-surface-2 text-text border border-line hover:bg-surface hover:text-white",
      ghost:
        "bg-transparent text-text hover:bg-surface-2 hover:text-white",
      danger:
        "bg-danger text-white hover:brightness-110",
      outline:
        "bg-transparent border border-accent text-accent hover:bg-accent hover:text-accent-ink",
    };

    const sizeStyles = {
      sm: "h-9 min-h-[36px] px-3 text-12 gap-1.5",
      md: "h-11 min-h-[44px] px-5 text-14 gap-2", // 44px tap target
      lg: "h-14 min-h-[48px] px-8 text-16 gap-2.5",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
