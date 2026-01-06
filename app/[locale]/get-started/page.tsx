// app/[locale]/get-started/page.tsx
import React from "react";
import Link from "next/link";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Locale-aware Link:
 * - 传入 href: "/" 或 "/get-started/nft"（不带 locale）
 * - 输出: "/en" + href 或 "/zh" + href
 */
function L({
  locale,
  href,
  children,
  className,
}: {
  locale: string;
  href: string; // 传入 "/get-started/nft" 这种不带 locale 的路径
  children: React.ReactNode;
  className?: string;
}) {
  const normalized = href.startsWith("/") ? href : `/${href}`;
  const finalHref = normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
  return (
    <Link href={finalHref} className={className}>
      {children}
    </Link>
  );
}

export default async function GetStartedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";

  const t = {
    title: isZh ? "开始了解 WAOC" : "Get started with WAOC",
    subtitle: isZh
      ? "一页看懂：参与方式、NFT 起源、冥想实践、代币与白皮书。"
      : "A single place to understand participation, Genesis NFT, practice, token, and the whitepaper.",
    back: isZh ? "返回首页" : "Back to Home",
    stepsTitle: isZh ? "推荐顺序（不混）" : "Recommended order (no confusion)",
    steps: [
      isZh ? "① 先看 Whitepaper：理解 WAOC 是什么" : "1) Whitepaper: understand what WAOC is",
      isZh ? "② 再看 Genesis NFT：起源与身份层" : "2) Genesis NFT: origin & identity layer",
      isZh ? "③ 然后看 Meditation：实践与长期对齐" : "3) Practice: mindfulness & alignment",
      isZh ? "④ 最后看 Token：参与规则与链上验证" : "4) Token: participation rules & verification",
    ],
    verifyTitle: isZh ? "安全提示（必须）" : "Security notice (must read)",
    verifyDesc: isZh
      ? "参与前请先核验官方链接与合约地址。WAOC 不会私聊索要助记词或私钥。"
      : "Always verify official links and contracts. WAOC will never DM you for seed phrases or private keys.",
    verifyCta: isZh ? "进入 Verify" : "Go to Verify",
    docsCta: isZh ? "查看 Docs" : "Read Docs",
    cards: {
      nft: {
        title: "Genesis NFT",
        desc: isZh
          ? "起源与身份层：了解 777、价值、Mint 与持有者权益。"
          : "Origin & identity layer: 777, value, minting, and holder rights.",
        cta: isZh ? "进入 NFT 页面" : "Open NFT page",
        href: "/get-started/nft",
      },
      meditation: {
        title: isZh ? "冥想 Practice" : "Practice & Mindfulness",
        desc: isZh
          ? "实践与觉察工具：冥想 App、日常练习与长期对齐。"
          : "Tools for reflection: the meditation app and long-term alignment.",
        cta: isZh ? "进入冥想页面" : "Open practice page",
        href: "/get-started/meditation",
      },
      token: {
        title: "WAOC Token",
        desc: isZh
          ? "代币与链上参与：合约、流动性、分配与风险提示。"
          : "Token & on-chain participation: contracts, liquidity, allocation, and notices.",
        cta: isZh ? "进入 Token 页面" : "Open token page",
        href: "/get-started/token",
      },
      whitepaper: {
        title: "Whitepaper",
        desc: isZh
          ? "项目理念与路线图：用最少文字讲清楚 WAOC 的核心。"
          : "Vision & roadmap: the clearest version of what WAOC is building.",
        cta: isZh ? "阅读白皮书" : "Read whitepaper",
        href: "/get-started/whitepaper",
      },
    },
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[rgb(247,246,242)]">
      {/* subtle grid + warm glow */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(220,200,170,0.55),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent_25%,rgba(0,0,0,0.02))]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-16">
          {/* top actions */}
          <div className="flex items-center justify-between">
            <L
              locale={locale}
              href="/"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
            >
              ← {t.back}
            </L>

            <div className="flex items-center gap-3">
              <L
                locale={locale}
                href="/verify"
                className="rounded-xl border border-neutral-200 bg-white/70 px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm hover:bg-white"
              >
                {t.verifyCta}
              </L>
              <L
                locale={locale}
                href="/docs"
                className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
              >
                {t.docsCta} →
              </L>
            </div>
          </div>

          {/* header */}
          <div className="mt-10">
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
              {t.subtitle}
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {Object.values(t.cards).map((c) => (
              <div
                key={c.href}
                className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur"
              >
                <div className="text-lg font-semibold text-neutral-900">{c.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-neutral-600">{c.desc}</div>

                <div className="mt-5">
                  <L
                    locale={locale}
                    href={c.href}
                    className={cx(
                      "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-95",
                      "bg-[rgb(182,129,78)] text-white"
                    )}
                  >
                    {c.cta} <span aria-hidden>→</span>
                  </L>
                </div>
              </div>
            ))}
          </div>

          {/* Recommended path */}
          <div className="mt-10 rounded-3xl border border-neutral-200 bg-white/65 p-7 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-900">{t.stepsTitle}</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700">
              {t.steps.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-[2px] h-2 w-2 shrink-0 rounded-full bg-neutral-800/60" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security */}
          <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white/70 p-7 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold text-neutral-900">{t.verifyTitle}</div>
              <div className="mt-2 text-sm leading-relaxed text-neutral-600">{t.verifyDesc}</div>
            </div>
            <div className="flex gap-3">
              <L
                locale={locale}
                href="/verify"
                className="rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
              >
                {t.verifyCta}
              </L>
              <L
                locale={locale}
                href="/docs"
                className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
              >
                {t.docsCta} →
              </L>
            </div>
          </div>

          <div className="mt-12 text-xs text-neutral-500">
            © {new Date().getFullYear()} WAOC. All rights reserved.
            <span className="mx-2">•</span>
            {isZh ? "本网站不构成任何投资建议。" : "This site does not constitute financial advice."}
          </div>
        </div>
      </div>
    </main>
  );
}
