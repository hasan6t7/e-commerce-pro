"use client";

import * as React from "react";
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { cva } from "class-variance-authority";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sheetVariants = cva(
  [
    "fixed z-50 flex flex-col",
    "bg-popover bg-clip-padding",
    "text-sm text-popover-foreground",
    "shadow-xl",
    "transition duration-200 ease-in-out",
    "data-ending-style:opacity-0",
    "data-starting-style:opacity-0",
  ].join(" "),
  {
    variants: {
      side: {
        top: [
          "inset-x-0 top-0",
          "h-auto",
          "border-b",
          "data-ending-style:translate-y-[-2.5rem]",
          "data-starting-style:translate-y-[-2.5rem]",
        ].join(" "),

        bottom: [
          "inset-x-0 bottom-0",
          "h-auto",
          "border-t",
          "data-ending-style:translate-y-[2.5rem]",
          "data-starting-style:translate-y-[2.5rem]",
        ].join(" "),

        left: [
          "inset-y-0 left-0",
          "h-full",
          "border-r",
          "data-ending-style:translate-x-[-2.5rem]",
          "data-starting-style:translate-x-[-2.5rem]",
        ].join(" "),

        right: [
          "inset-y-0 right-0",
          "h-full",
          "border-l",
          "data-ending-style:translate-x-[2.5rem]",
          "data-starting-style:translate-x-[2.5rem]",
        ].join(" "),
      },

      size: {
        sm: "",
        default: "",
        lg: "",
        full: "",
      },
    },

    compoundVariants: [
      {
        side: ["left", "right"],
        size: "sm",
        className: "w-3/4 sm:max-w-sm",
      },
      {
        side: ["left", "right"],
        size: "default",
        className: "w-3/4 sm:max-w-md",
      },
      {
        side: ["left", "right"],
        size: "lg",
        className: "w-3/4 sm:max-w-lg",
      },
      {
        side: ["left", "right"],
        size: "full",
        className: "w-full",
      },
      {
        side: ["top", "bottom"],
        size: "sm",
        className: "max-h-[40vh]",
      },
      {
        side: ["top", "bottom"],
        size: "default",
        className: "max-h-[60vh]",
      },
      {
        side: ["top", "bottom"],
        size: "lg",
        className: "max-h-[80vh]",
      },
      {
        side: ["top", "bottom"],
        size: "full",
        className: "max-h-screen",
      },
    ],

    defaultVariants: {
      side: "right",
      size: "default",
    },
  }
);

function Sheet({
  ...props
}) {
  return (
    <SheetPrimitive.Root
      data-slot="sheet"
      {...props}
    />
  );
}

function SheetTrigger({
  ...props
}) {
  return (
    <SheetPrimitive.Trigger
      data-slot="sheet-trigger"
      {...props}
    />
  );
}

function SheetClose({
  ...props
}) {
  return (
    <SheetPrimitive.Close
      data-slot="sheet-close"
      {...props}
    />
  );
}

function SheetPortal({
  ...props
}) {
  return (
    <SheetPrimitive.Portal
      data-slot="sheet-portal"
      {...props}
    />
  );
}

function SheetOverlay({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50",
        "bg-black/50",
        "supports-backdrop-filter:backdrop-blur-xs",
        "transition-opacity duration-200",
        "data-ending-style:opacity-0",
        "data-starting-style:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  size = "default",
  showCloseButton = true,
  ...props
}) {
  return (
    <SheetPortal>
      <SheetOverlay />

      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        data-size={size}
        className={cn(
          sheetVariants({
            side,
            size,
          }),
          className
        )}
        {...props}
      >
        {children}

        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                className="absolute top-3 right-3"
              />
            }
          >
            <XIcon />

            <span className="sr-only">
              Close
            </span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
}

function SheetHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(
        "flex flex-col gap-1 p-4",
        "border-b",
        className
      )}
      {...props}
    />
  );
}

function SheetFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "mt-auto flex flex-col gap-2 p-4",
        "border-t",
        className
      )}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "font-heading text-base font-medium text-foreground",
        className
      )}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  sheetVariants,
};