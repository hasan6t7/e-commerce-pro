"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const separatorVariants = cva(
  "shrink-0",
  {
    variants: {
      variant: {
        default: "bg-border",
        muted: "bg-muted",
        primary: "bg-primary",
      },

      orientation: {
        horizontal: "data-horizontal:h-px data-horizontal:w-full",
        vertical: "data-vertical:w-px data-vertical:self-stretch",
      },
    },

    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
    },
  }
);

function Separator({
  className,
  orientation = "horizontal",
  variant = "default",
  ...props
}) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      data-variant={variant}
      className={cn(
        separatorVariants({
          variant,
          orientation,
        }),
        className
      )}
      {...props}
    />
  );
}

export {
  Separator,
  separatorVariants,
};