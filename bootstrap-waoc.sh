#!/usr/bin/env bash
set -euo pipefail

# 1) 确保目录存在（兼容你已创建的结构）
mkdir -p app/'[locale]'/{token,nft,meditation,community,docs} components/ui lib i18n messages

# 2) package.json（可直接跑）
cat > package.json <<'JSON'
{
  "name": "waoc-site",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.1.6",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "next-intl": "^3.10.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.3",
    "eslint": "^9",
    "eslint-config-next": "15.1.6"
  }
}
JSON

# 3) tsconfig + next-env
cat > tsconfig.json <<'JSON'
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
JSON

cat > next-env.d.ts <<'TS'
/// <reference types="next" />
/// <reference types="next/image-types/global" />
TS

# 4) Next config
cat > next.config.mjs <<'JS'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};
export default nextConfig;
JS

# 5) Tailwind config
cat > tailwind.config.ts <<'TS'
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070A12",
        panel: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.14)",
        glow1: "#8B5CF6",
        glow2: "#22D3EE",
        accent: "#F472B6",
        text: "rgba(255,255,255,0.86)",
        muted: "rgba(255,255,255,0.62)"
      },
      boxShadow: {
        glow: "0 0 24px rgba(139,92,246,0.35), 0 0 48px rgba(34,211,238,0.20)",
        glowStrong:
          "0 0 28px rgba(139,92,246,0.50), 0 0 64px rgba(34,211,238,0.28)"
      },
      backgroundImage: {
        energy:
          "linear-gradient(135deg, rgba(139,92,246,0.95), rgba(34,211,238,0.95))"
      },
      backdropBlur: { xl: "20px" },
      borderRadius: { xl: "18px", "2xl": "24px" }
    }
  },
  plugins: []
} satisfies Config;
TS

# 6) PostCSS config
cat > postcss.config.mjs <<'JS'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
JS

# 7) global css (cosmic dark energy)
cat > app/globals.css <<'CSS'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: dark; }
html, body { height: 100%; }
body { background:#070A12; color: rgba(255,255,255,0.86); }

.cosmic-bg {
  background-image:
    radial-gradient(1200px 600px at 10% 10%, rgba(139,92,246,0.18), transparent 60%),
    radial-gradient(900px 500px at 80% 20%, rgba(34,211,238,0.14), transparent 55%),
    radial-gradient(900px 700px at 40% 80%, rgba(244,114,182,0.10), transparent 55%),
    linear-gradient(180deg, #070A12 0%, #050611 100%);
  position: relative;
  overflow: hidden;
}

.cosmic-bg::before{
  content:"";
  position:absolute; inset:0;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.10) 0 1px, transparent 2px),
    radial-gradient(circle at 70% 40%, rgba(255,255,255,0.08) 0 1px, transparent 2px),
    radial-gradient(circle at 40% 80%, rgba(255,255,255,0.06) 0 1px, transparent 2px);
  background-size: 220px 220px, 260px 260px, 300px 300px;
  opacity: .25;
  pointer-events:none;
}

.glass {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.14);
  backdrop-filter: blur(20px);
}
CSS

# 8) next-intl middleware
cat > middleware.ts <<'TS'
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "zh"],
  defaultLocale: "en"
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};
TS

# 9) next-intl request config
cat > i18n/request.ts <<'TS'
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
TS

# 10) WAOC links config
cat > lib/waoc.ts <<'TS'
export const WAOC_LINKS = {
  telegram: "https://t.me/WAOCGlobalCommunity",
  x: "https://x.com/waoconnectone?s=21",
  dex: "https://dexscreener.com/solana/3mJvSq4KG51KfsCZCafsHfHjFs5st361a55ipYDERdW9",
  meditation: "https://waoc-meditation-mvp-test.vercel.app/",
  mint: "https://waoc-genesis-mint.vercel.app/",
  carrd: "https://weareoneconnection.carrd.co/"
};
TS

