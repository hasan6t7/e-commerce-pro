import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "w-full min-w-0 rounded-lg border bg-transparent",
    "text-base transition-colors outline-none",
    "placeholder:text-muted-foreground",
    "file:inline-flex file:border-0 file:bg-transparent file:font-medium",
    "focus-visible:ring-3",
    "disabled:pointer-events-none disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "md:text-sm",
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
        sm:
          "h-7 px-2 text-xs",

        default:
          "h-9 px-3 py-1",

        lg:
          "h-11 px-3.5 text-base",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Input({
  className,
  type = "text",
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      data-variant={variant}
      data-size={size}
      className={cn(
        inputVariants({
          variant,
          size,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Input, inputVariants };