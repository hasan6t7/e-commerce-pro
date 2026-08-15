import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        /* =================================
           DEFAULT
        ================================= */
        default:
          "bg-primary text-primary-foreground [a]:hover:bg-primary/80",

        /* =================================
           BRAND
        ================================= */
        brand:
          "bg-primary text-primary-foreground [a]:hover:bg-primary-dark",

        /* =================================
           SECONDARY
        ================================= */
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",

        /* =================================
           SUCCESS
        ================================= */
        success:
          "bg-success/10 text-success [a]:hover:bg-success/20",

        /* =================================
           WARNING
        ================================= */
        warning:
          "bg-warning/10 text-warning [a]:hover:bg-warning/20",

        /* =================================
           DANGER
        ================================= */
        danger:
          "bg-danger/10 text-danger [a]:hover:bg-danger/20",

        /* =================================
           INFO
        ================================= */
        info:
          "bg-info/10 text-info [a]:hover:bg-info/20",

        /* =================================
           DESTRUCTIVE
        ================================= */
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",

        /* =================================
           OUTLINE
        ================================= */
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",

        /* =================================
           GHOST
        ================================= */
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",

        /* =================================
           LINK
        ================================= */
        link:
          "text-primary underline-offset-4 hover:underline",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant = "default",
  render,
  ...props
}) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants };