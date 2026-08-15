import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cva } from "class-variance-authority";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  [
    "peer relative flex shrink-0 items-center justify-center",
    "rounded-[4px] border",
    "transition-colors outline-none",
    "after:absolute after:-inset-x-3 after:-inset-y-2",
    "focus-visible:ring-3",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "group-has-disabled/field:opacity-50",
    "data-checked:bg-primary data-checked:text-primary-foreground",
    "dark:data-checked:bg-primary",
    "[&>svg]:pointer-events-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "border-input focus-visible:border-ring focus-visible:ring-ring/50 data-checked:border-primary",

        error:
          "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20 data-checked:border-destructive",

        success:
          "border-input focus-visible:border-success focus-visible:ring-success/20 data-checked:border-success data-checked:bg-success",
      },

      size: {
        sm: "size-3.5 [&>svg]:size-3",

        default: "size-4 [&>svg]:size-3.5",

        lg: "size-5 [&>svg]:size-4",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Checkbox({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      data-variant={variant}
      data-size={size}
      className={cn(
        checkboxVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export {
  Checkbox,
  checkboxVariants,
};