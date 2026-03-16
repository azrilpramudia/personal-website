"use client";

import { cn } from "@/src/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "cursor-pointer rounded-lg px-8 py-3 font-semibold",
        "transition-all duration-300 hover:-translate-y-0.5",
        "flex items-center justify-center gap-2",

        // Variant: primary (mauve filled)
        variant === "primary" && [
          "bg-macchiato-mauve text-macchiato-base",
          "shadow-mauve hover:shadow-mauve-hover",
        ],

        // Variant: secondary (outline)
        variant === "secondary" && [
          "border border-macchiato-surface2 text-macchiato-text bg-transparent",
          "hover:border-macchiato-overlay1",
          "shadow-surface hover:shadow-surface-hover",
        ],

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
