// app/[locale]/get-started/whitepaper/page.tsx
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

export default async function WhitepaperPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";

  const t = {
    back: isZh ? "返回 Get Started" : "Back to Get Started",
    title: isZh ? "Whitepaper (Summary)" : "Whitepaper (Summary)",
    subtitle: isZh
      ? "一屏读懂：WAOC 的理念、结构与路线图（极简版）。"
      : "One-screen summary: vision, structure, and roadmap (minimal).",
    ctaVerify: isZh ? "去核验 Verify" : "Go to Verify",
    ctaDocs: isZh ? "阅读 Docs" : "Read Docs",
    sec1: isZh ? "愿景" : "Vision",
    sec1p: isZh
      ? "WAOC 是一项长期努力：用透明可验证的链上系统，重建信任、协作与人与人的连接。"
      : "WAOC is a long-term effort to restore trust, coordination, and human connection through transparent, verifiable on-chain systems.",
    sec2: isZh ? "核心模块" : "Core modules",
    modules: isZh
      ? [
          { k: "Verification", v: "官方链接与合约核验中心（先核验再参与）" },
          { k: "Genesis & Identity", v: "起源与身份层（Genesis NFT）" },
          { k: "Practice", v: "冥想与觉察（长期对齐与社区质量）" },
          { k: "Token & Coordination", v: "参与规则、激励与协作机制（链上透明）" },
        ]
      : [
          { k: "Verification", v: "Official links & contract verification (verify first)" },
          { k: "Genesis & Identity", v: "Origin & identity layer (Genesis NFT)" },
          { k: "Practice", v: "Mindfulness & long-term alignment" },
          { k: "Token & Coordination", v: "Participation rules, incentives & coordination" },
        ],
    sec3: isZh ? "路线图（简版）" : "Roadmap (minimal)",
    roadmap: isZh
      ? [
          "阶段 1：官网 + Verify + Get Started 上线",
          "阶段 2：Genesis NFT 叙事完善（权益/空投/透明规则）",
          "阶段 3：Meditation App 迭代（内容、节奏、习惯系统）",
          "阶段 4：Token 参与机制与治理工具逐步开放",
          "阶段 5：全球社区协作实验（One Connection）",
        ]
      : [
          "Phase 1: Site + Verify + Get Started launch",
          "Phase 2: Genesis NFT narrative & transparent rules",
          "Phase 3: Meditation App iterations (content, habit loop)",
          "Phase 4: Token participation & governance tools",
          "Phase 5: Global collaboration experiment (One Connection)",
        ],
    note: isZh
      ? "你可以把完整白皮书放在 Docs 或外部链接（Notion/PDF），这里保持极简即可。"
      : "You can host the full whitepaper in Docs or external (Notion/PDF). Keep this page minimal.",
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
              <div className="mt-4 space-y-3">
                {t.modules.map((m) => (
                  <div key={m.k} className="rounded-2xl border border-neutral-200 bg-white/60 p-4">
                    <div className="text-sm font-semibold text-neutral-900">{m.k}</div>
                    <div className="mt-1 text-sm leading-relaxed text-neutral-600">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 rounded-3xl border border-neutral-200 bg-white/70 p-7 shadow-sm backdrop-blur">
              <div className="text-lg font-semibold text-neutral-900">{t.sec3}</div>
              <ol className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700 list-decimal pl-5">
                {t.roadmap.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ol>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-white/70 p-4 text-xs text-neutral-600">
                {t.note}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <LocaleLink
                  locale={locale}
                  href="/docs"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[rgb(182,129,78)] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  {t.ctaDocs} <span aria-hidden>→</span>
                </LocaleLink>

                <LocaleLink
                  locale={locale}
                  href="/verify"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
                >
                  {t.ctaVerify} <span aria-hidden>→</span>
                </LocaleLink>
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
