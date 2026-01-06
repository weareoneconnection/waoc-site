"use client";
import React from "react";

export function Button({
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition will-change-transform";
  const styles = {
    primary:
      "bg-energy text-black shadow-glow hover:shadow-glowStrong hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "glass text-white hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "bg-transparent text-white/80 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
  } as const;

  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
