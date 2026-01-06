// app/[locale]/network/page.tsx
import React from "react";
import Link from "next/link";

function LocaleLink({
  locale,
  href,
  className,
  children,
}: {
  locale: string;
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const normalized = href.startsWith("/") ? href : `/${href}`;
  return (
    <Link href={`/${locale}${normalized}`} className={className}>
      {children}
    </Link>
  );
}

function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export default async function NetworkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";

  const DEX_URL =
    "https://dexscreener.com/solana/3mJvSq4KG51KfsCZCafsHfHjFs5st361a55ipYDERdW9";

  const t = {
    back: isZh ? "返回首页" : "Back to Home",
    title: isZh ? "WAOC Network" : "WAOC Network",
    subtitle: isZh
      ? "公共链上层：用于支撑信任、协作与集体参与（以可验证为前提）。"
      : "A public on-chain layer designed to support trust, coordination, and collective participation.",
    ctaVerify: isZh ? "去 Verify 核验" : "Go to Verify",
    ctaDocs: isZh ? "阅读 Docs" : "Read Docs",
    sec1: isZh ? "定位" : "Purpose",
    sec1p: isZh
      ? "Network 是 WAOC 的“协作基础设施层”。核心不是复杂，而是可验证：信息清晰、链接可信、规则透明。"
      : "Network is WAOC’s coordination infrastructure layer. The focus is not complexity—it’s verifiability: clear information, trusted links, transparent rules.",
    sec2: isZh ? "你可以做什么" : "What you can do",
    bullets: isZh
      ? [
          "先核验（Verify）：官方链接/合约/入口集中在一处",
          "了解参与路径（Get Started）：从白皮书到 NFT/Practice/Token",
          "关注链上透明度：用可验证的页面追踪信息",
        ]
      : [
          "Verify first: official links and contracts in one place",
          "Follow the participation path via Get Started",
          "Use verifiable on-chain pages to track information",
        ],
    hubTitle: isZh ? "快速入口" : "Quick paths",
    hub1: isZh ? "Get Started（参与路线）" : "Get Started (participation hub)",
    hub2: isZh ? "Token 页面（规则与风险提示）" : "Token page (rules & risk notice)",
    hub3: isZh ? "Dexscreener（查看市场页面）" : "Dexscreener (market view)",
    footer: isZh ? "本网站不构成任何投资建议。" : "This site does not constitute financial advice.",
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[rgb(247,246,242)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(220,200,170,0.55),transparent_55%)]" />
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
          <div className="flex items-center justify-between">
            <LocaleLink
              locale={locale}
              href="/"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
            >
              ← {t.back}
            </LocaleLink>

            <div className="flex items-center gap-3">
              <LocaleLink
                locale={locale}
                href="/verify"
                className="rounded-xl border border-neutral-200 bg-white/70 px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm hover:bg-white"
              >
                {t.ctaVerify}
              </LocaleLink>
              <LocaleLink
                locale={locale}
                href="/docs"
                className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
              >
                {t.ctaDocs} →
              </LocaleLink>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
              {t.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-5">
            <div className="md:col-span-3 rounded-3xl border border-neutral-200 bg-white/70 p-7 shadow-sm backdrop-blur">
              <div className="text-lg font-semibold text-neutral-900">{t.sec1}</div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{t.sec1p}</p>

              <div className="mt-7 text-lg font-semibold text-neutral-900">{t.sec2}</div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700">
                {t.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-800/50" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 rounded-3xl border border-neutral-200 bg-white/70 p-7 shadow-sm backdrop-blur">
              <div className="text-lg font-semibold text-neutral-900">{t.hubTitle}</div>

              <div className="mt-5 flex flex-col gap-3">
                <LocaleLink
                  locale={locale}
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[rgb(182,129,78)] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  {t.hub1} <span aria-hidden>→</span>
                </LocaleLink>

                <LocaleLink
                  locale={locale}
                  href="/get-started/token"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
                >
                  {t.hub2} <span aria-hidden>→</span>
                </LocaleLink>

                <ExternalLink
                  href={DEX_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
                >
                  {t.hub3} <span aria-hidden>↗</span>
                </ExternalLink>
              </div>
            </div>
          </div>

          <div className="mt-12 text-xs text-neutral-500">
            © {new Date().getFullYear()} WAOC. {t.footer}
          </div>
        </div>
      </div>
    </main>
  );
}
