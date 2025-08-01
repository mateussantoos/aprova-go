import { forwardRef } from "react";
import type { InputProps } from "../../types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, containerClassName, icon, ...props }, ref) => {
    const baseInputClasses =
      "w-full pr-4 py-3 rounded-2xl border-2 text-neutral-700 border-gray-200 focus:border-primary transition font-semibold focus:outline-none";
    const paddingClass = icon ? "pl-12" : "pl-4";

    return (
      <div className={`relative w-full ${containerClassName || ""}`}>
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </span>
        )}
        <input
          ref={ref}
          className={`${baseInputClasses} ${paddingClass} ${className || ""}`}
          {...props}
        />
      </div>
    );
  }
);
