"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const radioGroupItemVariants = cva(
  [
    "group/radio-group-item peer relative flex shrink-0",
    "aspect-square rounded-full border",
    "outline-none",
    "after:absolute after:-inset-x-3 after:-inset-y-2",
    "focus-visible:ring-3",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-checked:border-primary",
    "data-checked:bg-primary",
    "data-checked:text-primary-foreground",
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
          "border-input focus-visible:border-success focus-visible:ring-success/20 data-checked:border-success data-checked:bg-success",
      },

      size: {
        sm: "size-3.5",

        default: "size-4",

        lg: "size-5",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function RadioGroup({
  className,
  orientation = "vertical",
  ...props
}) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      data-orientation={orientation}
      className={cn(
        "grid w-full gap-2",
        orientation === "horizontal" && "grid-flow-col auto-cols-max",
        className
      )}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      data-variant={variant}
      data-size={size}
      className={cn(
        radioGroupItemVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-full items-center justify-center"
      >
        <span className="size-1/2 rounded-full bg-primary-foreground" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export {
  RadioGroup,
  RadioGroupItem,
  radioGroupItemVariants,
};