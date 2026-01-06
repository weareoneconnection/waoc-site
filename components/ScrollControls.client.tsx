"use client";

export default function ScrollToTop() {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="glass rounded-full px-4 py-2 text-sm text-white/80 hover:text-white"
      >
        ↑ Back to top
      </button>
    </div>
  );
}
