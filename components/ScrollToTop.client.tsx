"use client";

import React from "react";

export default function ScrollToTop() {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="glass rounded-full px-4 py-2 text-sm text-white/80 hover:text-white"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        ↑ Back to top
      </button>
    </div>
  );
}
