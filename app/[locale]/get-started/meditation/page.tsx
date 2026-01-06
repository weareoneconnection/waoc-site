// app/[locale]/get-started/meditation/page.tsx
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

export default async function MeditationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";

  const APP_URL = "https://waoc-meditation-mvp-test.vercel.app/";

  const t = {
    back: isZh ? "返回 Get Started" : "Back to Get Started",
    title: isZh ? "Practice & Mindfulness" : "Practice & Mindfulness",
    subtitle: isZh
      ? "用更温和、可持续的方式参与：练习、觉察、长期对齐。"
      : "Participate in a sustainable way: practice, awareness, and long-term alignment.",
    ctaOpen: isZh ? "打开 Meditation App" : "Open Meditation App",
    ctaVerify: isZh ? "去核验 Verify" : "Go to Verify",
    ctaDocs: isZh ? "阅读 Docs" : "Read Docs",

    sec1: isZh ? "它是什么" : "What it is",
    sec1p: isZh
      ? "Practice 是 WAOC 的“长期层”。我们把连接理解为一种持续的内在秩序：稳定、清醒、可协作。冥想 App 用来承载这种日常练习。"
      : "Practice is the long-term layer of WAOC. Connection is not only on-chain—it’s also daily clarity and stable coordination. The meditation app supports this habit.",

    sec2: isZh ? "快速使用（3 步）" : "Quick start (3 steps)",
    steps: isZh
      ? ["打开 App", "选择一个练习（呼吸/专注/放松）", "坚持 7 天，形成稳定节奏"]
      : ["Open the app", "Pick a practice (breath/focus/relax)", "Stay consistent for 7 days"],

    sec3: isZh ? "为什么它与 WAOC 相关" : "Why it matters to WAOC",
    bullets: isZh
      ? [
          "长期对齐：减少短期噪音，让参与更稳定",
          "更好的协作：清晰与耐心能提升社区质量",
          "价值观一致：爱、和平、团结从日常开始",
        ]
      : [
          "Long-term alignment over short-term noise",
          "Better coordination through clarity and patience",
          "Values: love, peace, unity—starting from daily practice",
        ],

    note: isZh
      ? "安全提示：请只通过官网提供的链接打开 App。WAOC 不会索要助记词或私钥。"
      : "Security: Open the app only via official links. WAOC will never ask for seed phrases or private keys.",
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

              <div className="mt-7 text-lg font-semibold text-neutral-900">{t.sec3}</div>
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
              <div className="text-lg font-semibold text-neutral-900">{t.sec2}</div>
              <ol className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700 list-decimal pl-5">
                {t.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>

              <div className="mt-6 flex flex-col gap-3">
                <ExternalLink
                  href={APP_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[rgb(182,129,78)] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  {t.ctaOpen} <span aria-hidden>→</span>
                </ExternalLink>

                <LocaleLink
                  locale={locale}
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
                >
                  {isZh ? "返回入口页" : "Back to hub"} <span aria-hidden>→</span>
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