# 11) messages
cat > messages/en.json <<'JSON'
{
  "nav": {
    "token": "Token",
    "meditation": "Meditation",
    "nft": "Genesis NFT",
    "community": "Community",
    "docs": "Docs"
  },
  "home": {
    "badge": "Official WAOC Hub • Verified Links • Anti-scam",
    "title": "We Are One Connection",
    "subtitle": "Meditation × NFT × Community — turning connection into shared on-chain value.",
    "desc": "WAOC is a community-driven ecosystem built on love, peace, unity, and collective awakening. Always verify links and addresses from this official site.",
    "cta": {
      "tg": "Join Telegram ↗",
      "x": "Follow X ↗",
      "app": "Try Meditation App ↗",
      "mint": "Mint Genesis NFT ↗"
    }
  }
}
JSON

cat > messages/zh.json <<'JSON'
{
  "nav": {
    "token": "代币",
    "meditation": "冥想 App",
    "nft": "创世 NFT",
    "community": "社区",
    "docs": "文档"
  },
  "home": {
    "badge": "WAOC 官方入口 • 认证链接 • 防诈骗",
    "title": "We Are One Connection",
    "subtitle": "冥想 × NFT × 社区 —— 把“连接”变成可验证的链上共同价值。",
    "desc": "WAOC 是一个以爱、和平、团结、觉醒为核心的社区生态。请始终以官网为准核对所有链接与地址，谨防钓鱼与仿盘。",
    "cta": {
      "tg": "加入 Telegram ↗",
      "x": "关注 X ↗",
      "app": "体验冥想 App ↗",
      "mint": "铸造创世 NFT ↗"
    }
  }
}
JSON

# 12) UI components
cat > components/ui/Button.tsx <<'TSX'
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
TSX

cat > components/ui/CopyAddress.tsx <<'TSX'
"use client";
import { useState } from "react";

