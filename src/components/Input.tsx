import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ children, className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        "font-bold border w-full mt-2 mb-2 text-emerald-500 text-lg p-3 rounded-xl focus:ring-4 ring-emerald-500 outline-none ",
        className
      )}
    >
      {children}
    </input>
  );
}
