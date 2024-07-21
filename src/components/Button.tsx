import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "border-4 border-emerald-500 rounded-3xl text-white bg-emerald-500 font-bold text-xl focus:ring-4 ring-emerald-400 outline-none",
        className
      )}
    >
      {children}
    </button>
  );
}
