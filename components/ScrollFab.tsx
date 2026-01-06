import React from "react";

type ScrollControlsProps = {
  /** 可选：自定义 className */
  className?: string;
};

export default function ScrollControls({ className = "" }: ScrollControlsProps) {
  return (
    <div
      className={[
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
        "flex items-center gap-3",
        className,
      ].join(" ")}
    >
      {/* ✅ 纯锚点跳转：不需要 onClick（避免 Next 15 报错） */}
      <a
        href="#top"
        className={[
          "rounded-full px-4 py-2 text-sm font-medium",
          "border border-white/15 bg-black/30 text-white/85",
          "backdrop-blur-md shadow-lg",
          "hover:bg-black/40 hover:text-white",
          "active:scale-[0.98] transition",
        ].join(" ")}
      >
        ↑ Top
      </a>

      <a
        href="#bottom"
        className={[
          "rounded-full px-4 py-2 text-sm font-medium",
          "border border-white/15 bg-black/30 text-white/85",
          "backdrop-blur-md shadow-lg",
          "hover:bg-black/40 hover:text-white",
          "active:scale-[0.98] transition",
        ].join(" ")}
      >
        ↓ Scroll
      </a>
    </div>
  );
}
