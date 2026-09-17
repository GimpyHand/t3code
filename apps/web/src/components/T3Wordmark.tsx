import type { HTMLAttributes } from "react";

import { cn } from "../lib/utils";

/**
 * Brand mark for the "And I" half of the And I Code lockup.
 * Keeps the same baseline slot the old T3 SVG occupied.
 */
export function T3Wordmark({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-baseline font-semibold tracking-tight [text-box:trim-both_cap_alphabetic]",
        className,
      )}
    >
      And I
    </span>
  );
}
