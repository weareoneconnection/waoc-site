// app/[locale]/practice/page.tsx
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

export default async function PracticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";

  const APP_URL = "https://waoc-meditation-mvp-test.vercel.app/";

  const t = {
    back: isZh ? "返回首页" : "Back to Home",
    title: isZh ? "Practice & Mindfulness" : "Practice & Mindfulness",
    subtitle: isZh
      ? "连接不是口号，而是一种日常的稳定与清醒：让参与更长期、更有质量。"
      : "Connection is not a slogan—it’s daily clarity and stability that improves long-term participation.",
    ctaVerify: isZh ? "去 Verify 核验" : "Go to Verify",
    ctaDocs: isZh ? "阅读 Docs" : "Read Docs",

    sec1: isZh ? "这部分做什么" : "What this is for",
    sec1p: isZh
      ? "Practice 是 WAOC 的“长期对齐层”。它帮助社区从短期噪音中抽离出来，回到更清晰、更可协作的状态。"
      : "Practice is WAOC’s long-term alignment layer. It helps the community reduce short-term noise and return to clarity and cooperation.",

    sec2: isZh ? "建议节奏（7 天）" : "Suggested rhythm (7 days)",
    bullets: isZh
      ? ["每天 5–10 分钟", "同一时间练习", "记录感受（更稳定、更专注、更平和）"]
      : ["5–10 minutes daily", "Same time each day", "Notice changes: stability, focus, calm"],

    actions: isZh ? "入口" : "Links",
    a1: isZh ? "打开 Meditation 页面" : "Open Meditation page",
    a2: isZh ? "打开 Meditation App" : "Open Meditation App",
    a3: isZh ? "返回 Get Started" : "Back to Get Started",

    note: isZh
      ? "安全提示：请只使用官网提供的入口。WAOC 不会索要助记词或私钥。"
      : "Security: use official links only. WAOC will never ask for seed phrases or private keys.",
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
              <div className="text-lg font-semibold text-neutral-900">{t.actions}</div>

              <div className="mt-5 flex flex-col gap-3">
                <LocaleLink
                  locale={locale}
                  href="/get-started/meditation"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[rgb(182,129,78)] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  {t.a1} <span aria-hidden>→</span>
                </LocaleLink>

                <ExternalLink
                  href={APP_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
                >
                  {t.a2} <span aria-hidden>↗</span>
                </ExternalLink>

                <LocaleLink
                  locale={locale}
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
                >
                  {t.a3} <span aria-hidden>→</span>
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
