// app/[locale]/get-started/token/page.tsx
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

export default async function TokenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";

  // 你可以以后替换成 Dexscreener / Jupiter / Raydium 的链接
  const TOKEN_URL = "https://dexscreener.com/solana/3mJvSq4KG51KfsCZCafsHfHjFs5st361a55ipYDERdW9";

  const t = {
    back: isZh ? "返回 Get Started" : "Back to Get Started",
    title: isZh ? "WAOC Token" : "WAOC Token",
    subtitle: isZh
      ? "代币是参与的“规则层”：合约、流动性、分配与安全提示。"
      : "Token is the rules layer: contracts, liquidity, allocation, and safety.",
    ctaView: isZh ? "在 Dexscreener 查看" : "View on Dexscreener",
    ctaVerify: isZh ? "去核验 Verify" : "Go to Verify",
    ctaDocs: isZh ? "阅读 Docs" : "Read Docs",

    sec1: isZh ? "它是什么" : "What it is",
    sec1p: isZh
      ? "WAOC Token 用于连接社区参与、激励与协作的链上载体。我们强调透明与可验证：先核验，再参与。"
      : "WAOC Token supports participation, incentives, and coordination. We prioritize transparency and verification: verify first, then act.",

    sec2: isZh ? "你需要知道的事" : "What you should know",
    bullets: isZh
      ? [
          "先核验：只使用官网提供的合约与链接",
          "流动性/交易页面：优先选择可验证平台",
          "风险提示：价格波动大，谨慎参与",
          "反诈骗：WAOC 不会私信索要助记词或私钥",
        ]
      : [
          "Verify first: use official contracts/links only",
          "Use verifiable trading pages and explorers",
          "Risk notice: high volatility—act carefully",
          "Anti-scam: WAOC will never DM for seed phrases or keys",
        ],

    sec3: isZh ? "下一步" : "Next step",
    next: isZh
      ? "去 Verify 页面确认官方链接，再查看 Dexscreener。"
      : "Go to Verify to confirm official links, then view Dexscreener.",

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
              <div className="text-lg font-semibold text-neutral-900">{t.sec3}</div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{t.next}</p>

              <div className="mt-6 flex flex-col gap-3">
                <ExternalLink
                  href={TOKEN_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[rgb(182,129,78)] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  {t.ctaView} <span aria-hidden>→</span>
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
                {isZh
                  ? "提示：如果你还没有最终合约地址/交易对链接，先把按钮留着占位，等上线后再替换。"
                  : "Tip: If the final contract/pair link is not ready, keep it as a placeholder and replace later."}
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
