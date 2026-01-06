import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "WAOC — We Are One Connection",
  description:
    "WAOC is a long-term effort to restore trust, coordination, and human connection through transparent on-chain systems.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[rgb(247,246,242)] text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
