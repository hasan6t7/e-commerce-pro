import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
  [
    "flex w-full",
    "rounded-lg border",
    "bg-transparent",
    "transition-colors",
    "outline-none",
    "placeholder:text-muted-foreground",
    "focus-visible:ring-3",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "dark:bg-input/30",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "border-input focus-visible:border-ring focus-visible:ring-ring/50",

        error:
          "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",

        success:
          "border-success focus-visible:border-success focus-visible:ring-success/20",
      },

      size: {
        sm: "min-h-20 px-2 py-1.5 text-xs",

        default: "min-h-24 px-2.5 py-2 text-sm",

        lg: "min-h-32 px-3 py-2.5 text-base",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Textarea({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      data-variant={variant}
      data-size={size}
      className={cn(
        textareaVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  );
}

export { Textarea, textareaVariants };