export function CopyAddress({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <div className="glass rounded-2xl p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-2 flex items-center justify-between gap-3">
        <code className="text-xs text-white/85 break-all">{value}</code>
        <button
          onClick={copy}
          className="rounded-xl px-3 py-2 text-xs font-semibold bg-white/5 border border-white/10 hover:shadow-glow"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
TSX

# 13) Navbar + Footer
cat > components/Navbar.tsx <<'TSX'
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Navbar({ locale }: { locale: "en" | "zh" }) {
  const pathname = usePathname(); // /en/nft
  const rest = pathname.replace(/^\/(en|zh)/, "");
  const to = (l: "en" | "zh") => `/${l}${rest || ""}`;
  const t = useTranslations("nav");

  return (
    <header className="mx-auto max-w-6xl px-5 pt-6">
      <div className="glass rounded-2xl px-5 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-semibold tracking-wide">
          WAOC<span className="text-white/60"> • We Are One Connection</span>
        </Link>

        <nav className="flex items-center gap-5 text-sm text-white/75">
          <Link href={`/${locale}/token`} className="hover:text-white">{t("token")}</Link>
          <Link href={`/${locale}/meditation`} className="hover:text-white">{t("meditation")}</Link>
          <Link href={`/${locale}/nft`} className="hover:text-white">{t("nft")}</Link>
          <Link href={`/${locale}/community`} className="hover:text-white">{t("community")}</Link>
          <Link href={`/${locale}/docs`} className="hover:text-white">{t("docs")}</Link>

          <div className="ml-2 flex items-center rounded-xl border border-white/10 bg-white/5 p-1">
            <Link href={to("en")} className={`px-3 py-1 rounded-lg ${locale === "en" ? "bg-white/10 text-white" : ""}`}>EN</Link>
            <Link href={to("zh")} className={`px-3 py-1 rounded-lg ${locale === "zh" ? "bg-white/10 text-white" : ""}`}>中文</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
TSX

cat > components/Footer.tsx <<'TSX'
import { WAOC_LINKS } from "@/lib/waoc";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10">
      <div className="glass rounded-2xl p-6 text-sm text-white/70">
        <div className="font-semibold text-white">Security Notice</div>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>WAOC team will never DM you for seed phrases or private keys.</li>
          <li>Only trust links published on this official website.</li>
          <li>Always verify before connecting your wallet.</li>
        </ul>

        <div className="mt-5 flex flex-wrap gap-3">
          <a className="text-white/80 hover:text-white underline underline-offset-4" href={WAOC_LINKS.telegram} target="_blank">Telegram</a>
          <a className="text-white/80 hover:text-white underline underline-offset-4" href={WAOC_LINKS.x} target="_blank">X</a>
          <a className="text-white/80 hover:text-white underline underline-offset-4" href={WAOC_LINKS.dex} target="_blank">Dexscreener</a>
        </div>

        <div className="mt-4 text-xs text-white/55">
          Disclaimer: This website is for information only and does not constitute financial advice.
        </div>
      </div>
    </footer>
  );
}
TSX

# 14) App routes
cat > app/page.tsx <<'TSX'
import { redirect } from "next/navigation";
export default function Root() {
  redirect("/en");
}
TSX

cat > app/'[locale]'/layout.tsx <<'TSX'
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: "en" | "zh" };
}) {
  const messages = await getMessages({ locale: params.locale });

  return (
    <html lang={params.locale}>
      <body className="cosmic-bg min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <div className="relative">
            <Navbar locale={params.locale} />
            <main className="mx-auto max-w-6xl px-5 py-12">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
TSX

cat > app/'[locale]'/page.tsx <<'TSX'
import Link from "next/link";
import { useTranslations } from "next-intl";
import { WAOC_LINKS } from "@/lib/waoc";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const t = useTranslations("home");

  return (
    <section className="grid gap-10 lg:grid-cols-2 items-center">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
          ✦ {t("badge")}
        </div>

        <h1 className="mt-5 text-4xl font-bold leading-tight">
          {t("title")}
          <span className="block text-white/70 text-2xl mt-2">
            {t("subtitle")}
          </span>
        </h1>

        <p className="mt-5 text-white/70 leading-relaxed">{t("desc")}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link href={WAOC_LINKS.telegram} target="_blank"><Button>{t("cta.tg")}</Button></Link>
          <Link href={WAOC_LINKS.x} target="_blank"><Button variant="secondary">{t("cta.x")}</Button></Link>
          <Link href={WAOC_LINKS.meditation} target="_blank"><Button variant="secondary">{t("cta.app")}</Button></Link>
          <Link href={WAOC_LINKS.mint} target="_blank"><Button>{t("cta.mint")}</Button></Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a className="glass rounded-2xl p-4 hover:shadow-glow transition" href={WAOC_LINKS.dex} target="_blank">
            <div className="text-xs text-white/60">Market</div>
            <div className="mt-1 font-semibold">Dexscreener ↗</div>
            <div className="mt-1 text-sm text-white/60">Track WAOC on-chain activity.</div>
          </a>
          <a className="glass rounded-2xl p-4 hover:shadow-glow transition" href={WAOC_LINKS.carrd} target="_blank">
            <div className="text-xs text-white/60">Legacy Site</div>
            <div className="mt-1 font-semibold">WAOC Carrd ↗</div>
            <div className="mt-1 text-sm text-white/60">Reference landing.</div>
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="glass rounded-2xl p-8">
          <div className="text-sm text-white/70">WAOC Ecosystem</div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="glass rounded-2xl p-4">
              <div className="text-xs text-white/60">Token</div>
              <div className="mt-1 font-semibold">Community Value</div>
              <div className="mt-1 text-sm text-white/60">Transparent, verifiable, shared.</div>
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="text-xs text-white/60">Meditation</div>
              <div className="mt-1 font-semibold">Inner Awakening</div>
              <div className="mt-1 text-sm text-white/60">Daily practice meets Web3 identity.</div>
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="text-xs text-white/60">Genesis NFT</div>
              <div className="mt-1 font-semibold">777 Origins</div>
              <div className="mt-1 text-sm text-white/60">Limited supply, symbolic meaning.</div>
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="text-xs text-white/60">Community</div>
              <div className="mt-1 font-semibold">One Connection</div>
              <div className="mt-1 text-sm text-white/60">Co-create the mission together.</div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -top-10 -right-10 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "rgba(139,92,246,0.25)" }} />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "rgba(34,211,238,0.18)" }} />
      </div>
    </section>
  );
}
TSX

# simple placeholder pages
for p in token nft meditation community docs; do
cat > "app/[locale]/$p/page.tsx" <<'TSX'
export default function Page() {
  return (
    <div className="glass rounded-2xl p-8">
      <h1 className="text-2xl font-bold">Coming Soon</h1>
      <p className="mt-2 text-white/70">This page will be filled with WAOC content next.</p>
    </div>
  );
}
TSX
done

echo "✅ Bootstrap complete."
echo "Next:"
echo "  npm i"
echo "  npm run dev"
