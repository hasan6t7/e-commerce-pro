import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const skeletonVariants = cva(
  "animate-pulse rounded-md",
  {
    variants: {
      variant: {
        default: "bg-muted",

        soft: "bg-muted/60",

        strong: "bg-muted-foreground/20",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

function Skeleton({
  className,
  variant = "default",
  ...props
}) {
  return (
    <div
      data-slot="skeleton"
      data-variant={variant}
      className={cn(
        skeletonVariants({
          variant,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Skeleton, skeletonVariants };