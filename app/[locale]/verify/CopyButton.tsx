"use client";

import React, { useState } from "react";

export default function CopyButton({
  value,
  label = "Copy",
}: {
  value: string;
  label?: string;
}) {
  const [done, setDone] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      window.setTimeout(() => setDone(false), 1200);
    } catch {
      // fallback: do nothing (some browsers block clipboard)
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-text hover:shadow"
      aria-label={`Copy: ${label}`}
      title={label}
    >
      {done ? "Copied" : label} <span aria-hidden>{done ? "✓" : "⧉"}</span>
    </button>
  );
}
