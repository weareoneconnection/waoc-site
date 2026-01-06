// app/[locale]/get-started/nft/page.tsx
import React from "react";
import Link from "next/link";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function LocaleLink({
  locale,
  href,
  className,
  children,
}: {
  locale: string;
  href: string; // 传入 "/verify" 或 "/get-started" 或 "/get-started/nft"
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

export default async function NFTPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";

  const MINT_URL = "https://waoc-genesis-mint.vercel.app/";

  const t = {
    back: isZh ? "返回 Get Started" : "Back to Get Started",
    title: isZh ? "Genesis NFT" : "Genesis NFT",
    subtitle: isZh
      ? "起源与身份层：用更少的话讲清楚 777、价值、Mint 与持有者意义。"
      : "Origin & identity layer: 777, meaning, minting, and what holders represent.",
    ctaMint: isZh ? "打开 Mint 页面" : "Open Mint Page",
    ctaVerify: isZh ? "去核验 Verify" : "Go to Verify",
    ctaDocs: isZh ? "阅读 Docs" : "Read Docs",

    sec1: isZh ? "它是什么" : "What it is",
    sec1p: isZh
      ? "WAOC Genesis NFT 是 WAOC 生态的“起点凭证”。它不是一个短期噱头，而是一个长期叙事的起源层：记录参与、承诺与连接。"
      : "WAOC Genesis NFT is the on-chain origin of the WAOC ecosystem. It represents participation and continuity—built for long-term alignment, not short-term hype.",

    sec2: isZh ? "关键点" : "Key points",
    bullets: isZh
      ? [
          "固定供应：777（象征性稀缺与“起源编号”）",
          "公开透明：链上可验证、可追溯",
          "作为身份层：连接后续生态（实践、社区、治理）",
          "持有者：代表参与与共识的早期一层",
        ]
      : [
          "Fixed supply: 777 (symbolic scarcity & origin numbering)",
          "Verifiable on-chain: transparent and auditable",
          "Identity layer: bridges the ecosystem (practice, community, governance)",
          "Holders represent early participation and continuity",
        ],

    sec3: isZh ? "你可以怎么做" : "What you can do",
    steps: isZh
      ? ["先核验官方链接（Verify）", "打开 Mint 页面铸造", "加入社区，持续参与后续生态"]
      : ["Verify official links first", "Open the mint page and mint", "Join the community and continue participation"],
    note: isZh
      ? "安全提示：WAOC 不会私信索要助记词或私钥。请只使用官方链接。"
      : "Security: WAOC will never DM you for seed phrases or private keys. Use official links only.",

    footer: isZh ? "本网站不构成任何投资建议。" : "This site does not constitute financial advice.",
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[rgb(247,246,242)]">
      {/* subtle backdrop */}
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
          {/* top actions */}
          <div className="flex items-center justify-between">
            <LocaleLink
              locale={locale}
              href="/get-started"
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

          {/* header */}
          <div className="mt-10">
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
              {t.subtitle}
            </p>
          </div>

          {/* main card */}
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
              <div className="text-lg font-semibold text-neutral-900">{t.sec3}</div>
              <ol className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700 list-decimal pl-5">
                {t.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>

              <div className="mt-6 flex flex-col gap-3">
                <ExternalLink
                  href={MINT_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[rgb(182,129,78)] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  {t.ctaMint} <span aria-hidden>→</span>
                </ExternalLink>

                <LocaleLink
                  locale={locale}
                  href="/verify"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
                >
                  {t.ctaVerify} <span aria-hidden>→</span>
                </LocaleLink>
              </div>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-white/70 p-4 text-xs text-neutral-600">
                {t.note}
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
