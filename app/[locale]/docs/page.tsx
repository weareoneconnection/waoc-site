import Link from "next/link";
import React from "react";

function L({
  locale,
  href,
  children,
  className,
}: {
  locale: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const normalized = href.startsWith("/") ? href : `/${href}`;
  return (
    <Link href={`/${locale}${normalized}`} className={className}>
      {children}
    </Link>
  );
}

function SoftBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 opacity-[0.22]">
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
    </div>
  );
}

function Card({
  title,
  desc,
  href,
  cta,
  locale,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
  locale: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="text-lg font-semibold text-neutral-900">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</div>
      <div className="mt-5">
        <L
          locale={locale}
          href={href}
          className="inline-flex items-center gap-2 rounded-2xl bg-[rgb(182,129,78)] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
        >
          {cta} <span aria-hidden>→</span>
        </L>
      </div>
    </div>
  );
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";

  const t = {
    title: isZh ? "Docs" : "Docs",
    subtitle: isZh
      ? "用最少的文字，把 WAOC 的结构、规则与路线讲清楚。"
      : "Clear, minimal documentation for WAOC: structure, rules, and roadmap.",
    back: isZh ? "返回首页" : "Back to Home",
    ctaVerify: isZh ? "去核验" : "Verify",
    sections: [
      {
        title: isZh ? "快速开始" : "Get started",
        desc: isZh ? "先看总览，再按路径学习四个模块。" : "Start with the overview, then follow the learning path.",
        href: "/get-started",
        cta: isZh ? "打开 Get Started" : "Open Get Started",
      },
      {
        title: isZh ? "白皮书（精简版）" : "Whitepaper (short)",
        desc: isZh ? "愿景、路线图、长期原则。" : "Vision, roadmap, and long-term principles.",
        href: "/get-started/whitepaper",
        cta: isZh ? "阅读白皮书" : "Read whitepaper",
      },
      {
        title: isZh ? "Genesis & 身份" : "Genesis & Identity",
        desc: isZh ? "777 的意义、权益与参与逻辑。" : "Meaning of 777, rights, and participation logic.",
        href: "/get-started/nft",
        cta: isZh ? "打开 NFT 页面" : "Open NFT page",
      },
      {
        title: isZh ? "代币与参与规则" : "Token & participation",
        desc: isZh ? "合约、流动性、分配、风险提示与核验方式。" : "Contracts, liquidity, allocation, risks, and verification.",
        href: "/get-started/token",
        cta: isZh ? "打开 Token 页面" : "Open token page",
      },
    ],
  };

  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-[rgb(247,246,242)]">
      <SoftBg />
      <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-16">
        <div className="flex items-center justify-between">
          <L
            locale={locale}
            href="/"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
          >
            ← {t.back}
          </L>
          <L
            locale={locale}
            href="/verify"
            className="rounded-xl border border-neutral-200 bg-white/70 px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm hover:bg-white"
          >
            {t.ctaVerify} →
          </L>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {t.sections.map((s) => (
            <Card
              key={s.href}
              title={s.title}
              desc={s.desc}
              href={s.href}
              cta={s.cta}
              locale={locale}
            />
          ))}
        </div>

        <div className="mt-12 text-xs text-neutral-500">
          © {new Date().getFullYear()} WAOC. All rights reserved.{" "}
          <span className="mx-2">•</span>
          {isZh ? "本网站不构成任何投资建议。" : "This site does not constitute financial advice."}
        </div>
      </div>
    </main>
  );
}
