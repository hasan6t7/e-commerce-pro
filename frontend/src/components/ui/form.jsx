import * as React from "react";

import { cn } from "@/lib/utils";

function Field({
  className,
  children,
  ...props
}) {
  return (
    <div
      data-slot="field"
      className={cn(
        "flex flex-col gap-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function FormMessage({
  className,
  children,
  variant = "error",
  ...props
}) {
  if (!children) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      data-variant={variant}
      className={cn(
        "text-xs",
        variant === "error" && "text-danger",
        variant === "success" && "text-success",
        variant === "info" && "text-info",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

function FieldGroup({
  className,
  ...props
}) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "flex flex-col gap-5",
        className
      )}
      {...props}
    />
  );
}

export {
  Field,
  FieldGroup,
  FormMessage,
};
