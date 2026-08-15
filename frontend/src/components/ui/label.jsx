import * as React from "react";

import { cn } from "@/lib/utils";

function Label({
  className,
  required = false,
  children,
  ...props
}) {
  return (
    <label
      data-slot="label"
      data-required={required}
      className={cn(
        [
          "flex items-center gap-1.5",
          "text-sm leading-none font-medium",
          "text-foreground",
          "select-none",
          "group-data-[disabled=true]:pointer-events-none",
          "group-data-[disabled=true]:opacity-50",
          "peer-disabled:cursor-not-allowed",
          "peer-disabled:opacity-50",
        ].join(" "),
        className
      )}
      {...props}
    >
      {children}

      {required && (
        <span
          aria-hidden="true"
          className="text-danger"
        >
          *
        </span>
      )}
    </label>
  );
}

export { Label };