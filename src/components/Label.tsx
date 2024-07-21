import { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export default function Label({ children, className, ...props }: LabelProps) {
  return (
    <label {...props} className={cn("font-bold text-emerald-500", className)}>
      {children}
    </label>
  );
}
