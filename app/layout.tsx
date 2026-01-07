import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "WAOC — We Are One Connection",
  description:
    "WAOC is a long-term effort to restore trust, coordination, and human connection through transparent on-chain systems.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* ✅ 只保留结构类，背景/字体颜色交给 globals.css（避免 hydration mismatch） */}
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
